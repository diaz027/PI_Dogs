import { useNavigate, useLocation } from "react-router-dom"
import SearchBar from "../searchBar/searchBar"
import style from './nav.module.css'

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/home')
    }
        const onClikcHandler = () => {
            navigate('/form')
        }
    return (
        <div>
            {location.pathname !== '/home' && location.pathname !== '/' && <button className={style.boton} onClick={navigateHandler} >Home</button>}
            {location.pathname === '/home' && <SearchBar/>}
            {location.pathname === '/home' && <button  className={style.boton} onClick={onClikcHandler}>CREATE</button>}
        </div>
    )
}
export default NavBar;