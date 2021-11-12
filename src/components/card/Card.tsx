
import {poketmonType} from '../../actions/PoketmonActionTypes'
import style from './card.module.css';

interface Props {
    poketmon? : poketmonType
}

const Card = (props: Props) => {
    return (
        <article className={style.card}>
            <h1>{props?.poketmon?.name}</h1>
            <p>number: {props?.poketmon?.order}</p>
            <p>type: {props?.poketmon?.types[0].type.name}</p>
            <p>weight: {props?.poketmon?.weight}</p>
            <img src={props?.poketmon?.sprites.front_default} alt="poketmonImg" />
        </article>
    )
};

export default Card;