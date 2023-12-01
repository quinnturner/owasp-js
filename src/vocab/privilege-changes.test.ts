import { describe, expect, it } from "bun:test";
import { privilege_permissions_changed } from "./privilege-changes";

describe("privilege_permissions_changed", () => {
	it("should return the correct string", () => {
		const result = privilege_permissions_changed(
			"user123",
			"file1",
			"read",
			"write",
		);
		expect(result).toBe("malicious_direct:user123, file1,read,write");
	});
});
