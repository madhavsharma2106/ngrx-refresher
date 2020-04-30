import { Action } from '@ngrx/store';
import { User } from '../models/users.model';

export const ADD_USER = '[USER] Add';
export const REMOVE_USER = '[USER] Remove';

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: User) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload: number) {}
}

export type User = AddUser | RemoveUser;
