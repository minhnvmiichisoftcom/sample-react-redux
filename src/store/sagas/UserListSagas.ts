import * as Effect from 'redux-saga/effects';
import * as userListAction from "../actions/UserListActions"
import * as userListService from '../../service/UserListService';
import { UserResponse } from '../../model/api/User';

export default function* fetchListUser() {
  yield Effect.put(userListAction.enableLoading())

  const response: Array<UserResponse> = yield Effect.call(userListService.userListService.fetchUserList)

  
  if (response !== null) {
    console.log(response)
  }
}