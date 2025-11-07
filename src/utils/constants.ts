import dotenv from 'dotenv';

dotenv.config();

export const SECRET_KEY = process.env.SECRET_KEY; 

export enum STATUS_CODE {
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
    NOT_AUTHORIZED = 401,
    FORBIDDEN = 403,
    CREATED = 201,
    OK = 200,
    SERVER_ERROR = 500,
}