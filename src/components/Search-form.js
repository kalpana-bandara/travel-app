import React, { useState } from "react";
import $ from "jquery";

const SearchForm = (props) => {
  let countries = props.countries;
  let timeOut;
  const [matchedCountries, setMatchedCountries] = useState([]);

  function openCountries(e) {
    let countryName = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

    if (countryName === "") {
      $(".countryList").hide();
    } else {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        setMatchedCountries(countries.filter((name) => name.includes(countryName)));
        $(".countryList").show();
      }, 500);
    }
  }

  function assignValue(e) {
    $("#place").val(e.target.innerText);
    $(".countryList").hide();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (countries.includes($("#place").val())) {
      props.func($("#place").val());
    }
  }

  return (
    <React.Fragment>
      <div className="searchForm">
        <form action="#" method="post">
          <div className="searchField">
            <input type="text" name="place" id="place" placeholder="where do you want to go?" onKeyUp={openCountries} autoComplete="off" />
            <div className="countryList" id="countryList">
              <ul>
                {matchedCountries.length > 0 ? (
                  matchedCountries.map((country, index) => {
                    return (
                      <li key={index} onClick={assignValue}>
                        {country}
                      </li>
                    );
                  })
                ) : (
                  <li>No Country found</li>
                )}
              </ul>
            </div>
            <button type="submit" onClick={handleSubmit}>
              <img className="forwardBtn" src="images/Forward-button.png" alt="" />
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default SearchForm;
