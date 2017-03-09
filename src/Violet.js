import React, { Component } from 'react';

import './Violet.css';

const apiHost = process.env.NODE_ENV === 'production' ?
  'http://violetfunparkparty.com:5000' :
  'http://localhost:5000';

class Violet extends Component {
  state = {};

  handleDismiss(){
    this.setState({disabled: false});
  }

  handleSubmit(evt){
    evt.preventDefault();

    const name = this.name_.value;
    const email = this.email_.value;
    const phone = this.phone_.value;

    console.log(`${name} has RSVP'd. Send an email to ${email} or call @ ${phone}.`);

    fetch(`${apiHost}/rsvp`, {
      method: `post`,
      mode: `cors`,
      headers: {
        'Content-Type': `application/json`,
        'Accept': `application/json`,
      },
      body: JSON.stringify({name, email, phone}),
    })
    .then(() => {
      this.setState({
        hasSent: true,
        disabled: true,
      });
    });
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <div className={`Violet ${this.state.disabled && 'disabled'}`}>
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
              <form className="rsvp" onSubmit={this.handleSubmit.bind(this)}>
                <label>
                  <span>Name</span>
                  <input ref={name => this.name_ = name} type="text" id="name" autoComplete="name" name="name" />
                </label>
                <label>
                  <span>Email</span>
                  <input ref={email => this.email_ = email} type="email" id="email" autoComplete="email" name="email" />
                </label>
                <label>
                  <span>Phone</span>
                  <input ref={phone => this.phone_ = phone} type="tel" id="phone" placeholder="(optional)" name="phone" autoComplete="tel" />
                </label>
                <input type="submit" value="Click here to RSVP" />
              </form>
            </div>
            <ul className="main--photos">
              <li>
                <img src="/face-painting.jpg" alt="Face Painting" />
                <span className="main--photo-description">Free face painting!</span>
              </li>
              <li>
                <img src="/yoga.jpg" alt="Yoga Pose" />
                <span className="main--photo-description">Free yoga class!</span>
              </li>
              <li>
                <img src="/party.jpg" alt="Community Building" />
                <span className="main--photo-description">Community Building</span>
              </li>
            </ul>
          </main>
          <footer>
            <img src="/logo.png" role="presentation" />
            <div className="footer--details">
              <h4>MARKER  REAL  ESTATE</h4>
              <span>425 Market  Street  Suite 2200, San Francisco, CA</span>
              <span>415.713.9420 | violet@markersf.com | www.markersf.com</span>
            </div>
          </footer>
        </div>
        <div className={`thanks-container ${this.state.disabled && 'visible'}`}>
          <div className="thanks">
            <h2>Thank you for RSVP'ing, see you on June 11th! <br />Please check your email for any changes or updates</h2>
            <button className="btn--dismiss" onClick={this.handleDismiss.bind(this)}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Violet;
