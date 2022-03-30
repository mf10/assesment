import { UsersService } from 'src/app/services/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './users.actions';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userservice: UsersService) {}

  // Run this code when a loadUsers action is dispatched
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        // Call the getUsers method, convert it to an observable
        from(this.userservice.getUsers()).pipe(
          // Take the returned value and return a new success action containing the users
          map((users) => loadUsersSuccess({ users: users })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadUsersFailure({ error }))),
        ),
      ),
    );
  });
}
