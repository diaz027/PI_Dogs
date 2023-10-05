import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAllDog } from "../../Redux/actions";
import validacion from "./validacion";
import style from './create.module.css'

const CrearForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    reference_image_id: "",
    height:"",
    weight:"",
    life_span: '',
    temperament: [],
  });

  const handleChange = (event) => {
    if(event.target.name === "minHeight"){
      return setFormData({
        ...formData,
        height: event.target.value.concat(formData.height)
      })
    }
    if(event.target.name === "maxHeight"){
      return setFormData({
        ...formData,
        height: formData.height.concat( " - " + event.target.value)
      })
    }
    if(event.target.name === "minWeight"){
      return setFormData({
        ...formData,
        weight: event.target.value.concat(formData.weight)
      })
    }
    if(event.target.name === "maxWeight"){
      return setFormData({
        ...formData,
        weight: formData.weight.concat( " - " + event.target.value)
      })
    }

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
  
  console.log(formData)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createAllDog(formData));
  };


  return (
    <div className={style.body}>
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

        <label > temperamentos</label>
        <input type="text" name="temperament" value={formData.temperament} onChange={handleChange}/>

        <button >Crear</button>
      </form>
    </div>
  )
}
export default CrearForm;