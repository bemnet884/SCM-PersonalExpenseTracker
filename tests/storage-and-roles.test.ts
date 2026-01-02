import { describe, it, expect } from "vitest";
import { StorageKeys, USER_ROLES } from "../src/types";
import { MOCK_USERS } from "../src/data/users";

describe("storage keys", () => {
  it("uses stable keys for auth user and expenses", () => {
    expect(StorageKeys.AUTH_USER).toBe("auth_user");
    expect(StorageKeys.EXPENSES).toBe("user_expenses");
  });
});

describe("user roles", () => {
  it("ensures all mock users have a valid role", () => {
    const allowedRoles = new Set(USER_ROLES);

    for (const user of MOCK_USERS) {
      expect(allowedRoles.has(user.role)).toBe(true);
    }
  });

  it("includes at least one administrator and one non-administrator", () => {
    const admins = MOCK_USERS.filter((u) => u.role === "Administrator");
    const nonAdmins = MOCK_USERS.filter((u) => u.role !== "Administrator");

    expect(admins.length).toBeGreaterThanOrEqual(1);
    expect(nonAdmins.length).toBeGreaterThanOrEqual(1);
  });
});

