import produce from "immer";
import { GlobalActions, UPDATE_AUTH_IS_LOADING, UPDATE_IS_AUTHENTICATED, UPDATE_TOPMENU_LINKS, UPDATE_USER_NAME } from "./action";

export interface GlobalState {
    isAuthenticated: boolean | undefined;
    isLoading: boolean;
    topMenuLinks: any[];
    firstName: string;
    lastName: string;
};

const initialState: GlobalState = {
    isAuthenticated: undefined,
    isLoading: false,
    topMenuLinks: [],
    firstName: "",
    lastName: ""
};

export const reducer = (globalState = initialState, action: GlobalActions): GlobalState => produce(globalState, draft => {
    switch (action.type) {
        case UPDATE_IS_AUTHENTICATED: {
            draft.isAuthenticated = action.isAuthenticated;
            break;
        }
        case UPDATE_AUTH_IS_LOADING: {
            draft.isLoading = action.isLoading;
            break;
        }
        case UPDATE_TOPMENU_LINKS: {
            draft.topMenuLinks = action.topMenuLinks;
            break;
        }
        case UPDATE_USER_NAME: {
            draft.firstName = action.firstName;
            draft.lastName = action.lastName;
            break;
        }
    }
});

export const getIsAuthenticated = (state: GlobalState) => state.isAuthenticated;
export const getAuthIsLoading = (state: GlobalState) => state.isLoading;
export const getTopMenuLinks = (state: GlobalState) => state.topMenuLinks;
export const getFirstName = (state: GlobalState) => state.firstName;
export const getLastName = (state: GlobalState) => state.lastName;