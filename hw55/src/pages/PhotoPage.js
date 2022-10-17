import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const PhotoPage = () => {
    const [list, setList] = useState('');
    useEffect(() => {
        fetch('https://api.teleport.org/api/urban_areas')
            .then(res => res.json())
            .then(data => {
                setList(data._links['ua:item'])
            });

    }, [])
    return (
        <>
            <h1 style={{'textAlign': 'center'}}>Image Page</h1>
            <div className='otherImage'>
                <img src="https://www.cityparkhotelkiev.com.ua//octopus/Upload/images/Categories/1sofiya-1.jpg"
                     alt="photo"/>
                <img src="https://www.cityparkhotelkiev.com.ua//octopus/Upload/images/Categories/2lavra.jpg"
                     alt="photo"/>
                <img src="http://www.cityparkhotelkiev.com.ua//octopus/Upload/images/Categories/3golden_gate.jpg"
                     alt="photo"/>
                <img src="https://www.cityparkhotelkiev.com.ua//octopus/Upload/images/Categories/4vladimir.jpg"
                     alt="photo"/>
            </div>
            <div className='list-box'>
                Список інших країн, для перегляду їх фото:
                {list && list.map((el, index) => {
                    if (index < 20) {
                        return <Link className={'list-item'} key={el.href} to={`/photoPage/${el.name}`}>{el.name}</Link>
                    }
                })}
            </div>
        </>
    );
};

export default PhotoPage;