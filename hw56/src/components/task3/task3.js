import React, {useEffect, useState} from 'react';
import axios from "axios";

const Task3 = () => {
    const [quote, setQuote] = useState('');
    const buttonClick=()=>{
        axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', { headers:{'X-Api-Key': 'dCD/89GK9uDpa8f1+c782w==ivbkIqrps0Gz7QI9',  'Content-Type': 'application/json'}}).then(response=>{
            setQuote(response.data[0]);
            console.log(response.data)
        }).catch(error=>console.log(error))
    }
    return (
        <div>
            <button onClick={buttonClick}>Цитата дня</button>
            <blockquote>{quote != '' ? (`${quote.quote} <br/> Author: ${quote.author}`) : ''}</blockquote>
        </div>
    );
};

export default Task3;