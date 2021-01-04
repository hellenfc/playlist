import React from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Slider = ({ image, description, title, slideRight, slideLeft, goDetails }) => {
    return (
        <div className="slider" >
            <img className="slider-image" src={image} onError={e => e.target.src = require('../assets/img.png')} alt="" />
            <button className="right-button" onClick={() => { slideRight() }}><NavigateNextIcon fontSize="large" /></button>
            <button className="left-button" onClick={() => { slideLeft() }}><NavigateBeforeIcon fontSize="large" /></button>
            <div className="content">
                <h2 className=" slider-title" >{title}</h2>
                <p className=" slider-description" >{description}</p>
                <button className="details-button" onClick={() => { goDetails() }}><h3>Details</h3></button>
            </div>
        </div>

    );
};

export default Slider;
