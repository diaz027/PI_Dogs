import style from './landind.module.css'
import {useNavigate} from 'react-router-dom'

function Init() {

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/home')
    }

  return (
    <div className={style.img}>
      <h1>bienvenidos coleguillas</h1>
      <h2>Encuentra tu compañero canino perfecto aqui!!</h2>
      
      <button className={style.boton} onClick={navigateHandler}>HOME</button>
    </div>
  );
}
export default Init;