import { UserStatus } from "@prisma/client";
import { User } from "../domain/entities/user.entity";
import { UserCannotBeUpdatedError } from "../domain/errors/UserCannotBeUpdatedError";
import { UserActivationError } from "../domain/errors/UserActivationError";

describe("UserEntity", () => {
  it("ステータスがACTIVEのユーザーはプロフィールを更新できる", () => {
    // 準備
    const sut = createUserWithStatus(UserStatus.ACTIVE);
    const newEmail = "test+123@example.com";
    const newFamilyName = "鈴木";
    const newGivenName = "一郎";

    // 実行
    sut.updateProfile(newEmail, newFamilyName, newGivenName);

    // 検証
    expect(sut.getEmail()).toBe(newEmail);
    expect(sut.getFamilyName()).toBe(newFamilyName);
    expect(sut.getGivenName()).toBe(newGivenName);
    expect(sut.getStatus()).toBe(UserStatus.ACTIVE);
  });

  it.each`
    status
    ${UserStatus.SUSPENDED}
    ${UserStatus.BANNED}
    ${UserStatus.WITHDRAWN}
  `(
    "ステータスが$statusのユーザーはプロフィールを更新できずエラーになる",
    ({ status }: { status: UserStatus }) => {
      // 準備
      const sut = createUserWithStatus(status);
      const newEmail = "test+123@example.com";
      const newFamilyName = "鈴木";
      const newGivenName = "一郎";

      // 実行
      const action = expect(() => {
        sut.updateProfile(newEmail, newFamilyName, newGivenName);
      });

      // 検証
      action.toThrow(UserCannotBeUpdatedError);
    },
  );

  it.each`
    status
    ${UserStatus.ACTIVE}
    ${UserStatus.SUSPENDED}
    ${UserStatus.WITHDRAWN}
  `(
    "ステータスが$statusのユーザーはアクティベートできる",
    ({ status }: { status: UserStatus }) => {
      // 準備
      const sut = createUserWithStatus(status);

      // 実行
      sut.activate();

      // 検証
      expect(sut.getStatus()).toBe(UserStatus.ACTIVE);
    },
  );

  it("ステータスがBANNEDのユーザーはアクティベートできずエラーになる", () => {
    // 準備
    const sut = createUserWithStatus(UserStatus.BANNED);

    // 実行
    const action = expect(() => {
      sut.activate();
    });

    // 検証
    action.toThrow(UserActivationError);
  });
});

function createUserWithStatus(status: UserStatus): User {
  return new User(
    "f9d14968-a9f5-411d-811c-8a24189cdad0",
    "google-oauth2|1234567890",
    "test@example.com",
    "山田",
    "太郎",
    status,
  );
}
