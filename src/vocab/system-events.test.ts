import { describe, expect, it } from "bun:test";
import {
	sys_crash,
	sys_monitor_disabled,
	sys_monitor_enabled,
	sys_restarted,
	sys_shutdown,
	sys_startup,
} from "./system-events.js";

describe("sys_startup", () => {
	it("should return the correct string when userId is a string", () => {
		const result = sys_startup("user123");
		expect(result).toBe("sys_startup:user123");
	});

	it("should return the correct string when userId is a number", () => {
		const result = sys_startup(123);
		expect(result).toBe("sys_startup:123");
	});

	it("should return the correct string when userId is a bigint", () => {
		const result = sys_startup(BigInt(123));
		expect(result).toBe("sys_startup:123");
	});
});

describe("sys_shutdown", () => {
	it("should return the correct system event string", () => {
		const userId = "123";
		const expected = "sys_shutdown:123";
		const result = sys_shutdown(userId);
		expect(result).toEqual(expected);
	});

	it("should return the correct system event string with a number", () => {
		const userId = 456;
		const expected = "sys_shutdown:456";
		const result = sys_shutdown(userId);
		expect(result).toEqual(expected);
	});

	it("should return the correct system event string with a bigint", () => {
		const userId = BigInt(789);
		const expected = "sys_shutdown:789";
		const result = sys_shutdown(userId);
		expect(result).toEqual(expected);
	});
});

describe("sys_restarted", () => {
	it("should return the correct system restart event string", () => {
		const userId = "123";
		const expected = "sys_restart:123";
		const result = sys_restarted(userId);
		expect(result).toEqual(expected);
	});

	it("should return the correct system restart event string with a number", () => {
		const userId = 456;
		const expected = "sys_restart:456";
		const result = sys_restarted(userId);
		expect(result).toEqual(expected);
	});

	it("should return the correct system restart event string with a bigint", () => {
		const userId = BigInt(789);
		const expected = "sys_restart:789";
		const result = sys_restarted(userId);
		expect(result).toEqual(expected);
	});
});

describe("sys_crash", () => {
	it("should return the correct system crash event", () => {
		const reason = "out_of_memory";
		const result = sys_crash(reason);
		const expected = "sys_crash:out_of_memory";
		expect(result).toEqual(expected);
	});
});

describe("sys_monitor_disabled", () => {
	it("should return the correct event string", () => {
		const userId = "123";
		const agent = "test-agent";
		const expectedEvent = "sys_monitor_disabled:123,test-agent";

		const result = sys_monitor_disabled(userId, agent);

		expect(result).toBe(expectedEvent);
	});

	it("should handle numeric userId", () => {
		const userId = 456;
		const agent = "test-agent";
		const expectedEvent = "sys_monitor_disabled:456,test-agent";

		const result = sys_monitor_disabled(userId, agent);

		expect(result).toBe(expectedEvent);
	});

	it("should handle bigint userId", () => {
		const userId = BigInt(789);
		const agent = "test-agent";
		const expectedEvent = "sys_monitor_disabled:789,test-agent";

		const result = sys_monitor_disabled(userId, agent);

		expect(result).toBe(expectedEvent);
	});
});

describe("sys_monitor_enabled", () => {
	it("should return the correct system event string", () => {
		const userId = "123";
		const agent = "web";

		const result = sys_monitor_enabled(userId, agent);

		expect(result).toBe("sys_monitor_enabled:123,web");
	});

	it("should handle numeric userId", () => {
		const userId = 456;
		const agent = "mobile";

		const result = sys_monitor_enabled(userId, agent);

		expect(result).toBe("sys_monitor_enabled:456,mobile");
	});

	it("should handle bigint userId", () => {
		const userId = BigInt(789);
		const agent = "desktop";

		const result = sys_monitor_enabled(userId, agent);

		expect(result).toBe("sys_monitor_enabled:789,desktop");
	});
});
