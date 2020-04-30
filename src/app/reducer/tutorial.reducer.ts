import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorials.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com',
};

export function tutorialReducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  switch (action.type) {
    case TutorialActions.ADD_TUORIAL: {
      return [...state, action.payload];
    }
    case TutorialActions.REMOVE_TUORIAL: {
      return state.filter((tut, index) => index !== action.payload);
    }
    default:
      return state;
  }
}
