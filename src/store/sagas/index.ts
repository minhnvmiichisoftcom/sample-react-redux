import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/types';
import userListSaga from './UserListSagas';

export default function* watch() {
  yield all([
      takeEvery(types.GET_USER_LIST, userListSaga)
    ]);
}