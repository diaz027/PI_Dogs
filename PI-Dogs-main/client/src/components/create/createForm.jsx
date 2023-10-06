import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAllDog, temp } from "../../Redux/actions";
import validacion from "./validacion";
import style from './create.module.css'

const CrearForm = () => {
  const newTemperamento = useSelector((state) => state?.temperaments);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    reference_image_id: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    temperament: [],
  });
  useEffect(() => {
    dispatch(temp())
  },[]) 
  
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  
    setErrors(
      validacion({
        ...formData,
        [event.target.name]: event.target.value,
      })
    );

  }
  console.log(formData);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createAllDog({
      ...formData,
      height:`${formData.minHeight} - ${formData.maxHeight}`,
      weight:`${formData.minWeight} - ${formData.maxWeight}`,
    }));
    }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(createAllDog(formData));
  //   }


  return (
    <div className={style.body}>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <label >Nombre</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{ color: 'white', fontSize: '20px' }}>{errors.name}</p>}

          <label >imagen</label>
          <input type="text" name="reference_image_id" value={formData.reference_image_id} onChange={handleChange} />

          <label >AlturaMin</label>
          <input type="text" name="minHeight" value={formData.minHeight} onChange={handleChange} />
          {errors.minHeight && <p style={{ color: 'white', fontSize: '20px' }}>{errors.minHeight}</p>}

          <label >AlturaMax</label>
          <input type="text" name="maxHeight" value={formData.maxHeight} onChange={handleChange} />
          {errors.maxHeight && <p style={{ color: 'white', fontSize: '20px' }}>{errors.maxHeight}</p>}

          <label >PesoMin</label>
          <input type="text" name="minWeight" value={formData.minWeight} onChange={handleChange} />
          {errors.minWeight && <p style={{ color: 'white', fontSize: '20px' }}>{errors.minWeight}</p>}

          <label >PesoMax</label>
          <input type="text" name="maxWeight" value={formData.maxWeight} onChange={handleChange} />
          {errors.maxWeight && <p style={{ color: 'white', fontSize: '20px' }}>{errors.maxWeight}</p>}

          <label >años de vida</label>
          <input type="text" name="life_span" value={formData.life_span} onChange={handleChange} />
          {errors.life_span && <p style={{ color: 'white', fontSize: '20px' }}>{errors.life_span}</p>}

          <label>Temperamentos
          <select >
           { newTemperamento.map(temperament => <option name={temperament.name} key={temperament.name}>{temperament.name}</option>)}
          </select>
          </label>

          <button className={style.boton}>Crear</button>
        </form>
      </div>
    </div>
  )
}
export default CrearForm;