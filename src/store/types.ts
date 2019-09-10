// No runtime scripting
// All data models
// Interfaces, types ect
// Actions => export interface ActionDemo extends Action

import { Action } from 'redux';

//############
// Demo data #
//############

export interface User
{
    name: string;
    age: number;
}

export interface LoadingState
{
    users: boolean;
}

export interface ApplicationState
{
    loading: LoadingState;
    users: User[];
}

export interface LoadUsersRequest extends Action
{
    type: 'loadUsersRequest';
}

export interface LoadUsersSuccess extends Action
{
    type: 'loadUsersSuccess';
    users: User[];
}

export interface LoadUsersError extends Action
{
    type: 'loadUsersError';
}

export type ApplicationAction =
    | LoadUsersRequest
    | LoadUsersSuccess
    | LoadUsersError;

//############
// Demo data #
//############