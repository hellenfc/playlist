import React, { useState } from "react";

const Slider = ({ images, image, description, title, slideRight, slideLeft }) => {
    const goDetails = () => {
        console.log('Details')
    }
    return (

        <div>
            <button onClick={() => { slideLeft() }}>{"<"}</button>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{description}</p>
            <button onClick={goDetails}>Ir a Details</button>
            <button onClick={() => { slideRight() }}>{">"}</button>
        </div>

    );
};

export default Slider;
