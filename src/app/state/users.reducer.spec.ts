import * as usersReducer from './users.reducer';
import { loadUsers, loadUsersSuccess } from './users.actions';
import { User } from '../models/user';

describe('usersReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = usersReducer;
      const action = {} as any;
      const state = usersReducer.usersReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

});


