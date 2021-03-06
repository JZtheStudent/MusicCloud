import { connect } from "react-redux";
import React from 'react';
import {login, signup} from '../../actions/session_actions';
import {openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from "./session_form";

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button className="confirm-button" onClick={() => dispatch(openModal('login'))}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  loginDemo: () => dispatch(login({username: 'demo-user', password: '123456'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);