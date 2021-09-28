import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Nav from './nav/nav';
import Modal from './modal/modal';
import DiscoverContainer from './discover/discover_container';
import StreamContainer from './stream/stream_container';
import LibraryContainer from './library/library_container';
import LikesContainer from './library/likes_container';
import PlaylistsContainer from './library/playlists_container';
import AlbumsContainer from './library/albums_container';
import FollowingContainer from './library/following_container';
import HistoryContainer from './library/history_container';

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
        <Route exact path="/albums" component={AlbumsContainer} />
        <Route exact path="/following" component={FollowingContainer} />
        <Route exact path="/history" component={HistoryContainer} />
        <Redirect to="/discover" />
      </Switch>
    
    </div>
  );
};
 
export default App;