import React, { useEffect, useState } from 'react';
import Slider from './slider'

const ContentPage = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentItem, setCurrentItem] = useState({});
    const [currentImage, setCurrentImage] = useState(null);
    const [items, setItems] = useState({});
    const [index, setIndex] = useState(0); 

    useEffect(() => {
        setLoading(true);
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://mychannel.nunchee.tv/api/generic/playlists/details/5b845b8346cc29000e4f186a';

        fetch(proxyUrl + targetUrl)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                console.log('data', data.data)
                setItems(data.data.items);
                setValues(0, data.data.items[0], data.data.items[0].images);
            })
            .catch((e) => {
                setLoading(false);
                setError('fetch failed');
            });
    }, [])

    const slideRight = () => {
        console.log('RIGHT')
        setValues((index + 1) % items.length, items[(index + 1) % items.length], items[(index + 1) % items.length].images)
    };

    const slideLeft = () => {
        console.log('LEFT')
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            console.log('>', items.length - 1)
            setValues(items.length - 1, items[items.length - 1], items[items.length - 1].images);
        } else {
            setValues(nextIndex, items[nextIndex], items[nextIndex].images);
        }
    };

    const setValues = (index, item, images) => {
        setIndex(index);
        setCurrentItem(item);
        setImage(images);
    }

    const setImage = (images) => {
        let hasBackdrop = false;
        for (const item in images) {
            if (images[item].type === "backdrop" && !hasBackdrop) {
                hasBackdrop = true;
                setCurrentImage(`https://assets.nunchee.com/out/${images[item]._id}/original/${images[item].type}/75.jpeg`)
            }
        }
    }

    if (loading) {
        return <p>loading..</p>;
    }

    if (error !== '') {
        return <p>ERROR: {error}</p>;
    }

    return (
        <div>
            <h1>
                Content
            </h1>
            {currentItem && currentItem.title &&
                <Slider
                    title={currentItem.title.original}
                    description={currentItem.description.plain.original}
                    image={currentImage}
                    slideLeft={slideLeft}
                    slideRight={slideRight}
                />
            }
        </div>

    );
}

export default ContentPage;