export class UserCannotBeUpdatedError extends Error {
  constructor() {
    super("User cannot be updated");
  }
}
