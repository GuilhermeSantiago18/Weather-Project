import React, { useContext, useEffect, useState } from "react";
import context from "../Services/Context";
import "../App.css";

export default function Search() {
  const { location, setLocation } = useContext(context);
  const [valueInput, setValueInput] = useState("");
  const [disable, setDisable] = useState(false);


  const handleClick = async () => {
    const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${valueInput}&lang=pt_br,uk&APPID=6c65d4b916ef01e6bd8bec09df51d9b1`;
    const response = await fetch(urlWeather);
    const data = await response.json();
    if (data.cod === "400") {
      global.alert('Digite a localidade desejada')
    } 
    else if (data.cod === "404") {
      global.alert('Cidade não existe')
    }
    else {
      setLocation(data);
      setDisable(true);

    }
  };
  console.log(location)
  useEffect(() => {
    setDisable(false);
  }, []);

  const handleChange = ({ target }) => {
    setValueInput(target.value);
  };
  return (
    <>
    <div className="container-global-maior">
      <header>
        <h1 className="title">Weather and City</h1>
      </header>
    <div className="container-global">
      <div className="inputs">
        <input
          className="inputText"
          type="text"
          placeholder="Digite a cidade"
          onChange={handleChange}
        />
        <button class="inputBtn" type="button" onClick={handleClick}>
          Search
        </button>
        </div>
        </div>
      {disable && (
        <section className="section">
          <ul className="informations">
          <p className="countryname">City: {location.name}</p> 
            <li>{Math.round(location.main.temp -273)} ºC</li>
            <div className="latitudes">
            Lat:<p>{location.coord.lat}</p>
            Long:<p>{location.coord.lon}</p>
            </div>
          </ul>
          <div className="country">
            <img
              width="90px"
              alt={location.sys.country}
              src={`https://countryflagsapi.com/png/${location.sys.country}`}
            ></img>
          </div>
        </section>
      )}
    </div>
    <footer className="footer">
        <p>Developed by Guilherme Santiago</p>
        <div className="images">
        <a href="https://www.linkedin.com/in/guilherme-santiago-dev/" target="blank">
        <img src="https://cdn-icons-png.flaticon.com/128/124/124011.png"
        alt="linkedin icon" 
        title="linkedin icon" 
        width="25" height="25"></img>
        </a>
        <a href="https://github.com/GuilhermeSantiago18/" target="blank">
        <img src="https://cdn-icons-png.flaticon.com/128/919/919847.png" 
        alt="github " 
        title="github " 
        width="25"
        height="25"></img>
        </a>
        </div>
    </footer>
    </>
  );
}
