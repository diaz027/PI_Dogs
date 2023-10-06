import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterTemp, getDogs, orderPesos, } from '../../Redux/actions';
import { all, orderCards } from '../../Redux/actions'
import Cards from '../../components/cards/cards';
import style from './home.module.css'
// import axios from 'axios'

//paginado
const DOGS_PER_PAGE = 8;

const Home = () => {
  const allTempeHome = useSelector((state) => state?.tempHome)
  const newDogs = useSelector((state) => state?.dogs);
  const totalDogs = newDogs?.length;
  const totalPage = Math.ceil(totalDogs / DOGS_PER_PAGE);
console.log(allTempeHome)

  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const startDogs = currentPage * DOGS_PER_PAGE;
  const endDogs = startDogs + DOGS_PER_PAGE;
  const dogsToDisplay = newDogs?.slice(startDogs, endDogs)

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


  // const handleFilterByTemp = (event) => {
  //   dispatch(filterTemp(event.target.value))
  // }
  useEffect(() => {
    dispatch(filterTemp());
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

      <select className={style.option}  onChange={handleOrderPesos}>
        <option value= 'asc'>PesoMax</option>
        <option >PesoMin</option>
      </select>

      <select >
        <option>selectciona</option>
        {allTempeHome.map(temperament => <option name={temperament.name} key={temperament.name}>{temperament.name}</option>)}
      </select>

      <Cards dogs={dogsToDisplay} />
      <div>
        <button className={style.boton} onClick={prevHandler} disabled={currentPage === 0} >Prev</button>
        <span style={{ color: 'white' }}>pagina: {currentPage + 1} de {totalPage} </span>
        <button className={style.boton} onClick={nextHandler} disabled={currentPage === totalPage - 1} >Next</button>
      </div>
    </div>
  );
}
export default Home;
