import { describe, expect, it } from "bun:test";
import { input_validation_fail } from "./input-validation";

describe("input_validation_fail", () => {
	it("should return the correct string", () => {
		const result = input_validation_fail("field1", "user123");
		expect(result).toBe("input_validation_fail:field1,user123");
	});
});
