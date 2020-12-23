import React, { useEffect, useState  } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import Slider from './slider';
import { addContent } from "../modules/action";
import axios from 'axios';

const ContentPage = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentItem, setCurrentItem] = useState({});
    const [currentImage, setCurrentImage] = useState(null);
    const [items, setItems] = useState({});
    const [index, setIndex] = useState(0); 
    const dispatch = useDispatch();
    const history = useHistory();

    const state = useSelector((state) => state);

    const setImage = (images) => {
        let hasBackdrop = false;
        for (const item in images) {
            if (images[item].type === "backdrop" && !hasBackdrop) {
                hasBackdrop = true;
                setCurrentImage(`https://assets.nunchee.com/out/${images[item]._id}/original/${images[item].type}/75.jpeg`)
            }
        }
    }

    const setValues = (index, item, images) => {
        setIndex(index);
        setCurrentItem(item);
        setImage(images);
    }
    
    useEffect(() => {
        setLoading(true);
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://mychannel.nunchee.tv/api/generic/playlists/details/5b845b8346cc29000e4f186a';

        axios.get(proxyUrl + targetUrl)
            .then((response) => {
                setLoading(false);
                setItems(response.data.data.items);
                setValues(0, response.data.data.items[0], response.data.data.items[0].images);
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
        <div className="page">
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
        </div>

    );
}

export default ContentPage;