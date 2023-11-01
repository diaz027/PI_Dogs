import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/cards";
import { getDogs } from "../../Redux/actions";


const DOGS_PER_PAGE = 8;

const Paginado = () => {
    const allDogs = useSelector((state) => state?.newDogs);
    const totalDogs = allDogs?.length;
    const totalPage = Math.ceil(totalDogs / DOGS_PER_PAGE);
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogs());
    }, [dispatch]);

    const startDogs = currentPage * DOGS_PER_PAGE;
    const endDogs = startDogs + DOGS_PER_PAGE;
    const dogsToDisplay = allDogs?.slice(startDogs, endDogs);

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
    return (
        <div>
            <Cards newDogs={dogsToDisplay} />

            <div>
                <button onClick={prevHandler} disabled={currentPage === 0} >Prev</button>
                <span style={{ color: 'white' }}>pagina: {currentPage + 1} de {totalPage} </span>
                <button onClick={nextHandler} disabled={currentPage === totalPage - 1} >Next</button>
            </div>
        </div>
    )
}

export default Paginado