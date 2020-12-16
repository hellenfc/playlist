import React from "react";

const Slider = ({ image, description, title, slideRight, slideLeft, goDetails }) => {
    return (
        <div>
            <button onClick={() => { slideLeft() }}>{"<"}</button>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{description}</p>
            <button onClick={() => { goDetails() }}>Ir a Details</button>
            <button onClick={() => { slideRight() }}>{">"}</button>
        </div>

    );
};

export default Slider;
