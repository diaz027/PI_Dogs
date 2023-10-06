import style from './cards.module.css'
import Card from "../card/card";

const Cards = ({newDogs}) => {
    return (
        <div className={style.cards}>
            {newDogs.map(({id, name, height, weight, life_span, reference_image_id, temperament}) => {
                return (
                    <Card
                    key={id}
                    id={id}
                    name={name}
                    height={height}
                    weight={weight}
                    life_span={life_span}
                    reference_image_id={reference_image_id}
                    temperament={temperament}
                    />
                )
            })
        }
        </div>
    )
}
export default Cards;