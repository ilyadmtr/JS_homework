import React from 'react';

const Animal = ({animal}) => {
    return (
        <div>
            <p>Name: {animal.name}</p>
            <p>Weight: {animal.weight}</p>
            <p>Age: {animal.age}</p>
            <p>Color: <div style={{width: '25px', height: '25px', background: `${animal.color}`}}></div></p>
        </div>
    );
};

export default Animal;