import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterTemp, getDogs, orderPesos, temp, } from '../../Redux/actions';
import { orderCards } from '../../Redux/actions'
import Cards from '../../components/cards/cards';
import style from './home.module.css'
// import axios from 'axios'

//paginado
const DOGS_PER_PAGE = 8;

const Home = () => {
  const newTemperamento = useSelector((state) => state?.temperaments);
  const newDogs = useSelector((state) => state?.newDogs || []);
  const [temperamentos, setTemperamentos] = useState("");
  const totalDogs = newDogs?.length;
  const totalPage = Math.ceil(totalDogs / DOGS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const startDogs = currentPage * DOGS_PER_PAGE;
  const endDogs = startDogs + DOGS_PER_PAGE;
  const dogsToDisplay = newDogs?.slice(startDogs, endDogs);

  const nextHandler = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1)
    }
  };

  const prevHandler = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  }

  const handleOrderPesos = (event) => {
    dispatch(orderPesos(event.target.value));
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

      <select className={style.option} >
        <option value="Api">api</option>
        <option value="Base de datos">db</option>
      </select>

      <select className={style.option} onChange={handleOrderPesos}>
        <option value='PesoMax'>PesoMax</option>
        <option value='PesoMin' >PesoMin</option>
      </select>


      <select className={style.option} onChange={handlerFilter}>
        {newTemperamento.map(temperament => <option value={temperament.name} name={temperament.name} key={temperament.name}>{temperament.name}</option>)}
      </select>

      <Cards newDogs={dogsToDisplay} />

      <div>
        <button className={style.boton} onClick={prevHandler} disabled={currentPage === 0} >Prev</button>
        <span style={{ color: 'white' }}>pagina: {currentPage + 1} de {totalPage} </span>
        <button className={style.boton} onClick={nextHandler} disabled={currentPage === totalPage - 1} >Next</button>
      </div>
    </div>
  );
}
export default Home;
