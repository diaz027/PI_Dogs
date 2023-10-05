import { Link } from 'react-router-dom';
import style from './card.module.css'

function Card({ id, name, weight, reference_image_id }) {



    return (
        <div className={style.card}>
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            <h2>{weight.metric}</h2>
            <img className={style.img} src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`} alt='' />
        </div>
    )
}
export default Card;