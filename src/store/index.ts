import * as Global from "./global";
import { GlobalActions } from "./global/action";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

// To reduce repetition, you might want to define a reusable AppThunk type once,
// in your store file, and then use that type whenever you write a thunk:
export type AppThunk<ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

// The top-level state object
export interface AppState
{
    global: Global.GlobalState;
    // ...more states
}

// Combined action types
export type AppActions = GlobalActions // | ... more actions;

export type AppThunkDispatch<T = unknown> = ThunkDispatch<AppState, T, AppActions>;