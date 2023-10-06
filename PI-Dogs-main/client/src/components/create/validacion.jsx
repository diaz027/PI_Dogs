const validacion =  (FormData) =>{
    const errors = {};
    if(!/^[A-Za-z]+$/i.test(FormData.name)){
        errors.name='solo letras, no tiene que tener ningun numero ni simbolo'
    }
    if(!/^[0-9]+$/i.test(FormData.minHeight)){
        errors.minHeight = 'solo numeros rey'
    }
    if(!/^[0-9]+$/i.test(FormData.maxHeight)){
        errors.maxHeight = 'solo numeros mi rey'
    }
    if(!/^[0-9]+$/i.test(FormData.minWeight)){
        errors.minWeight = 'solo numeros mi rey'
    }
    if(!/^[0-9]+$/i.test(FormData.maxWeight)){
        errors.maxWeight = 'solo numeros mi rey'
    }
    if(!/^[0-9]+$/i.test(FormData.life_span)){
        errors.life_span = 'solo numeros mi rey'
    }

    return errors;
};

export default validacion;