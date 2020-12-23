import React, {useState, } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';

import { addTotal, subtractTotal } from '../modules/action';

const Counter = (data) => {
    const [counterData, setCounterData] = useState({ value: 0, id: data.id });

    const state = useSelector((state) => state);

    const dispatch = useDispatch();

   

    const reduceValue = () => {
        const newValue = counterData.value - data.incrementValue;
        dispatch(subtractTotal(data.incrementValue));
        setCounterData({...counterData, value: newValue})
    }
    
    const increaseValue = () => {
        const newValue = counterData.value + data.incrementValue;
        dispatch(addTotal(data.incrementValue));
        setCounterData({ ...counterData, value: newValue })
    }

    return (
        <div className="counter-wrapper">       
            <Button size="small" variant="contained" color="primary" onClick={() => { reduceValue()}}>-</Button>
            <p className="counter-value">{counterData.value}</p>
            <Button size="small" variant="contained"  color="primary" onClick={() => { increaseValue() }}>+</Button>
        </div>

    );
}

export default Counter;