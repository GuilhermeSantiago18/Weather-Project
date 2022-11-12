import React, { useContext, useState } from 'react'
import context from '../Services/Context'

export default function Search() {
    const [valueInput, setValueInput] = useState('')
    const { location, setLocation} = useContext(context)


    const handleClick = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${valueInput}&lang=pt_br,uk&APPID=6c65d4b916ef01e6bd8bec09df51d9b1`
        const response = await fetch(url)
        const data = await response.json()
        setLocation(data)
    }



const handleChange = ({target}) => {
    setValueInput(target.value)
}


  return (
    <div>
        <input type="text" placeholder='Digite a cidade' onChange={handleChange} />
        <button type="button" onClick={handleClick}>Pesquisar</button>

    </div>
  )
}