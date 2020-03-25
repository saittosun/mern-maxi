// jshint esversion: 6
import React from 'react';

import './SideDrawer.css';

const SideDrawer = (props) => {
  return (
    <aside className="side-drawer">
      {props.children}
    </aside>
  )
}

export default SideDrawer;