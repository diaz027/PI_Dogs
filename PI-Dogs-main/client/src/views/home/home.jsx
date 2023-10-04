import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDogs,} from '../../Redux/actions';
import Cards from '../../components/cards/cards';
import style from './home.module.css'

//paginado
const DOGS_PER_PAGE = 8;

const Home = () => {
  const newDogs = useSelector((state) => state?.dogs);
  const totalDogs = newDogs?.length;
  const totalPage = Math.ceil(totalDogs/DOGS_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const startDogs = currentPage * DOGS_PER_PAGE;
  const endDogs = startDogs + DOGS_PER_PAGE;
  const dogsToDisplay = newDogs?.slice(startDogs, endDogs)

  const nextHandler = () => {
    if(currentPage < totalPage - 1 ) {
      setCurrentPage(currentPage + 1)
    }
  };

  const prevHandler = () => {
    if(currentPage > 0 ) {
      setCurrentPage(currentPage - 1);
    }
  };
 

    return (
      <div className={style.home}>
        <Cards dogs={dogsToDisplay}/>
        <div>
          <button onClick={prevHandler} disabled={currentPage === 0} >Prev</button>
          <span style={{color:'white'}}>pagina: {currentPage + 1} de {totalPage} </span>
          <button onClick={nextHandler} disabled={currentPage === totalPage-1} >Next</button>
        </div>
      </div>
    );
  }
export default Home;
