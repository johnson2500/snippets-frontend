/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import {
  Typography, Button, TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: '100%',
  },
}));

export default function SignIn(props) {
  const { appState, setAppState } = props;
  const { firebase } = appState;

  const classes = useStyles();

  const history = useHistory();

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

  const handleSubmit = async () => {
    const { email, password } = state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        // Signed in
        const { user } = userCredential;

        const token = await user.getIdToken();

        localStorage.setItem('codeSnippetsToken', token);
        localStorage.setItem('userId', user.uid);

        setAppState({
          ...appState,
          auth: {
            token,
            userId: user.uid,
          },
        });

        history.push('/');
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
    <div>
      <Typography align="center" variant="h6">Sign In</Typography>
      <br />
      <TextField
        type="email"
        label="Email"
        onChange={handleEmailChange}
        className={classes.fullWidth}
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        className={classes.fullWidth}
        onChange={handlePasswordChange}
      />
      <br />
      <br />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        className={classes.fullWidth}
      >
        Sign In
      </Button>
    </div>
  );
}

SignIn.propTypes = {
  appState: PropTypes.object,
  setAppState: PropTypes.func,
};

SignIn.defaultProps = {
  setAppState: {},
  appState: {
    firebase: { auth: {} },
  },
};
