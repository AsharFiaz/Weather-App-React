import SearchWeather from "./SearchWeather.jsx";
import DisplayInfo from "./DisplayInfo.jsx"
import { useState } from 'react';

export default Weather(){
      const [weather, setWeather] = useState({});
    return(
        <>
         <h2>🌦️ Weather Finder</h2>
         <SearchWeather setWeather={setWeather} />
         <DisplayInfo weather={weather} />
        </>
    )
};