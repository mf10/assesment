import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user';
import { loadUsers, loadUsersSuccess, loadUsersFailure, editUserSuccess } from './users.actions';

export interface UsersState {
  users: User[];
  error: unknown;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: UsersState = {
  users: [],
  error: null,
  status: 'pending',
};

export const usersReducer = createReducer(
  // Supply the initial state
  initialState,
  // Trigger loading the users
  on(loadUsers, (state): UsersState => ({ ...state, status: 'loading' })),
  // Handle successfully loaded users
  on(
    loadUsersSuccess,
    (state, { users }): UsersState => ({
      ...state,
      users: users,
      error: null,
      status: 'success',
    }),
  ),
  // Handle users load failure
  on(
    loadUsersFailure,
    (state, { error }): UsersState => ({
      ...state,
      error: error,
      status: 'error',
    }),
  ),
  on(editUserSuccess, (state, { user }): UsersState => {
    const userIndex = state.users.findIndex((users) => users.id === user.id);

    const updatedUsers = [...state.users];
    updatedUsers[userIndex] = user;
    return {
      ...state,
      users: updatedUsers,
      error: null,
      status: 'success',
    };
  }),
);
