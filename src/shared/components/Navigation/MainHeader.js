//jshint esversion: 6
import React from 'react';

import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className="main-header">
    {/* props.children will always refer to the things you pass between your opening and closing tags of your component. */}
      {props.children}
    </header>
  )
}

export default MainHeader;
