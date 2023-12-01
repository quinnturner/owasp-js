import { describe, expect, it } from "bun:test";
import { sequence_fail } from "./sequence-errors.js";

describe("sequence_fail", () => {
	it("should return the correct string", () => {
		const result = sequence_fail("user123");
		expect(result).toBe("sequence_fail:user123");
	});

	it("should return the correct string for number input", () => {
		const result = sequence_fail(123);
		expect(result).toBe("sequence_fail:123");
	});

	it("should return the correct string for bigint input", () => {
		const result = sequence_fail(BigInt(456));
		expect(result).toBe("sequence_fail:456");
	});
});
