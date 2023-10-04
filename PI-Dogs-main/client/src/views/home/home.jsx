import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDogs,} from '../../Redux/actions';
// import axios from 'axios'
import Cards from '../../components/cards/cards';



//paginado

const DOGS_PER_PAGE = 8;

function Home() {

  // dentro de una funcion iria esto abajo
  const newDogs = useSelector(state => state?.dogs);
  const [dogs, setDogs] = useState([...newDogs].splice(0, DOGS_PER_PAGE))
  const [currentPage, setCurrentPage] = useState(0);
  const totalDogs = newDogs?.length;
  const totalPage = Math.floor(totalDogs/DOGS_PER_PAGE)

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const primerDogs = nextPage * DOGS_PER_PAGE;
    if(primerDogs === totalDogs) return;
    setDogs([...newDogs].splice(primerDogs, DOGS_PER_PAGE))
    setCurrentPage(nextPage);
  }
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    console.log(prevPage);
    const primerDogs = prevPage * DOGS_PER_PAGE;
    console.log(primerDogs);
    if(prevPage < 0) return;
    setDogs([...newDogs].splice(primerDogs, DOGS_PER_PAGE))
    setCurrentPage(prevPage);
  }
 

  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getDogs())
    },[dispatch]); 

    return (
      <div >
        <Cards dogs={dogs}/>
        <div>
          <button onClick={prevHandler} disabled={currentPage === 0} >Prev</button>
          <span style={{color:'white'}}>pagina: {currentPage + 1} de {totalPage} </span>
          <button onClick={nextHandler} disabled={currentPage === totalPage-1} >Next</button>
        </div>
      </div>
    );
  }
export default Home;
