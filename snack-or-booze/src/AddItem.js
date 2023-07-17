import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddItem = ({ addSnack, addDrink }) => {
  const INITIAL_STATE = {
    snackOrDrink: "",
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };

  const [validated, setValidated] = useState(false);

  const history = useHistory();

  const [formData, setFormData] = useState(INITIAL_STATE);

  const validateForm = (formData) => {
    for (let key in formData) {
      if (formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      if (formData.snackOrDrink === "snack") {
        addSnack(formData);
        setFormData(INITIAL_STATE);
        history.push("/snacks");
      } else if (formData.snackOrDrink === "drink") {
        addDrink(formData);
        setFormData(INITIAL_STATE);
        const addedDrinks = localStorage.getItem("drinks");
        console.log(addedDrinks);
        localStorage.setItem(
          "drinks",
          JSON.stringify([...JSON.parse(addedDrinks), formData])
        );
        console.log(localStorage.getItem("drinks"));
        history.push("/drinks");
      }
    } else {
      setValidated(true);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {validated ? <p>Please fill every value</p> : null}
      <p>Snack or Drink</p>
      <input
        type="radio"
        id="snack"
        name="snackOrDrink"
        value="snack"
        onChange={handleChange}
      />
      <label htmlFor="snack">Snack</label> <br />
      <input
        type="radio"
        id="drink"
        value="drink"
        name="snackOrDrink"
        onChange={handleChange}
      />
      <label htmlFor="drink">Drink</label> <br />
      <label htmlFor="id">Id</label>
      <input id="id" name="id" onChange={handleChange} /> <br />
      <label htmlFor="name">Name</label>
      <input id="name" name="name" onChange={handleChange} /> <br />
      <label htmlFor="description">Description</label>
      <input id="description" name="description" onChange={handleChange} />{" "}
      <br />
      <label htmlFor="recipe">Recipe</label>
      <input id="recipe" name="recipe" onChange={handleChange} /> <br />
      <label htmlFor="serve">How to Serve</label>
      <input id="serve" name="serve" onChange={handleChange} /> <br />
      <button>Add</button>
    </form>
  );
};

export default AddItem;
