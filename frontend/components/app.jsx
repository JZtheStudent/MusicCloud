import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from './nav/nav';
import Modal from './modal/modal';
import HomeContainer from './home/home_container'


const App = ({currentUser, logout, openModal}) => {
  return (  
    <div>
      <Modal />
      <header>
        <Nav/>
      </header>
    
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>

    </div>
  );
};
 
export default App;