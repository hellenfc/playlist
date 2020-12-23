import React from "react";
import Button from '@material-ui/core/Button';
import defaultImage from '../assets/img.png';

const Slider = ({ image, description, title, slideRight, slideLeft, goDetails }) => {
    console.log('image', image)
    return (
        <div className="slider">
            <img className="slider-image" src={image || defaultImage} alt=""/>
            <h2 className=" slider-title" >{title}</h2>
            <p className=" slider-description" >{description}</p>
            <Button variant="contained" className="details-button" onClick={() => { goDetails() }}>Details</Button>
            <Button variant="contained" className="left-button" onClick={() => { slideLeft() }}>{"<"}</Button>
            <Button variant="contained" className="right-button" onClick={() => { slideRight() }}>{">"}</Button>
        </div>

    );
};

export default Slider;
