export class UserCannotBeUpdatedError extends Error {
  constructor(userId: string) {
    super(`User(${userId}) cannot be updated`);
  }
}
