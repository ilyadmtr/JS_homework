import React from 'react';
import './index.css';
class Task2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {class: ''};
    }
    render() {
        return(
            <div className='block'>
            <div className="block-btns">
                <button className='btn red' onClick={()=>{this.setState({class: 'red'})}}>Red</button>
                <button className='btn green' onClick={()=>{this.setState({class: 'green'})}}>Green</button>
                <button className='btn yellow' onClick={()=>{this.setState({class: 'yellow'})}}>Yellow</button>
            </div>
            <div className={`block-text ${this.state.class}`}>
                Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.
            </div>
        </div>
        )
    }
}

export default Task2;