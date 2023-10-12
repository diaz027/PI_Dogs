import { useState } from 'react';
import { getDogsName, getDogs } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import style from './searchBar.module.css'

const SearchBar = ({setCurrentPage}) => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleOnClick = async () => {
        try {
            const response = await dispatch(getDogsName(name)); //hacemos a la funcion de mi actions y en que caso de que no hace ealgo con ese nombre tira el alert

            if (response && response.payload.length === 0) {
                alert(`No se encontró ningún perro con el nombre "${name}"`);
            }
            setName('');
            setCurrentPage(0)
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleName = (event) => {
        setName(event.target.value)
    }
    const reset = () => {
        dispatch(getDogs());
    }
    return (

        <div className={style.inputContainer}>
            <input className={style.label} type='text' onChange={handleName} value={name} />
            <button className={style.button} onClick={handleOnClick}>Buscar</button>
            <button className={style.button} onClick={reset}>reset</button>
        </div>

    )
}
export default SearchBar;