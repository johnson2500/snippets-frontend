/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import RealtimeEditor from '../../components/reltimeEditor/realtimeEditor';
import Snippet from '../../components/snippet/snippet';

export default function Home(props) {
  const { appState, setAppState } = props;

  const { home, editorSnippet } = appState;
  const { editing = false } = home;

  return (
    <>
      {!editing ? (
        <Snippet
          appState={appState}
          setAppState={setAppState}
          snippet={editorSnippet}
        />
      ) : (
        <RealtimeEditor
          appState={appState}
          setAppState={setAppState}
          snippet={editorSnippet}
        />
      )}
    </>
  );
}

Home.propTypes = {
  appState: PropTypes.object,
  setAppState: PropTypes.func,
};

Home.defaultProps = {
  appState: {},
  setAppState: () => {},
};
