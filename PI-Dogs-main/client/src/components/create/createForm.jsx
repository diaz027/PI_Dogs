import { useState } from "react";
import { createAllDog } from "../../Redux/actions";
import style from './create.module.css'

const  CrearForm= () => {
  const [formData, setFormData] = useState({
    name: '',
    imagen: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: '',
    // temperament: [],
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createAllDog(formData);
  };


    return(
        <div className={style.body}>
            <form onSubmit={handleSubmit}>
                <label >Nombre</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>

                <label >AlturaMin</label>
                <input type="text" name="minHeight" value={formData.minHeight} onChange={handleChange}/>

                <label >AlturaMax</label>
                <input  type="text" name="maxHeight" value={formData.maxHeight} onChange={handleChange}/>

                <label >PesoMin</label>
                <input  type="text" name="minWeight" value={formData.minWeight} onChange={handleChange}/>

                <label >PesoMax</label>
                <input  type="text" name="maxWeight" value={formData.maxWeight} onChange={handleChange}/>

                <label >años de vida</label>
                <input  type="text" name="life_span" value={formData.life_span} onChange={handleChange}/>

                <button >Crear</button>
            </form>
        </div>
    )
}
export default CrearForm;