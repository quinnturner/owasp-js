import { describe, expect, it } from "bun:test";
import {
	session_created,
	session_expired,
	session_renewed,
	session_use_after_expire,
} from "./session-management.js";

describe("session_created", () => {
	it("should return the correct string", () => {
		const result = session_created("user123");
		expect(result).toBe("session_created:user123");
	});

	it("should return the correct string with a number", () => {
		const result = session_created(123);
		expect(result).toBe("session_created:123");
	});

	it("should return the correct string with a bigint", () => {
		const result = session_created(BigInt(456));
		expect(result).toBe("session_created:456");
	});
});

describe("session_renewed", () => {
	it("should return the correct string", () => {
		const userId = "123";
		const result = session_renewed(userId);
		expect(result).toBe("session_renewed:123");
	});

	it("should return the correct string for number", () => {
		const userId = 456;
		const result = session_renewed(userId);
		expect(result).toBe("session_renewed:456");
	});

	it("should return the correct string for bigint", () => {
		const userId = BigInt(789);
		const result = session_renewed(userId);
		expect(result).toBe("session_renewed:789");
	});
});

describe("session_expired", () => {
	it("should return the correct session expired message", () => {
		const userId = 123;
		const reason = "inactive";
		const expected = "session_expired:123,inactive";

		const result = session_expired(userId, reason);

		expect(result).toBe(expected);
	});

	it("should handle string userId and reason", () => {
		const userId = "456";
		const reason = "expired";
		const expected = "session_expired:456,expired";

		const result = session_expired(userId, reason);

		expect(result).toBe(expected);
	});

	it("should handle bigint userId", () => {
		const userId = BigInt(789);
		const reason = "unknown";
		const expected = "session_expired:789,unknown";

		const result = session_expired(userId, reason);

		expect(result).toBe(expected);
	});
});

describe("session_use_after_expire", () => {
	it("should return the correct session string", () => {
		const userId = "123";
		const expected = "session_use_after_expire:123";

		const result = session_use_after_expire(userId);

		expect(result).toEqual(expected);
	});

	it("should return the correct session string for numeric userId", () => {
		const userId = 456;
		const expected = "session_use_after_expire:456";

		const result = session_use_after_expire(userId);

		expect(result).toEqual(expected);
	});

	it("should return the correct session string for bigint userId", () => {
		const userId = BigInt(789);
		const expected = "session_use_after_expire:789";

		const result = session_use_after_expire(userId);

		expect(result).toEqual(expected);
	});
});
