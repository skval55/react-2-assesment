import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import FoodOrDrinkItem from "./FoodOrDrinkItem";
import AddItem from "./AddItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let snacks = await SnackOrBoozeApi.getSnacks();
        setSnacks(snacks);
        let drinks = await SnackOrBoozeApi.getDrinks();
        setDrinks(drinks);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const addDrink = (newDrink) => {
    setDrinks([...drinks, newDrink]);
  };
  const addSnack = (newSnack) => {
    setSnacks([...snacks, newSnack]);
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home snacks={snacks} drinks={drinks} />
          </Route>
          <Route exact path="/additem">
            <AddItem addSnack={addSnack} addDrink={addDrink} />
          </Route>
          <Route exact path="/snacks">
            <Menu isSnack={true} snackOrDrink={snacks} title="Snacks" />
          </Route>
          <Route exact path="/drinks">
            <Menu isSnack={false} snackOrDrink={drinks} title="Drinks" />
          </Route>
          <Route path="/snacks/:id">
            <FoodOrDrinkItem items={snacks} cantFind="/snacks" />
          </Route>
          <Route path="/drinks/:id">
            <FoodOrDrinkItem items={drinks} cantFind="/drinks" />
          </Route>
          <Route>
            <p>Hmmm. I can't seem to find what you want.</p>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
