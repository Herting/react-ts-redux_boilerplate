import { Action } from "redux";
import { AppThunk } from "..";
import { authResponse } from "../../typings/mock";
import { LoginModel } from "../../typings/models";

export const UPDATE_IS_AUTHENTICATED = "UPDATE_IS_AUTHENTICATED";
export const UPDATE_AUTH_IS_LOADING = "UPDATE_AUTH_IS_LOADING";
export const UPDATE_TOPMENU_LINKS = "UPDATE_TOPMENU_LINKS";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

export interface UpdateIsAuthenticatedAction extends Action {
    type: typeof UPDATE_IS_AUTHENTICATED;
    isAuthenticated: boolean;
};

export interface UpdateAuthIsLoadingAction extends Action {
    type: typeof UPDATE_AUTH_IS_LOADING;
    isLoading: boolean;
};

export interface UpdateTopMenuLinksAction extends Action {
    type: typeof UPDATE_TOPMENU_LINKS;
    topMenuLinks: any[];
};

export interface UpdateUserNameAction extends Action {
    type: typeof UPDATE_USER_NAME;
    firstName: string;
    lastName: string;
}

const updateIsAuthenticatedAction = (isAuthenticated: boolean): UpdateIsAuthenticatedAction => {
    return {
        type: UPDATE_IS_AUTHENTICATED,
        isAuthenticated
    };
};

const updateAuthIsLoadingAction = (isLoading: boolean): UpdateAuthIsLoadingAction => {
    return {
        type: UPDATE_AUTH_IS_LOADING,
        isLoading
    };
};

const updateUserNameAction = (firstName: string, lastName: string): UpdateUserNameAction => {
    return {
        type: UPDATE_USER_NAME,
        firstName,
        lastName
    };
};

export const updateTopMenuLinks = (topMenuLinks: any[]): UpdateTopMenuLinksAction => {
    return {
        type: UPDATE_TOPMENU_LINKS,
        topMenuLinks
    }
};

export const thunkLogin = (login: LoginModel): AppThunk => async (dispatch) => {
    try {
        dispatch(updateAuthIsLoadingAction(true));
        const response = authResponse; // mock

        if (response.token) {
            localStorage.setItem('user', JSON.stringify(response));
            dispatch(updateUserNameAction(response.firstName, response.lastName));
            dispatch(updateIsAuthenticatedAction(true));
        } else {
            dispatch(updateIsAuthenticatedAction(false));
        }
        dispatch(updateAuthIsLoadingAction(false));

    }
    catch (error) {
        // TODO: Log error
        console.log(error);
    }
};

export type GlobalActions =
    UpdateIsAuthenticatedAction |
    UpdateAuthIsLoadingAction |
    UpdateTopMenuLinksAction |
    UpdateUserNameAction;