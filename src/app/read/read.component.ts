import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorials.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from '../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  public tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = this.store.select('tutorial');
  }

  ngOnInit(): void {}

  deleteTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
}
