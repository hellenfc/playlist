import React, {useState} from 'react';

const Counter = (data) => {
    const [counterData, setCounterData] = useState({ value: 0, id: data.id });

    const reduceValue = () => {
        const newValue = counterData.value - data.incrementValue;
        setCounterData({...counterData, value: newValue})
    }

    const increaseValue = () => {
        const newValue = counterData.value + data.incrementValue;
        setCounterData({ ...counterData, value: newValue })
    }

    console.log('counterdata', counterData)
    return (
        <div>       
            <button onClick={() => { reduceValue()}}>{'-'}</button>
            <p>{counterData.value}</p>
            <button onClick={() => { increaseValue() }}>{'+'}</button>
        </div>

    );
}

export default Counter;