import React from 'react';
import './index.css';
import Experience from "./Experience";
import Skills from "./Skills";
import Animal from "./Animal";

const Task2 = () => {
    const info = {
        name: 'Ilya Dmytrenko',
        number: '+380985406714',
        email: 'ilyadmytrenko@gmail.vom',
        city: 'Kyiv',
        experience: [
            {company: 'Epam', time: '5 month'},
            {company: 'Google', time: '2 year'},
            {company: 'Apple', time: '1 year 3 month'}
        ],
        skills: ['JS', "TS", 'Node js', 'React js', 'Css', 'SCSS'],
        photoURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        animal: {
         name: "Дея",
         weight: 30,
         age: '5 months',
         color: 'brown'
        }
    }
    return (
        <div>
            <img src={info.photoURL} alt="avatar" className='avatar'/>
            <h1>Task 2</h1>
            <p>Name: {info.name}</p>
            <p>Phonenumber: {info.number}</p>
            <p>Email: {info.email}</p>
            <div>Experience: {info.experience.map((el, index)=><Experience exp={el} key={index}/>)}</div>
            <div>Skills: {info.skills.map((el,index)=><Skills skill={el} key={index}/>)}</div>
            <div>Animal: <Animal animal={info.animal}/></div>
        </div>
    );
};

export default Task2;