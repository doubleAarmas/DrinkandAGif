import axios from "axios";
import { useEffect, useState } from "react";
import "../Spotify/Spotify.scss";
import comin from '../../music/comin-my-way.mp3'

const API_BASE = "https://api.giphy.com/v1/gifs/random";
const API_KEY = "?api_key=fCkeQWWxRQTlf7941o57BilIbfCceS8a";

function Spotify() {
  const [gifUrl, setGifUrl] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE}${API_KEY}`)
      .then((response) => {
        console.log(response);
        setGifUrl(response.data.data.images.downsized_large.url);
      })
      .catch((errors) => {
        console.error("errors: ", errors);
      });
  }, []);

  return (
    <>
    <div className="music">
      <h1>Coolest Song Ever... and a random GIF for your troubles</h1>
      <img className="gif" src={gifUrl} alt="Random GIF"></img>
      <audio controls>
        <source src={comin} type="audio/mp3"/>
      </audio>
      </div>
    </>
  );
}

export default Spotify;
