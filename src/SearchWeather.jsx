import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchWeather.css';
import { useState } from 'react';
function SearchWeather() {
    const [weather,setSearchWeather]=useState("");
    
  const [query, setQuery] = useState("");
    const API_KEY = "apikey";
    const [error, setError] = useState("");
    const changeWeather=(event)=>{
        setSearchWeather(event.target.value)
    }
    const search =(event)=>{
         if (!query) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
        
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchWeather();
    }
    }
  return (
    <>
    <div class="search">
         <TextField id="outlined-basic" label="Search Weather" variant="outlined" value={weather}  onChange={changeWeather} /> &nbsp;
         <Button variant="contained" onClick={search}>Search</Button>

    </div>
     
    </>
  );
}

export default SearchWeather;
