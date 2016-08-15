import React from 'react';

require('normalize.css/normalize.css');
require('../styles/App.scss');

function AppComponent(props) {
  return (<div className="app-container">
    {props.children}
  </div>);
}

AppComponent.propTypes = {
  children: React.PropTypes.any,
};

export default AppComponent;
