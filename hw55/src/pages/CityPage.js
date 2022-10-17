import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const CityPage = () => {
    const {name} = useParams();
    const [image, setImage] = useState('');
    useEffect(() => {
        fetch(`https://api.teleport.org/api/urban_areas/slug:${name.toLowerCase()}/images`)
            .then(res => res.json())
            .then(data => {
                setImage(data.photos[0]);
            });

    }, [name])
    return (
        <div>
            <h1 style={{'textAlign': 'center'}}>{name}</h1>
            {image &&
            <img src={image.image.web} style={{width: '100%'}} alt={image.attribution.source}/>}
        </div>
    );
};

export default CityPage;