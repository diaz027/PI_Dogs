import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterBdApi, filterTemp, getDogs, orderPesos, temp, } from '../../Redux/actions';
import { orderCards } from '../../Redux/actions'
import Cards from '../../components/cards/cards';
import style from './home.module.css'
import Paginado from '../../components/paginado/paginado';
// import axios from 'axios'

//paginado


const Home = () => {
  const newTemperamento = useSelector((state) => state?.temperaments);
  
  const [temperamentos, setTemperamentos] = useState("");
  const dispatch = useDispatch();
  

  
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  }

  const handleOrderPesos = (event) => {
    dispatch(orderPesos(event.target.value));
  }

  const handleOrderTotales =(event) => {
    const mate = event.target.value
    dispatch(filterBdApi(mate));
  }

  const handlerFilter = (event) => {
    const seleccion = event.target.value;
    setTemperamentos(seleccion);
    dispatch(filterTemp(seleccion))
  }
  useEffect(() => {
    dispatch(temp());
  }, []);



  return (
    <div className={style.home}>

      <select className={style.option} onChange={handleOrder}>
        <option value="A">A-Z</option>
        <option value="D">Z-A</option>
      </select>

      <select className={style.option} onChange={handleOrderTotales} >
        <option value="api">api</option>
        <option value="db">db</option>
      </select>

      <select  className={style.option} onChange={handleOrderPesos}>
        <option value='MaxMin'>Max/Min</option>
        <option value="PesoMax">PesoMax</option>
        <option value="PesoMin" >PesoMin</option>
      </select>


      <select className={style.option} onChange={handlerFilter}>
        {newTemperamento.map(temperament => <option value={temperament.name} name={temperament.name} key={temperament.name}>{temperament.name}</option>)}
      </select>

      <Paginado />
    </div>
  );
}
export default Home;
