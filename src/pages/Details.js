import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Heading from '../components/Heading';

const Details = () => {
  const weather = useSelector((state) => state.weather);

  return (
    <>
      <Header previous="cities" heading={`${weather.name} Weather`} />
      <Heading title={weather.name} />
      <section>
        <ul className="weather_details">
          <li className="weather_item">
            <span>{weather.weather[0].main}</span>
            <span>{weather.weather[0].description}</span>
          </li>
          <li>{`Wind Speed: ${weather.wind.speed} knots`}</li>
          <li>{`Temperature: ${weather.main.temp} K`}</li>
          <li>{`Pressure: ${weather.main.pressure}`}</li>
          <li>{`Pressure: ${weather.main.humidity}`}</li>
        </ul>
      </section>
    </>
  );
};

export default Details;
