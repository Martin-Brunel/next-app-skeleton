'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/interfaceAdapters/state/store';
import { Dispatch } from '@reduxjs/toolkit';
import { MainState, setMainState } from '@/interfaceAdapters/state/reducers/mainReducer';
import { getData } from '@/interfaceAdapters/state/actions/main';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  text: state.main.text,
  users: state.main.users
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMainState: (payload: Partial<MainState>) => {
    dispatch(setMainState(payload))
  },
  getData: () => {
    dispatch(getData())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  