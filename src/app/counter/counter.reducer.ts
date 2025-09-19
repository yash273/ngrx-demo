import { createReducer, on } from "@ngrx/store";
import { initialCounterState } from "./counter.state";
import { decrement, increment, reset } from "./counter.actions";

export const countReducer = createReducer(
    initialCounterState,
    on(increment, state => ({ ...state, count: state.count + 1 })),
    on(decrement, state => ({ ...state, count: state.count - 1 })),
    on(reset, state => ({ ...state, count: 0 })
    )
)