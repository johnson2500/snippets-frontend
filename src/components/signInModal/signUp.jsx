/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField, Typography, Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  centerContainer: {
    margin: '0 auto',
  },
}));

export default function SignUp(props) {
  const { appState } = props;
  const { firebase } = appState;

  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  const [state, setState] = React.useState({
    email: null,
    password: null,
  });

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      password: value,
    });
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      email: value,
    });
  };

  const handleSubmit = () => {
    const { email, password } = state;
    // eslint-disable-next-line react/prop-types
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <>
      <Typography>Sign Up</Typography>
      <TextField
        type="email"
        placeholder="email"
        onChange={handleEmailChange}
      />
      <br />
      <TextField type="password" placeholder="password" onChange={handlePasswordChange} />
      <br />
      <Button variant="contained" onClick={handleSubmit}>Sign Up</Button>
    </>
  );
}

SignUp.propTypes = {
  appState: PropTypes.object,
};

SignUp.defaultProps = {
  appState: {},
};