import axios from 'axios';
import style from './detail.module.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {
    const {id} =useParams();
    const [ dogs, setDogs] = useState({});

    useEffect( () => {
        async function character(){
        const response = await  axios.get(`http://localhost:3001/dogs/${id}`)
        const result = response.data;
        setDogs(result[0])
        }
        character()
     }, [id])
     return (
        <div>
        <h2>{dogs.name}</h2>
        <h2>{dogs.height?.metric}</h2>
        <h2>{dogs.weight?.metric}</h2>
        <h2>{dogs.life_span}</h2>
        <h2>{dogs.temperaments}</h2>
        <img className={style.img} src={`https://cdn2.thedogapi.com/images/${dogs.reference_image_id}.jpg`} />
        </div>
        
    )
}
export default Detail;