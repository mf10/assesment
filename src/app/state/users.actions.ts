import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

// Get Users
export const loadUsers = createAction('[Users API] Load Users');

export const loadUsersSuccess = createAction('[Users API] Load Users Success', props<{ users: User[] }>());

export const loadUsersFailure = createAction('[Users API] Load Users Failure', props<{ error: string }>());

// Edit Users
export const editUserSuccess = createAction('[User modal] Edit User Success', props<{ user: User }>());
