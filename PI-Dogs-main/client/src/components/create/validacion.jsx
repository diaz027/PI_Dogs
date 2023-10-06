const validacion =  (formData) =>{
    const errors = {};
    console.log(formData.minHeight)
    if(!/^[A-Za-z]+$/i.test(formData.name)){
        errors.name='solo letras, no tiene que tener ningun numero ni simbolo'
    }
    if(!/^[0-9]+$/i.test(formData.minHeight)){
        errors.minHeight = 'solo numeros rey'
    }
    if(!/^[0-9]+$/i.test(formData.maxHeight)){
        errors.maxHeight = 'solo numeros mi rey'
    }
    if(!/^[0-9]+$/i.test(formData.minWeight)){
        errors.minWeight = 'solo numeros mi rey'
    }
    if(!/^[0-9]+$/i.test(formData.maxWeight)){
        errors.maxWeight = 'solo numeros mi rey'
    }
    if(!/^[0-9]+$/i.test(formData.life_span)){
        errors.life_span = 'solo numeros mi rey'
    }

    return errors;
};

export default validacion;