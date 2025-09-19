import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from './counter.selector';
import { decrement, increment, reset } from './counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  
  private readonly store = inject(Store);
  count$ : Observable<number> = this.store.select(selectCount);

  increment() {
    // Dispatch increment action
    this.store.dispatch(increment());

  }

  decrement() {
    // Dispatch decrement action
    this.store.dispatch(decrement())
  }

  reset() { 
    this.store.dispatch(reset());
  }

}
