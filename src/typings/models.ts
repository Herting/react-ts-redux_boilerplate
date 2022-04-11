export interface LoginModel {
    username: string;
    password: string;
};

export interface AuthenticateResponse {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    token: string;
};