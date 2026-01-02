export type AuthStatus = "INITIAL" | "AUTHENTICATED" | "UNAUTHENTICATED";

export interface AuthStore {
  status: AuthStatus;
  setStatus: (status: AuthStatus) => void;
}
