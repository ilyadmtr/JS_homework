import React, {useState} from 'react';
import './index.css';
const Task1 = () => {
    const [theme, setTheme] = useState('');
    return (
        <div className='block'>
            <div className="block-btns">
                <button className='btn red' onClick={()=>{setTheme('red')}}>Red</button>
                <button className='btn green' onClick={()=>{setTheme('green')}}>Green</button>
                <button className='btn yellow' onClick={()=>{setTheme('yellow')}}>Yellow</button>
            </div>
            <div className={`block-text ${theme}`}>
                Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.
            </div>
        </div>
    );
};

export default Task1;