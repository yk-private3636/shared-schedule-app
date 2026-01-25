export type UserErrorCode = "USER_ACTIVATION_ERROR" | "USER_CANNOT_BE_UPDATED_ERROR";

export type HttpErrorCode =
    | "UNAUTHENTICATED"
    | "FORBIDDEN"
    | "NOT_FOUND"
    | "BAD_REQUEST"
    | "CONFLICT"
    | "INTERNAL_SERVER_ERROR";


export type GqlResponseErrorCode = UserErrorCode | HttpErrorCode | HttpErrorCode;