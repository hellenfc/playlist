import React from "react";
import { useSelector } from "react-redux";


const Total = () => {
    const state = useSelector((state) => state);
    return (
        <div className="total">
           <p>Total: {state.counterReducer}</p>
        </div>

    );
};

export default Total;
