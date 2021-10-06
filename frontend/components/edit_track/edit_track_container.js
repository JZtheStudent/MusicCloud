import {connect} from 'react-redux';
import EditTrack from './edit_track';
import { updateTrack } from '../../actions/track_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateTrack: (data, userId, trackId) => dispatch(updateTrack(data, userId, trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrack);