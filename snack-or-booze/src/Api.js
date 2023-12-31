import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    // console.log("***************snacks****************");
    // console.log(result.data);
    const addedSnacks = localStorage.getItem("snacks");
    if (addedSnacks != null) {
      return [...result.data, ...JSON.parse(addedSnacks)];
    } else {
      return result.data;
    }
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    // console.log("***************drinks****************");
    // console.log(result.data);
    const addedDrinks = localStorage.getItem("drinks");
    if (addedDrinks != null) {
      return [...result.data, ...JSON.parse(addedDrinks)];
    } else {
      return result.data;
    }
  }
}

export default SnackOrBoozeApi;
