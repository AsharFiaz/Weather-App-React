# 🌦️ React Weather App

A simple yet functional weather application built with **React** that uses the **OpenWeatherMap API** to fetch and display current weather information based on user input. Styled with **Material UI** for a clean and responsive UI.

---

## 🚀 Features

- 🔍 Search any city to get real-time weather info
- 🌡️ Displays temperature, humidity, wind speed, and weather description
- 🎨 Clean UI using Material UI components
- 🧠 Component-based architecture with prop drilling
- 🔁 Reusable and scalable structure for future enhancements

---
how to clone locally:
clone https://github.com/your-username/react-weather-app.git
cd react-weather-app
npm install
const API_KEY = "YOUR_API_KEY_HERE";
npm run dev


## 🧱 Project Structure

```bash
src/
│
├── App.jsx              # Root component
├── Weather.jsx          # Parent component handling state
├── SearchWeather.jsx    # Input/search component
├── DisplayInfo.jsx      # Weather info display card
├── index.css / App.css  # Styling
