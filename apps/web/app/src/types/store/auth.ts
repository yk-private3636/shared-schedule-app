export type AuthStatus =
  | "INITIAL"
  | "AUTHENTICATED"
  | "UNAUTHENTICATED"
  | "PENDING";

export interface AuthStore {
  status: AuthStatus;
  setStatus: (status: AuthStatus) => void;
}
