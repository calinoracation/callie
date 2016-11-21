import React, { Component } from 'react';

import './bg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
            <div className="Experience-logo">
              <img src="https://inklingstaticgzip.a.ssl.fastly.net/inkling_com/logos/inkling-logo.svg" />
            </div>
            <div className="Experience-detail">
              <p>
                On any given day you can find me working on our Node / React based sites, debugging all the things, and working with our team on planning new features. Amazon AWS, Docker, Node & Modern Javascript/Tooling are a few things I really enjoyed.
              </p>
            </div>
            <svg width="36px" height="124px" className="Connector-2" viewBox="366 244 36 124" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M369,247 C369,247 412.243778,305.978516 382.637322,364.957031" id="curve" stroke="#FFFFFF" strokeWidth="5" fill="none" transform="translate(381.000000, 305.978516) scale(-1, 1) translate(-381.000000, -305.978516) "></path>
            </svg>
          </li>
          <li className="Callout-entry alternate">            
            <div className="Experience-detail alternate">
              <p>
                Based out of Atlanta, Georgia, for over 7 years I worked on a diverse set of projects. Some of the things I worked with a lot are C#, XAML, Node and AngularJS, with a touch of Sketch and a ton of debugging.
              </p>
            </div>
            <div className="Experience-logo alternate">
              <img src="/turner.png" />
            </div>
          </li>
        </ul>
        <div className="Fanout">            
          <div className="Logos">
            <div className="Logo node">
              <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" />
            </div>                  
          </div>          
          <div className="Logos docker">                  
            <div className="Logo docker">
              <img src="https://d2mw6vgfxwlz2a.cloudfront.net/2016/Feb/docker_logo-1455828502290.png" />
            </div>
          </div>
          <div className="Logos navy">                  
            <div className="Logo navy">
              <img src="http://www.navy.mil/navydata/questions/NavyEmblem.gif" />
            </div>
          </div>        
          <div className="Logos">
            <div className="Logo nginx">
              <img src="https://assets.wp.nginx.com/wp-content/uploads/2015/04/NGINX_logo_rgb-01.png" />
            </div>                  
          </div>        
        </div>
        <div className="Fanout row-2">            
          <div className="Logos">
            <div className="Logo redux">
              <img src="https://seimys.com/docs/spa-react-redux/imgs/logo-redux.png" />
            </div>
          </div>          
          <div className="Logos docker">                  
            <div className="Logo react">
              <img src="http://builtwithreact.io/img/share-logo.jpg" />
            </div>                
          </div>
          <div className="Logos navy"> 
            <div className="Logo aws">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/2000px-AmazonWebservices_Logo.svg.png" />
            </div>                                 
          </div>        
          <div className="Logos">
            <div className="Logo webpack">
              <img src="https://camo.githubusercontent.com/c6ddd9ff94ce584804e95bb55b3f2416dd553843/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313336353838312f313931383337372f34383062326664362d376462632d313165332d386261302d3733346661663331353962382e706e67" />
            </div>  
          </div>        
        </div>
        <div className="Fanout row-3">            
          <div className="Logos">
            <div className="Logo github">
              <img src="/octocat.png" />
            </div>                  
          </div>          
          <div className="Logos docker">                  
            <div className="Logo sketch">
              <img src="/sketch.png" />
            </div>
          </div>
          <div className="Logos navy">                  
            <div className="Logo babel">
              <img src="https://raw.githubusercontent.com/babel/logo/master/babel.png" />
            </div>
          </div>        
          <div className="Logos">
            <div className="Logo mocha">
              <img src="/mocha.svg" />
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
                <img src="/octocat.png" />
              </a>
            </li>
            <li className="Contact twitter">
              <a href="https://twitter.com/calinoracation">
                <img src="/twitter.png" />                
              </a>
            </li>
            <li className="Contact linkedin">
              <a href="https://www.linkedin.com/in/calinoracation">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" />                
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
