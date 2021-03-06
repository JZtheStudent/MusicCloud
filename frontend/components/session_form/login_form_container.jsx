import { connect } from "react-redux";
import React from 'react';
import {login} from '../../actions/session_actions';
import {openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from "./session_form";

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button className="confirm-button" onClick={() => dispatch(openModal('signup'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  loginDemo: () => dispatch(login({username: 'demo-user', password: '123456'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);