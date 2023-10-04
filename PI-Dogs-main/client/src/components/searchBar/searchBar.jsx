import { useState } from 'react';
import { getDogsName } from '../../Redux/actions';
import style from './searchBar.module.css'
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const handleOnClick = () =>{
       dispatch(getDogsName(name))
       setName('')
    }
    const handleName = (event) => {
        setName(event.target.value)
    }
   return (
    <div>
        <input className={style.label} type='text' onChange={handleName} value={name}/>
        <button className={style.button} onClick={handleOnClick}>agregar</button>
    </div>
   )
}
export default SearchBar;