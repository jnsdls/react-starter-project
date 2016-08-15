import React from 'react';

require('../styles/Home.scss');

function AppComponent() {
  return (<div className="home-component">
    Hello, I'm the Home Component
    <img src="/assets/images/hello.png" role="presentation" />
  </div>);
}

AppComponent.propTypes = {
  children: React.PropTypes.any,
};

export default AppComponent;
