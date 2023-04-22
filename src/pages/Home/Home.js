import { useState, useEffect } from "react";
import "../../pages/Home/Home.scss";
import Drinks from "../../components/Drinks/Drinks";
import axios from "axios";

function Home() {
  const [drinkLetter, setDrinkLetter] = useState("");
  const [cocktails, setCocktails] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.letter.value.length > 1) {
      alert("Please just input one letter");
      return;
    }
    setDrinkLetter(event.target.letter.value);
  }

  useEffect(() => {
    if (drinkLetter.length === 1) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinkLetter}`
        )
        .then((response) => {
          setCocktails(response.data.drinks || []);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [drinkLetter]);

  return (
    <>
      <div className="containerStyling">
        <h2 className="formTitle">Submit your Drink!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="letter"></label>
          <textarea name="letter"></textarea>
          <div></div>
          <button type="submit">Submit</button>
        </form>
        <Drinks cocktails={cocktails} />
      </div>
    </>
  );
}

export default Home;
