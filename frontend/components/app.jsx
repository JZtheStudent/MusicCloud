import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_utils';
import Nav from './nav/nav';
import Modal from './modal/modal';
import DiscoverContainer from './discover/discover_container';
import LibraryContainer from './library/library_container';
import ProfileTracksContainer from './profile/profile_tracks_container'
import UploadContainer from './upload/upload_container';
import EditTrackContainer from './edit_track/edit_track_container';
import TrackDeleteContainer from './track_delete/track_delete_container';
import TrackShowContainer from './track_show/track_show_container'

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
            <Route exact path="/tracks/:id" component={TrackShowContainer} />
            <ProtectedRoute exact path="/library" component={LibraryContainer}/>
            <ProtectedRoute exact path="/profile" component={ProfileTracksContainer} />
            <ProtectedRoute exact path="/upload" component={UploadContainer} />
            <ProtectedRoute exact path="/edit_track" component={EditTrackContainer} />
            <ProtectedRoute exact path="/delete_track" component={TrackDeleteContainer} />
            <Redirect to="/discover" />
          </Switch>
          
        </div>
      </div>
    
      <AudioPlayerContainer />
    
    
    
    </div>
  );
};
 
export default App;