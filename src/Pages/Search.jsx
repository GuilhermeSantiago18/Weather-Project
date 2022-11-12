import React, { useContext, useEffect, useState } from "react";
import context from "../Services/Context";
import '../App.css'

export default function Search() {
  const { location, setLocation } = useContext(context);
  const [valueInput, setValueInput] = useState("");
  const [disable, setDisable] = useState(false);

  const handleClick = async () => {
    const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${valueInput}&lang=pt_br,uk&APPID=6c65d4b916ef01e6bd8bec09df51d9b1`;
    const response = await fetch(urlWeather);
    const data = await response.json();
    setLocation(data);
    setDisable(true);
  };

  useEffect(() => {
    setDisable(false);
  }, []);

  const handleChange = ({ target }) => {
    setValueInput(target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Digite a cidade"
        onChange={handleChange}
      />
      <button 
       class="btn-inicial" type="button" onClick={handleClick}>
        Pesquisar
      </button>
      {disable && (
        
        <section className="section">
          <p>{location.name}</p>
          <img className="country" alt={location.sys.country} src={`https://countryflagsapi.com/png/${location.sys.country}`}></img>

          <ul>
          Temperatura ºC
            <p>{(location.main.temp)}</p>
            Latitude
            <li>{location.coord.lat}</li>
            Longitude
            <li>{location.coord.lon}</li>
          </ul>
        </section>
      )}
    </div>
  );
}
