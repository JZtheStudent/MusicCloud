import {connect} from 'react-redux';
import { AudioPlayer } from './audio_player';


const mapStateToProps = ({player}) => ({
  currentTrack: player.currentTrack
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);