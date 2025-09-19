import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const selectCounterstate = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
    selectCounterstate,
    (state: CounterState) => state.count
);