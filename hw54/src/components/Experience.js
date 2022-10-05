import React from 'react';

const Experience = ({exp}) => {
    return (
        <p className='experience'>Company: {exp.company}, Time: {exp.time}</p>
    );
};

export default Experience;