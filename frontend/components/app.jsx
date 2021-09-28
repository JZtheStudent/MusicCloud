import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Nav from './nav/nav';
import Modal from './modal/modal';
import DiscoverContainer from './discover/discover_container'


const App = () => {
  return (  
    <div>
      <Modal />
      <header>
        <Nav/>
      </header>
    
      <Switch>
        <Route exact path="/discover" component={DiscoverContainer} />
        <Redirect to="/discover" />
      </Switch>
    
    </div>
  );
};
 
export default App;