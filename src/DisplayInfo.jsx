import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./DisplayInfo.css"

export default function DisplayInfo({displayObject}){
    const img="https://tse1.mm.bing.net/th/id/OIP.mlgypyBYEvM7ETpC0eLUzwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3";
    const weatherobject={

    }
    return(
        <>
        <div class ="display">  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {displayObject.name}, {displayObject.sys.country}
            <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </Typography>
      </CardContent>
      
    </Card></div>
       
        </>
    )
}