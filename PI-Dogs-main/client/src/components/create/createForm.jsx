import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAllDog, temp } from "../../Redux/actions";
import validacion from "./validacion";
import style from './create.module.css'

const CrearForm = () => {
  const newTemperamento = useSelector((state) => state?.temperaments);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    temperament: [],
  });
  

  const handleChange = (event) => {
    if(event.target.name === 'temperament') return setFormData({...formData,
      temperament: [...formData.temperament, event.target.value]
      })
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

  const validateForm = () => {
    return (
      !errors.name &&
      !errors.minHeight &&
      !errors.maxHeight &&
      !errors.minWeight &&
      !errors.maxWeight &&
      !errors.life_span
    );
  }

  useEffect(() => {
    setFormIsValid(validateForm());
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      dispatch(createAllDog({
        ...formData,
        height: `${formData.minHeight} - ${formData.maxHeight}`,
        weight: `${formData.minWeight} - ${formData.maxWeight}`,
      }));
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  return (
    <div className={style.body}>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <label >Nombre</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{ color: 'white', fontSize: '13px' }}>{errors.name}</p>}

          <label >AlturaMin</label>
          <input type="text" name="minHeight" value={formData.minHeight} onChange={handleChange} />
          {errors.minHeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.minHeight}</p>}

          <label >AlturaMax</label>
          <input type="text" name="maxHeight" value={formData.maxHeight} onChange={handleChange} />
          {errors.maxHeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.maxHeight}</p>}

          <label >PesoMin</label>
          <input type="text" name="minWeight" value={formData.minWeight} onChange={handleChange} />
          {errors.minWeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.minWeight}</p>}

          <label >PesoMax</label>
          <input type="text" name="maxWeight" value={formData.maxWeight} onChange={handleChange} />
          {errors.maxWeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.maxWeight}</p>}

          <label >años de vida</label>
          <input type="text" name="life_span" value={formData.life_span} onChange={handleChange} />
          {errors.life_span && <p style={{ color: 'white', fontSize: '13px' }}>{errors.life_span}</p>}

          <label>Temperamentos
            <select multiple
              name="temperament"
              value={formData.temperament}
              onChange={handleChange} >
              {newTemperamento.map(temperament => <option name={temperament.name} key={temperament.name}  value={temperament.name}>{temperament.name}</option>)}
            </select>
          </label>

          <button className={style.boton} disabled={!formIsValid}>Crear</button>
        </form>
      </div>
    </div>
  )
}
export default CrearForm;