import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';


const formSchema = yup.object().shape({
    name: yup.string().min(2,"Must be longer than 2 characters"),
    pizza:yup.string(),
    pepperoni:yup.boolean(),
    sausage:yup.boolean(),
    pineapple:yup.boolean(),
    onions:yup.boolean(),
    Olives:yup.boolean(),
    instr:yup.string()
})

function Form(){

    const [ formState, setFormState ] = useState({
        name:"",
        pizza:"",        
        instr:""
    })

    const [ errors, setErrors ] = useState({
        name:"",
        pizza:"",
        toppings:"",        
        instr:""
    })

    const [ post, setPost ] = useState([]);

    const validateChange = event => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then( () => {
                setErrors({ ...errors, [event.target.name] : "" })
            })
            .catch( err => {
                setErrors({ ...errors, [event.target.name] : err.errors});
            })
    }

    const formSubmit = event => {
        event.preventDefault();
        axios
            .post('https://reqres.in/api/users', formState)
            .then(response => {
                setPost(response.data);
            
                console.log("success", post);

            })
            .catch(err => {
                console.log('you got an error',err.response)
            })
    }

    const inputChange = event => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value
        }
        validateChange(event);
        setFormState(newFormData);
    }

    return(
        

        <form onSubmit={formSubmit}>
            <label htmlFor="name"> Name
                <input id="name" type="text" name="name" value={formState.name} onChange={inputChange}/>
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            </label>

            <label htmlFor="pizza"> Pizza sizes:
                <select id="pizza" name="pizza" onChange={inputChange}>
                    <option value="Small"> Small</option>
                    <option value="Medium"> Medium</option>
                    <option value="Large"> Large</option>
                    <option value="Jumbo"> Jumbo</option>
                </select>
            </label>
            
            <fieldset>
                <legend>Choose your Toppings</legend>
            
            <p>Please select which ever toppings you like</p>
            
            <p>
                <label><input type="checkbox" name="pepperoni" value="pepperoni" onChange={inputChange}/> Pepperoni</label>
                <label><input type="checkbox" name="sausage" value="sausage" onChange={inputChange}/> Sausage</label>
                <label><input type="checkbox" name="Pineapple" value="Pineapple" onChange={inputChange}/>Pineapple</label>
                <label><input type="checkbox" name="onions" value="onions" onChange={inputChange}/> Onions</label>
                <label><input type="checkbox" name="olives" value="olives" onChange={inputChange}/> Olives</label>
            </p>
            
            </fieldset>
            
            
            <label htmlFor="instr"> Special Instructions:
                <textarea id="instr" name="instr" onChange={inputChange}/>
            </label>
            
            
            <button type="submit">Complete order</button>

            <pre>{JSON.stringify(post, null, 2)}</pre>
    
        </form>
    )
}


export default Form;