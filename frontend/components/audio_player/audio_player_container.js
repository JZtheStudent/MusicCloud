import {connect} from 'react-redux';
import { AudioPlayer } from './audio_player';
import { togglePlayer} from '../../actions/player_actions';

const mapStateToProps = ({player}) => ({
  currentTrack: player.currentTrack,
  isPlaying: player.isPlaying
});

const mapDispatchToProps = dispatch => ({
  togglePlayer: (bool) => dispatch(togglePlayer(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);