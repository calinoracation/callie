import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

if (true){
  console.log('Render violetfunparkparty');
	const Violet = require('./Violet').default;

  ReactDOM.render(
    <Violet />,
    document.getElementById('root')
  );
} else {
	console.log('Render callie');
  const App = require('./App').default;
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
