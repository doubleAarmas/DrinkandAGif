import { useState } from "react";
import "../../pages/Home/Home.scss";
import { Link } from "react-router-dom";

function Drinks({ cocktails }) {

    const [search, setSearch] = useState('');

    function handleClick(event, strDrink) {
        event.preventDefault();
        setSearch(strDrink);
      }

return (
    <>
        <h1>Cocktail List</h1>
        <ul>
            {cocktails.map((cocktail) => (
                <li key={cocktail.idDrink}>
                    <Link to={"/spotify"} onClick={(event) => handleClick(event, cocktail.strDrink)}>
                        <h2 className="drinkName">{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb}></img>
                    </Link>
                </li>
            ))}
        </ul>
    </>
    );
}

export default Drinks;
