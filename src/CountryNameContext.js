import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CountryNameContext = createContext();

export function CountryNameProvider({ children }) {
  const [countries, setCountries] = useState([]);
  function getCountries() {
    const config = {
      method: "get",
      url: "https://countriesnow.space/api/v0.1/countries",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        const data = response.data.data;
        const countries = [];
        for (let i = 0; i < data.length; i++) {
          countries.push(data[i].country);
        }
        setCountries(countries);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getCountries();
  }, []);
  return <CountryNameContext.Provider value={{ countries: countries }}>{children}</CountryNameContext.Provider>;
}

export default CountryNameContext;
