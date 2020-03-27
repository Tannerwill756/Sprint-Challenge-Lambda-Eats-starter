import React from "react";

const formSchema = yup.object().shape({
    name: yup.string().min(2,"Must be longer than 2 characters"),
})

function Form(){


    return(
        

        <form>
            <label htmlFor="name"> Name
                <input id="name" type="text" name="name"/>
            </label>

            <label htmlFor="pizza"> Pizza sizes:
                <select id="pizza" name="pizza">
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
                <label><input type="checkbox" name="toppings[]" value="Pepperoni" /> Pepperoni</label>
                <label><input type="checkbox" name="toppings[]" value="Sausage" /> Sausage</label>
                <label><input type="checkbox" name="toppings[]" value="Pineapple" />Pineapple</label>
                <label><input type="checkbox" name="toppings[]" value="Onions" /> Onions</label>
                <label><input type="checkbox" name="toppings[]" value="Olives" /> Olives</label>
                <label><input type="checkbox" name="toppings[]" value="other" /> other</label>
            </p>
            
            </fieldset>
            
            
            <label htmlFor="instr"> Special Instructions:
                <textarea id="instr" name="instr"/>
            </label>
            
            
            <button type="submit">Complete order</button>
    
        </form>
    )
}


export default Form;