import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
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
import ProfileContainer from './profile/profile_container';

const App = () => {
  return (  
    <div className="app">
      <Modal />
      <header>
        <Nav/>
      </header>
    
      <div className="main-page-container">
        <div className="main-page-inner-container">
          <Switch >
            <Route exact path="/discover" component={DiscoverContainer} />
            <ProtectedRoute exact path="/stream"  component={StreamContainer} />
            <ProtectedRoute exact path="/library" component={LibraryContainer}/>
            <ProtectedRoute exact path="/likes" component={LikesContainer} />
            <ProtectedRoute exact path="/playlists" component={PlaylistsContainer} />
            <ProtectedRoute exact path="/albums" component={AlbumsContainer} />
            <ProtectedRoute exact path="/following" component={FollowingContainer} />
            <ProtectedRoute exact path="/history" component={HistoryContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <Redirect to="/discover" />
          </Switch>
        </div>
        
      </div>

    
    </div>
  );
};
 
export default App;