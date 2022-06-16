import React, { useContext, useState } from "react";
import SearchForm from "./Search-form";
import CountryNameContext from "../CountryNameContext";
import Details from "./Details";

const Hero = () => {
  const [countryName, setCountryName] = useState("London");
  const getCountry = (country) => {
    setCountryName(country);
  };

  const { countries } = useContext(CountryNameContext);

  const heroSmall = "images/hero-small.jpg";
  const heroMedium = "images/hero-medium.jpg";
  const heroFull = "images/hero-Full.jpg";

  return (
    <React.Fragment>
      <section className="hero-section">
        <img src={heroSmall} srcSet={`${heroSmall} 600w, ${heroMedium} 1400w, ${heroFull} 1920w`} alt="" />
        <div className="center">
          <h1 className="hero-title">Travel.Anywhere</h1>
          <SearchForm countries={countries} func={getCountry} />
        </div>
      </section>
      <Details country={countryName} />
    </React.Fragment>
  );
};

export default Hero;
