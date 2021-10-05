import {connect} from 'react-redux';
import { AudioPlayer } from './audio_player';


const mapStateToProps = ({player}) => ({
  currentTrackUrl: player.currentTrackUrl
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);