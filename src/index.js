import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

if (location.hostname === 'violetfunparkparty.com'){
	const Violet = require('./Violet').default;

    ReactDOM.render(
      <Violet />,
      document.getElementById('root')
    );
} else {
	const App = require('./App').default;
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
}
