import { describe, expect, it } from "bun:test";
import { excess_rate_limit_exceeded } from "./excessive-use.js";

describe("excess_rate_limit_exceeded", () => {
	it("should return the correct string when userId and max are strings", () => {
		const result = excess_rate_limit_exceeded("user123", "10");
		expect(result).toBe("excess_rate_limit_exceeded:user123,10");
	});

	it("should return the correct string when userId and max are numbers", () => {
		const result = excess_rate_limit_exceeded(123, 10);
		expect(result).toBe("excess_rate_limit_exceeded:123,10");
	});

	it("should return the correct string when userId and max are bigints", () => {
		const result = excess_rate_limit_exceeded(BigInt(123), BigInt(10));
		expect(result).toBe("excess_rate_limit_exceeded:123,10");
	});
});
