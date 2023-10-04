import { useState } from 'react';
import { getDogsName } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import style from './searchBar.module.css'

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleOnClick = async () => {
        try {
            const response = await dispatch(getDogsName(name)); //hacemos a la funcion de mi actions y en que caso de que no hace ealgo con ese nombre tira el alert

            if (response && response.payload.length === 0) {
                alert(`No se encontró ningún perro con el nombre "${name}"`);
            }
            setName('');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleName = (event) => {
        setName(event.target.value)
    }
    return (
        <div>
            <input className={style.label} type='text' onChange={handleName} value={name} />
            <button className={style.button} onClick={handleOnClick}>agregar</button>
        </div>
    )
}
export default SearchBar;