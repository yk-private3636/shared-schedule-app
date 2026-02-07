import { v7 as uuidv7, validate } from "uuid";

export function generateUUID(): string {
  return uuidv7();
}

export function isValidUUID(uuid: string): boolean {
  return validate(uuid);
}
