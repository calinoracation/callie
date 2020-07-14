import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Photo">
          <img src="/cali-bitmoji.jpg" alt="Callie Riggins" />
        </div>
        <div className="App-header">          
          <h2>
            Hi, I&rsquo;m
          </h2>
          <span className="App-header-text">Callie</span>
        </div>
        <p className="Intro">
        I&rsquo;m an experienced engineer with a passion for the web. I&rsquo;ve been focusing a lot on front end development & infrastructure and really enjoy solving hard problems in a simple, elegant manner.
        </p>        
        <h3 className="Callout-title">
          Some of the amazing places I&rsquo;ve worked at recently
          <svg width="36px" height="124px" className="Connector-1" viewBox="366 244 36 124" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M369,247 C369,247 412.243778,305.978516 382.637322,364.957031" id="curve" stroke="#FFFFFF" strokeWidth="5" fill="none"></path>
          </svg>
        </h3>        
        <ul className="Callout-experience">
        <li className="Callout-entry">            
            <div className="Experience-detail">
              <p>
                I work as a front-end specialist at Airbnb, commonly on frontend performance, progressive web app features like push notifications, installability to name a few. I'm also very passionate about accessibility and inclusive design.
              </p>
            </div>
            <div className="Experience-logo">
              <img alt="Airbnb Logo" src="https://airbnb-photos.s3.amazonaws.com/pictures/webappmanifest/icons/original/5ab000fc-65e6-4ef1-a65a-792b89e531ba.png" />
            </div>
          </li>          
          <li className="Callout-entry">            
            <div className="Experience-detail">
              <p>
                On any given day you can find me working on our Node / React based sites, debugging all the things, and working with our team on planning new features. Amazon AWS, Docker, Node & Modern Javascript/Tooling are a few things I really enjoy.
              </p>
            </div>
            <div className="Experience-logo">
              <img alt="Inkling Logo" src="/inkling-logo.svg" />
            </div>
          </li>
          <li className="Callout-entry">            
            <div className="Experience-detail">
              <p>
                Based out of Atlanta, Georgia, for over 7 years I worked on a diverse set of projects. Some of the things I worked with a lot are C#, XAML, Node and AngularJS, with a touch of Sketch and a ton of debugging.
              </p>
            </div>
            <div className="Experience-logo">
              <img alt="Turner Logo" src="/turner.png" />
            </div>
          </li>
        </ul>
        <div className="Fanout">            
          <div className="Logos">
            <div className="Logo node">
              <img alt="NodeJS" src="/nodejs.png" />
            </div>                  
          </div>          
          <div className="Logos docker">                  
            <div className="Logo docker">
              <img alt="Docker" src="/docker.png" />
            </div>
          </div>
          <div className="Logos navy">                  
            <div className="Logo navy">
              <img alt="US Navy" src="/navy.gif" />
            </div>
          </div>        
          <div className="Logos">
            <div className="Logo nginx">
              <img alt="NGINX" src="/nginx.png" />
            </div>                  
          </div>        
        </div>
        <div className="Fanout row-2">            
          <div className="Logos">
            <div className="Logo redux">
              <img alt="Redux" src="/redux.png" />
            </div>
          </div>          
          <div className="Logos docker">                  
            <div className="Logo react">
              <img alt="React" src="/react.jpg" />
            </div>                
          </div>
          <div className="Logos navy"> 
            <div className="Logo aws">
              <img alt="AWS" src="/aws.png" />
            </div>                                 
          </div>        
          <div className="Logos">
            <div className="Logo webpack">
              <img alt="Webpack" src="/webpack.png" />
            </div>  
          </div>        
        </div>
        <div className="Fanout row-3">            
          <div className="Logos">
            <div className="Logo github">
              <img alt="Github" src="/octocat.png" />
            </div>                  
          </div>          
          <div className="Logos docker">                  
            <div className="Logo sketch">
              <img alt="Sketch" src="/sketch.png" />
            </div>
          </div>
          <div className="Logos navy">                  
            <div className="Logo babel">
              <img alt="Bable" src="/babel.png" />
            </div>
          </div>        
          <div className="Logos">
            <div className="Logo mocha">
              <img alt="Mocha" src="/mocha.svg" />
            </div>                  
          </div>        
        </div>
        <footer className="Reachout">
          <h2 className="Reachout-Items">
            <span className="Reachout-Item Reachout-Item-1">get</span>
            <span className="Reachout-Item Reachout-Item-2">in</span>
            <span className="Reachout-Item Reachout-Item-3">touch</span>
          </h2>
          <ul className="Contacts">
            <li className="Contact">
              <a href="https://github.com/calinoracation">
                <img alt="GitHub profile" src="/octocat.png" />
              </a>
            </li>
            <li className="Contact twitter">
              <a href="https://twitter.com/calinoracation">
                <img alt="Twitter profile" src="/twitter.png" />                
              </a>
            </li>
            <li className="Contact linkedin">
              <a href="https://www.linkedin.com/in/calinoracation">
                <img alt="LinkedIn profile" src="/linkedin.png" />                
              </a>
            </li>
          </ul>
          <h3 className="Address">@calinoracation</h3>
        </footer>
      </div>
    );
  }
}

export default App;
