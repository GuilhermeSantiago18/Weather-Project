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
              width="50px"
              alt={location.sys.country}
              src={`https://countryflagsapi.com/png/${location.sys.country}`}
            ></img>
          </div>
        </section>
      )}
    </div>
    <footer className="footer">
        Todos os direitos reservados Guilherme Santiago
        <div className="icons">
        <img alt="Linkedin" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
        <img alt="Linkedin" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
        </div>
        
    </footer>
    </>
  );
}
