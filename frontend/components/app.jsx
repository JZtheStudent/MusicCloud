import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav/nav';

const App = () => {
  return (  
    <div>
      <header>
        <Nav />
      </header>
    </div>
  );
}
 
export default App;