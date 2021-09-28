import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Nav from './nav/nav';
import Modal from './modal/modal';
import DiscoverContainer from './discover/discover_container';
import StreamContainer from './stream/stream_container';
import LibraryContainer from './library/library_container';
import LikesContainer from './library/likes_container';
import PlaylistsContainer from './library/playlists_container';

const App = () => {
  return (  
    <div>
      <Modal />
      <header>
        <Nav/>
      </header>
    
      <Switch>
        <Route exact path="/discover" component={DiscoverContainer} />
        <Route exact path="/stream"  component={StreamContainer} />
        <Route exact path="/library" component={LibraryContainer}/>
        <Route exact path="/likes" component={LikesContainer} />
        <Route exact path="/playlists" component={PlaylistsContainer} />
        
        <Redirect to="/discover" />
      </Switch>
    
    </div>
  );
};
 
export default App;