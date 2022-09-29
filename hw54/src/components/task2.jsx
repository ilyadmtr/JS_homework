import React from 'react';

const Task2 = () => {
    const info = {
        name: 'Ilya Dmytrenko',
        number: '+380985406714',
        email: 'ilyadmytrenko@gmail.vom'
    }
    return (
        <div>
            <h1>Task 2</h1>
            <p>Name: {info.name}</p>
            <p>Phonenumber: {info.number}</p>
            <p>Email: {info.email}</p>
        </div>
    );
};

export default Task2;