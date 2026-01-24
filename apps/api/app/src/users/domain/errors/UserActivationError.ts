export class UserActivationError extends Error {
  constructor(userId: string) {
    super(`User(${userId}) cannot be activated`);
  }
}
