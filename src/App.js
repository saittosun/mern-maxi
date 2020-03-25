// jshint esversion: 6
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    // we wrap this around every route that should be able to use our router.what should be able to use our router? Well our pages should be loaded with help of the router
    <Router>
      <MainNavigation />
      <main>
        {/* can only be used inside of a router which has to be setup as a surrounding element, there on the route component, we can add a path property and defined the path in the URL, so the thing after the domain that should be entered to reach this specific route, so here slash and what should be rendered when that route is reached? */}

        {/* The switch component can be wrapped around your route definitions, so before the starting route and after redirect and this now instructs React router that inside of the switch block, whenever it encounters a fitting route, it will not evaluate the lines thereafter, so it will not redirect if it was able to identify this path here and hence rendered this new place component. */}
        <Switch>
          <Route path="/" exact>
          {/* this will not always be rendered on the screen but thanks to this wrapper, thanks to this package, it will only be rendered if our URL path is slash. */}
            <Users/>
          </Route>
          <Route path="/places/new">
            <NewPlace />  
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  ) 
}

export default App;
