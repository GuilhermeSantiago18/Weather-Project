import React, { useContext, useEffect, useState } from 'react'
import context from '../Services/Context'

export default function Search() {
  const { location, setLocation} = useContext(context)
    const [valueInput, setValueInput] = useState('')
    const [ disable, setDisable ] = useState([])
       

    const handleClick = async () => {
        const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${valueInput}&lang=pt_br,uk&APPID=6c65d4b916ef01e6bd8bec09df51d9b1`
        const response = await fetch(urlWeather)
        const data = await response.json()
        setLocation(data)
        setDisable(true)
    }
        



const handleChange = ({target}) => {
    setValueInput(target.value)
}
console.log(location)
const urlCountry = `https://countryflagsapi.com/png/${location.sys.country}`
  return (
    <div>
        <input type="text" placeholder='Digite a cidade' onChange={handleChange} />
        <button type="button" onClick={handleClick}>Pesquisar</button>
        {disable &&
      <section>
        <p>{location.name}</p>
        <img alt={urlCountry} src={urlCountry}></img>

        <ul>
          Latitude
          <li>{location.coord.lat}</li>
          Longitude
          <li>{location.coord.lon}</li>
        </ul>
        </section>
}
    </div>
  )
}