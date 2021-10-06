import { connect } from "react-redux";
import Track from "./track";
import { receiveCurrentTrack } from "../../actions/player_actions";


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Track);