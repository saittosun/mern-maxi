// jshint esversion: 6
import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';

const SideDrawer = (props) => {
  // React DOM has more than just a render method. We can also use React DOM.createPortal and now we tell React which content to render where and there I point at content, so what's stored in this content constant and then we need to select a place in the DOM where this content should be rendered when this component is mounted
  const content = <aside className="side-drawer">{props.children}</aside>
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;