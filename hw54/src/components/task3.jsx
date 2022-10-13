import React from 'react';

const Task3 = () => {
    const info = [
        {
        city: 'Kyiv',
        country: 'Ukraine',
        year: 1991,
        photos:['https://gdb.voanews.com/c4930000-0aff-0242-0343-08d9f75fd42a_w1200_r1.jpg', 'https://all.accor.com/magazine/imagerie/1-3124.jpg']
        },
        {
            city: 'Kyiv',
            country: 'Ukraine',
            year: 1991,
            photos:['https://gdb.voanews.com/c4930000-0aff-0242-0343-08d9f75fd42a_w1200_r1.jpg', 'https://all.accor.com/magazine/imagerie/1-3124.jpg']
        },
        {
            city: 'Kyiv',
            country: 'Ukraine',
            year: 1991,
            photos:['https://gdb.voanews.com/c4930000-0aff-0242-0343-08d9f75fd42a_w1200_r1.jpg', 'https://all.accor.com/magazine/imagerie/1-3124.jpg']
        },
        {
            city: 'Kyiv',
            country: 'Ukraine',
            year: 1991,
            photos:['https://gdb.voanews.com/c4930000-0aff-0242-0343-08d9f75fd42a_w1200_r1.jpg', 'https://all.accor.com/magazine/imagerie/1-3124.jpg']
        }
        ]
    return (
        <div>
            {info.map((el, index)=>{
                return <div key={index}>
                <p>Name of city: {el.city}</p>
                <p>Name of country: {el.country}</p>
                <p>Year of independence: {el.year}</p>
                <ul>
                    <li><img src={el.photos[0]} alt="Photo Kyiv"/></li>
                    <li><img src={el.photos[1]} alt="Photo Kyiv"/></li>
                </ul>
                </div>
            })}
        </div>
    );
};

export default Task3;