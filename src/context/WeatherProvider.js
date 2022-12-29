import React, { useState } from "react";
import WeateherContext from "./WeatherContext";
import { useGeolocated } from "react-geolocated";


const WeatherState = ({ children }) => {
    const [city, setCity] = useState("Bangalore")

    return (
        <WeateherContext.Provider value={{ city }}>
            {children}
        </WeateherContext.Provider>
    )
}

export default WeatherState;