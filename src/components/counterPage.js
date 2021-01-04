import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { clearTotal } from '../modules/action';


import Counter from './counter'
import Total from './total'

const CounterPage = () => {
    const [index, setIndex] = useState(0);
    const [counters, setCounter] = useState([])
    const dispatch = useDispatch();


    const addNewCounter = () => {
        setCounter([...counters, index + 1]);
        setIndex(index + 1);
        window.scrollTo(0, document.body.scrollHeight);
    }

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);

    }, [counters])

    useEffect(() => {
        dispatch(clearTotal());
    }, [])

    return (
        <div className="page counter-page">
            <h1 className="main-title" >Counter</h1>
            <Total></Total>
            {counters.map((item, i) => {
                return <Counter incrementValue={i + 1} id={i + 1} key={i + 1}></Counter>
            })}
            <Button variant="contained" color="primary" onClick={() => { addNewCounter() }}>New Counter</Button>
        </div>

    );
}

export default CounterPage;