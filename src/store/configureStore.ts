import * as Global from "./global";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { AppState } from ".";
import thunk from 'redux-thunk'; 

export default function configureStore(initialState?: AppState)
{
    const rootReducer = combineReducers({
        global: Global.reducer,
        // ... more reducers
    });

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk) 
    );

    return store;
}
