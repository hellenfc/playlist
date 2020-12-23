import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetailPage = ({ match }) => {
    const [currentItem, setCurrentItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentImage, setCurrentImage] = useState(null);

    const setImage = (images) => {
        let hasBackdrop = false;
        for (const item in images) {
            if (images[item].type === "backdrop" && !hasBackdrop) {
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
                console.log('response', response.data)
                setCurrentItem(response.data.data);
                setImage(response.data.data.images);
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

    return (
        <div className="page">
            <h1 className="header" >Details</h1>
            {
                currentItem && currentItem.title &&
                <div> 
                    <img className="detail-image" src={currentImage} alt={currentItem.title.original} />
                    <p>{currentItem.title.original}</p>
                    <p>{currentItem.description.plain.original}</p>
                </div>
            }
        </div>
    );
}

export default DetailPage;