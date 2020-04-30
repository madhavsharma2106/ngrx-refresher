import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorials.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from '../actions/tutorial.actions';
import * as UserActions from '../actions/user.actions';
import { User } from '../actions/user.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  public tutorials: Observable<Tutorial[]>;
  public users: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = this.store.select('tutorial');
    this.users = this.store.select('user');
  }

  ngOnInit(): void {}

  deleteUser(id: number): void {
    this.store.dispatch(new UserActions.RemoveUser(id));
  }
  deleteTutorial(index: number): void {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
}
