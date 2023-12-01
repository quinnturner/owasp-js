import { describe, expect, it } from "bun:test";
import {
	user_archived,
	user_created,
	user_deleted,
	user_updated,
} from "./user-management.js";

describe("user_created", () => {
	it("should return the correct string when userId, newUserId, and role are strings", () => {
		const result = user_created("user123", "newUser456", "admin");
		expect(result).toBe("user_created:user123,newUser456,admin");
	});

	it("should return the correct string when userId, newUserId, and role are numbers, and we pass attributes of length 0", () => {
		const result = user_created(123, 456, "user", [] as const);
		expect(result).toBe("user_created:123,456,user:");
	});

	it("should return the correct string when we pass attributes of length 1", () => {
		const result = user_created(123, "newUser456", "user", [
			"attribute1",
		] as const);
		expect(result).toBe("user_created:123,newUser456,user:attribute1");
	});

	it("should return the correct string when we pass attributes of length 2", () => {
		const result = user_created(123, "newUser456", "user", [
			"attribute1",
			"attribute2",
		] as const);
		expect(result).toBe(
			"user_created:123,newUser456,user:attribute1,attribute2",
		);
	});
});

describe("user_updated", () => {
	it("should return the correct string when userId, newUserId, and role are strings", () => {
		const result = user_updated("user123", "newUser456", "admin");
		expect(result).toBe("user_updated:user123,newUser456,admin");
	});
	it("should return the correct string when userId, newUserId, and role are numbers, and we pass attributes of length 0", () => {
		const result = user_updated(123, 456, "user", [] as const);
		expect(result).toBe("user_updated:123,456,user:");
	});
	it("should return the correct string when we pass attributes of length 1", () => {
		const result = user_updated(123, "newUser456", "user", [
			"attribute1",
		] as const);
		expect(result).toBe("user_updated:123,newUser456,user:attribute1");
	});
	it("should return the correct string when we pass attributes of length 2", () => {
		const result = user_updated(123, "newUser456", "user", [
			"attribute1",
			"attribute2",
		] as const);
		expect(result).toBe(
			"user_updated:123,newUser456,user:attribute1,attribute2",
		);
	});
});

describe("user_archived", () => {
	it("should return the correct string", () => {
		const userId = 123;
		const archivedUserId = "456";
		const result = user_archived(userId, archivedUserId);
		const expected = "user_archived:123,456";
		expect(result).toBe(expected);
	});

	it("should handle different types of userId and archivedUserId", () => {
		const userId = "abc";
		const archivedUserId = 789n;
		const result = user_archived(userId, archivedUserId);
		const expected = "user_archived:abc,789";
		expect(result).toBe(expected);
	});
});

describe("user_deleted", () => {
	it("should return the correct string", () => {
		const userId = 123;
		const deletedUserId = "456";
		const result = user_deleted(userId, deletedUserId);
		expect(result).toBe("user_deleted:123,456");
	});

	it("should return the correct string with bigint values", () => {
		const userId = BigInt(123);
		const deletedUserId = BigInt(456);
		const result = user_deleted(userId, deletedUserId);
		expect(result).toBe("user_deleted:123,456");
	});
});
