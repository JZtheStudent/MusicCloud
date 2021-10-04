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
import ProfileTracksContainer from './profile/profile_tracks_container'
import ProfileAlbumsContainer from './profile/profile_albums_container'
import ProfilePlaylistsContainer from './profile/profile_playlists_container';
import UploadContainer from './upload/upload_container';

import AudioPlayerContainer from './audio_player/audio_player_container';

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
            <ProtectedRoute exact path="/profile/tracks" component={ProfileTracksContainer} /> 
            <ProtectedRoute exact path="/profile/albums" component={ProfileAlbumsContainer} /> 
            <ProtectedRoute exact path="/profile/playlists" component={ProfilePlaylistsContainer} />
            <ProtectedRoute exact paht="/upload" component={UploadContainer} />
            <Redirect to="/discover" />
          </Switch>
        </div>
        
        

      </div>
    
      <AudioPlayerContainer />
    

    
    </div>
  );
};
 
export default App;