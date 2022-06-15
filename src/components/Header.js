import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="wrapper">
          <div className="nav">
            <div className="logo">
              <h2>Travel</h2>
            </div>
            <div className="menu">
              <ul className="menu-items">
                <li className="active">Home</li>
                <li>About Us</li>
                <li>Find a place</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
