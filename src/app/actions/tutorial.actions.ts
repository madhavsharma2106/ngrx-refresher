import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorials.model';

export const ADD_TUORIAL = '[TUTORIAL] Add';
export const REMOVE_TUORIAL = '[TUTORIAL] Remove';

export class AddTutorial implements Action {
  readonly type = ADD_TUORIAL;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUORIAL;

  constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial;
