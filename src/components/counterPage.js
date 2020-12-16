import React, { useState } from 'react';
import Counter from './counter'
import Total from './total'

const CounterPage = () => {
    const [index, setIndex] = useState(0);
    const [counters, setCounter] = useState([])

    const addNewCounter = () => {
        setCounter([...counters, index + 1]);
        setIndex(index + 1);
    }

    return (
        <div>
            <p>Counter</p>
            {counters.map((item, i) => {
                return <Counter incrementValue={i + 1} id={i + 1} key={i + 1}></Counter>
            })}
            <button onClick={() => { addNewCounter() }}>New Counter</button>
            <Total></Total>
        </div>

    );
}

export default CounterPage;