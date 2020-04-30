import { User } from '../models/users.model';
import * as UserActions from '../actions/user.actions';

const initialState: User[] = [
  {
    id: 1,
    age: 22,
    name: 'Jane',
  },
  {
    id: 2,
    age: 25,
    name: 'John',
  },
];

export function userReducer(
  state: User[] = initialState,
  action: UserActions.User
) {
  switch (action.type) {
    case UserActions.ADD_USER: {
      return [...state, action.payload];
    }
    case UserActions.REMOVE_USER: {
      return state.filter((user) => user.id !== action.payload);
    }
    default:
      return state;
  }
}
