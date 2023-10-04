import SearchBar from "../searchBar/searchBar"
import { useNavigate, useLocation } from "react-router-dom"

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/home')
    }
    return (
        <div>
            {location.pathname !== '/home' && location.pathname !== '/' && <button onClick={navigateHandler} >Home</button>}
            {location.pathname === '/home' && <SearchBar/>}
        </div>
    )
}
export default NavBar;