import React from 'react';

const Task3 = () => {
    const info = {
        city: 'Kyiv',
        country: 'Ukraine',
        year: 1991,
        photos:['https://gdb.voanews.com/c4930000-0aff-0242-0343-08d9f75fd42a_w1200_r1.jpg', 'https://all.accor.com/magazine/imagerie/1-3124.jpg']
    }
    return (
        <div>
           {/*<h1>Task 3</h1>*/}
           {/* <p>Name of city: {info.city}</p>*/}
           {/* <p>Name of country: {info.country}</p>*/}
           {/* <p>Year of independence: {info.year}</p>*/}
           {/* <ul>*/}
           {/*     <li><img src={info.photos[0]} alt="Photo Kyiv"/></li>*/}
           {/*     <li><img src={info.photos[1]} alt="Photo Kyiv"/></li>*/}
           {/* </ul>*/}
        </div>
    );
};

export default Task3;