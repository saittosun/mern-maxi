// jshint esversion: 6
import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';
import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props) => {
  // React DOM has more than just a render method. We can also use React DOM.createPortal and now we tell React which content to render where and there I point at content, so what's stored in this content constant and then we need to select a place in the DOM where this content should be rendered when this component is mounted
  // eslint-disable-next-line no-lone-blocks
  {/* mount on enter and unmount on exit to tell that component and the third-party library that the aside component which is inside of the CSS transition component should really be added to the DOM or be removed from the DOM when it should become visible or invisible, otherwise it's just animated out or in and not really removed, here I want to have it removed or added depending on its state. */}
  const content = (
    <CSSTransition 
      in={props.show} 
      timeout={200} 
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit>
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>   
    </CSSTransition>
  )
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;