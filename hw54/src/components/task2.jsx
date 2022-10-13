import React, {useState} from 'react';
import './index.css';
import Experience from "./Experience";
import Skills from "./Skills";
import Animal from "./Animal";
import {useForm} from "react-hook-form";

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
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [nameVal, setNameVal] = useState(info.name);
    const [phoneVal, setPhoneVal] = useState(info.number);
    const [emailVal, setEmailVal] = useState(info.email);

    return (
        <form onSubmit={handleSubmit(data=>console.log(data))}>
            <img src={info.photoURL} alt="avatar" className='avatar'/>
            <input {...register('name', {required: true, maxLength: 15})} type={'text'} placeholder='Name...' onChange={(e)=>setNameVal(e.target.value)} value={nameVal}/>
            <input {...register('phone', {required: true, minLength: 4})} type={'text'} placeholder='Phone number...' onChange={(e)=>setPhoneVal(e.target.value)} value={phoneVal}/>
            <input {...register('email')} type={'email'} placeholder='Email...' onChange={(e)=>setEmailVal(e.target.value)} value={emailVal}/>
            <div>Experience: {info.experience.map((el, index)=><Experience exp={el} key={index}/>)}</div>
            <div>Skills: {info.skills.map((el,index)=><Skills skill={el} key={index}/>)}</div>
            <div>Animal: <Animal animal={info.animal}/></div>
            <button onClick={()=>{
                setPhoneVal(info.number);
                setEmailVal(info.email);
                setNameVal(info.name);
            }}>Reset</button>

        </form>
    );
};

export default Task2;