import { Tutorial } from './models/tutorials.model';

export interface AppState {
  readonly tutorial: Tutorial[];
}
