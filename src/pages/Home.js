import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Country from '../components/Country';
import Heading from '../components/Heading';

const Home = () => {
  const countries = useSelector((state) => state.updateCountries);
  return (
    <>
      <Header heading="Weather"/>
      <section>
        <Heading home title="Weather"/>
        <div className="countries">
          { countries.map((country) => (
            <Country key={country.name} number={country.cities.number} vector={country.map} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
