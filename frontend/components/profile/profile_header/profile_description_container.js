import {connect} from 'react-redux';
import ProfileDescription from './profile_description';

const mapStateToProps = ({session, entities})=> ({
  currentUser: entities.user[session.id]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDescription);