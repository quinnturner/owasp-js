import { describe, expect, it } from "bun:test";
import { authz_admin, authz_change, authz_fail } from "./authorization.js";

describe("authz_change", () => {
	it("should return the correct string", () => {
		const result = authz_change("user123", "role1", "role2");
		expect(result).toBe("authz_change:user123,role1,role2");
	});
});
describe("authz_admin", () => {
	it("should return the correct authorization string", () => {
		const userId = "user123";
		const event = "create";

		const result = authz_admin(userId, event);

		expect(result).toBe("authz_admin:user123,create");
	});
});
describe("authz_fail", () => {
	it("should return the correct string", () => {
		const userId = "user123";
		const resource = "resource123";
		const result = authz_fail(userId, resource);
		expect(result).toBe("authz_fail:user123,resource123");
	});
});
