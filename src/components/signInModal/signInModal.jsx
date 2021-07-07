/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';

import SignInSignUp from './signInSignUp';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    // width: '50%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SignInUpModal(props) {
  const classes = useStyles();
  const { setAppState, appState } = props;
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal open>
        <div style={modalStyle} className={classes.paper}>
          <SignInSignUp
            appState={appState}
            setAppState={setAppState}
          />
        </div>
      </Modal>
    </div>
  );
}

SignInUpModal.propTypes = {
  appState: PropTypes.object,
  setAppState: PropTypes.func,
};

SignInUpModal.defaultProps = {
  appState: {},
  setAppState: () => {},
};
