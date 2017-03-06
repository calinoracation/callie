import React, { Component } from 'react';

import './Violet.css';

class Violet extends Component {
  render() {
    return (
      <div className="Violet">
        <div className="thanks">
          <h2>Thank you for RSVP'ing, see you on June 11th! <br />Please check your email for any changes or updates</h2>
        </div>
        <header>
          <h1>Violet's Fun-Raising Neighborhood Party</h1>
          <div className="header--wrapper">
            <span className="header--benefit">A fund raiser for the Girl Scouts &amp; Tree Frog Treks</span>
            <div className="header--details">
              <h3 className="header--location">At Cayuga Playground on June 11<sup>th</sup></h3>
              <h3 className="header--time">11:00<sup>am</sup> - 1<sup>pm</sup></h3>
            </div>
          </div>
        </header>
        <main>
          <div className="main--description">
            <h2>
              Come meet your neighbors &amp; have fun while raising funds for your local Girl Scouts &amp; Tree Frog Treks to send kids to summer camp!

              <br /><br />Due to the limited space at the park, please RSVP so that we can let the park know how many people will be attending. We also want to cater enough food and drinks for everyone.
            </h2>
            <form className="rsvp">
              <label>
                <span>Name</span>
                <input type="text" id="name" />
              </label>
              <label>
                <span>Email</span>
                <input type="text" id="email" />
              </label>
              <label>
                <span>Phone</span>
                <input type="text" id="phone" placeholder="(optional)" />
              </label>
              <input type="submit" value="Click here to RSVP" />
            </form>
          </div>
          <ul className="main--photos">
            <li>
              <img src="/face-painting.jpg" />
              <span className="main--photo-description">Free face painting!</span>
            </li>
            <li>
              <img src="/yoga.jpg" />
              <span className="main--photo-description">Free yoga class!</span>
            </li>
            <li>
              <img src="/party.jpg" />
              <span className="main--photo-description">Community Building</span>
            </li>
          </ul>
        </main>
        <footer>
          <img src="/logo.png" />
          <div className="footer--details">
            <h4>MARKER  REAL  ESTATE</h4>
            <span>425 Market  Street  Suite 2200, San Francisco, CA</span>
            <span>415.713.9420 | violet@markersf.com | www.markersf.com</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Violet;
