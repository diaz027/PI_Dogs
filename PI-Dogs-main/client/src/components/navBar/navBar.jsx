import SearchBar from "../searchBar/searchBar"
import { useNavigate, useLocation } from "react-router-dom"

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
            {location.pathname !== '/home' && location.pathname !== '/' && <button onClick={navigateHandler} >Home</button>}
            {location.pathname === '/home' && <SearchBar/>}
            {location.pathname === '/home' && <button onClick={onClikcHandler}>CREATE</button>}
        </div>
    )
}
export default NavBar;