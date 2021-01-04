import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetailPage = ({ match }) => {
    const [currentItem, setCurrentItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentImage, setCurrentImage] = useState('../assets/img-square.png');

    const setImage = (images, type) => {
        let hasBackdrop = false;
        for (const item in images) {
            if (images[item].type === type && !hasBackdrop) {
                hasBackdrop = true;
                setCurrentImage(`https://assets.nunchee.com/out/${images[item]._id}/original/${images[item].type}/75.jpeg`)
            }
        }
    }

    useEffect(() => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = `https://mychannel.nunchee.tv/api/ott/contents/details/${match.params.id}`;

        axios.get(proxyUrl + targetUrl)
            .then((response) => {
                setLoading(false);
                setCurrentItem(response.data.data);
                setImage(response.data.data.images, "square");
            })
            .catch((e) => {
                setLoading(false);
                setError('fetch failed');
            });
    }, [])

    if (loading) {
        return <p>loading..</p>;
    }

    if (error !== '') {
        return <p>ERROR: {error}</p>;
    }

    const renderStaff = () => {
        return currentItem.staff.map((member, i) => {
            return <p>{`${member.name.first} ${member.name.last}`}</p>
        })
    }

    return (
        <div className="page">
            <h1 className="main-title" >Details</h1>
            {
                currentItem && currentItem.title &&
                <div className="detail-wrapper">
                    <img className="detail-image" src={currentImage} alt={currentItem.title.original} onError={e => e.target.src = require('../assets/img-square.png')} />
                    <div>
                        <h3>{currentItem.title.original}</h3>
                        <p>Description:</p>
                        <p>{currentItem.description.plain.original}</p>
                        {
                            currentItem.staff &&
                            <div>
                                <p>Staff:</p>
                                {renderStaff()}
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default DetailPage;