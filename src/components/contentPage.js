import React, { useEffect, useState  } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Slider from './slider';
import { addContent, setCurrentIndex } from "../modules/action";
import axios from 'axios';

const ContentPage = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentItem, setCurrentItem] = useState({});
    const [currentImage, setCurrentImage] = useState('../assets/img.png');
    const [items, setItems] = useState({});
    const [index, setIndex] = useState(0); 
    const dispatch = useDispatch();
    const history = useHistory();

    const state = useSelector((state) => state);

    const setImage = (images, type) => {
        let imageIsSet = false;
        for (const item in images) {
            if (images[item].type === type && !imageIsSet) {
                imageIsSet = true;
                setCurrentImage(`https://assets.nunchee.com/out/${images[item]._id}/original/${images[item].type}/75.jpeg`)
            }
        }
    }

    const setValues = (index, item, images) => {
        dispatch(setCurrentIndex(index));
        setIndex(index);
        setCurrentItem(item);
        setImage(images, "backdrop");
    }
    
    useEffect(() => {
        setLoading(true);
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://mychannel.nunchee.tv/api/generic/playlists/details/5b845b8346cc29000e4f186a';

        axios.get(proxyUrl + targetUrl)
            .then((response) => {
                setLoading(false);
                setItems(response.data.data.items);
                setValues(state.currentItem, response.data.data.items[state.currentItem], response.data.data.items[state.currentItem].images);
            })
            .catch((e) => {
                setLoading(false);
                setError('fetch failed');
            });
    }, [])

    const slideRight = () => {
        setValues((index + 1) % items.length, items[(index + 1) % items.length], items[(index + 1) % items.length].images)
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setValues(items.length - 1, items[items.length - 1], items[items.length - 1].images);
        } else {
            setValues(nextIndex, items[nextIndex], items[nextIndex].images);
        }
    };

    const goDetails = () => {
        dispatch(addContent(currentItem));
        history.push(`/contenidos/detalles/${currentItem._id}`);
    }

    if (loading) {
        return <p>loading..</p>;
    }

    if (error !== '') {
        return <p>ERROR: {error}</p>;
    }

    return (
        <div className="content-page">
            {currentItem && currentItem.title &&
                <Slider
                    title={currentItem.title.original}
                    description={currentItem.description.plain.original}
                    image={currentImage}
                    slideLeft={slideLeft}
                    slideRight={slideRight}
                    goDetails={goDetails}
                />
            }      
            {state.playlistReducer.length !== 0 && 
            <div className="content-history">
                <h3>History</h3> 
                <ul>
                    {state.playlistReducer.map((item, i) => {
                        return <li>{item.title.original}</li>
                    })}
                </ul>
            </div>
            }
        </div>

    );
}

export default ContentPage;