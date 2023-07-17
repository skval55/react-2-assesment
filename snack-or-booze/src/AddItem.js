import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import {
  FormControl,
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import "./AddItem.css";

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
    // e.preventDefault();
    if (validateForm(formData)) {
      if (formData.snackOrDrink === "snack") {
        addSnack(formData);
        setFormData(INITIAL_STATE);
        const addedSnacks = localStorage.getItem("snacks");
        if (addedSnacks != null) {
          localStorage.setItem(
            "snacks",
            JSON.stringify([...JSON.parse(addedSnacks), formData])
          );
        } else {
          localStorage.setItem("snacks", JSON.stringify([formData]));
        }
        history.push("/snacks");
      } else if (formData.snackOrDrink === "drink") {
        addDrink(formData);
        setFormData(INITIAL_STATE);
        const addedDrinks = localStorage.getItem("drinks");
        if (addedDrinks != null) {
          localStorage.setItem(
            "drinks",
            JSON.stringify([...JSON.parse(addedDrinks), formData])
          );
        } else {
          localStorage.setItem("drinks", JSON.stringify([formData]));
        }
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
  };

  return (
    <div className="AddItem">
      <FormControl
        className="AddItem-form"
        fullWidth={true}
        onSubmit={handleSubmit}
      >
        {validated ? <p>Please fill every value</p> : null}
        <FormLabel className="MuiFormLabel-root" component="legend">
          Snack or Drink
        </FormLabel>
        <RadioGroup
          aria-label="snackOrDrink"
          name="snackOrDrink"
          onChange={handleChange}
        >
          <FormControlLabel
            value="snack"
            control={<Radio color="default" />}
            label="Snack"
          />
          <FormControlLabel
            value="drink"
            control={<Radio color="default" />}
            label="Drink"
          />
        </RadioGroup>
        <TextField label="Id" id="id" name="id" onChange={handleChange} />{" "}
        <br />
        <TextField
          label="Name"
          id="name"
          name="name"
          onChange={handleChange}
        />{" "}
        <br />
        <TextField
          label="Description"
          id="description"
          name="description"
          onChange={handleChange}
        />{" "}
        <br />
        <TextField
          label="Recipe"
          id="recipe"
          name="recipe"
          onChange={handleChange}
        />{" "}
        <br />
        <TextField
          label="How to serve"
          id="serve"
          name="serve"
          onChange={handleChange}
        />{" "}
        <br />
        <Button type="submit" onClick={() => handleSubmit()}>
          Add
        </Button>
      </FormControl>
    </div>
  );
};

export default AddItem;
