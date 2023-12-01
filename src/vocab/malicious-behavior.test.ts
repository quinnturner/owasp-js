import { describe, expect, it } from "bun:test";
import {
	malicious_attack_tool,
	malicious_cors,
	malicious_direct_reference,
	malicious_excess_404,
	malicious_extraneous,
} from "./malicious-behavior.js";

describe("malicious_extraneous", () => {
	it("should return the correct string", () => {
		const result = malicious_extraneous("user123", "input1", "Mozilla/5.0");
		expect(result).toBe("malicious_extraneous:user123,input1,Mozilla/5.0");
	});

	it("should handle numeric userIdOrIp", () => {
		const result = malicious_extraneous(456, "input2", "Chrome/91.0.4472.124");
		expect(result).toBe("malicious_extraneous:456,input2,Chrome/91.0.4472.124");
	});

	it("should handle bigint userIdOrIp", () => {
		const result = malicious_extraneous(BigInt(789), "input3", "Safari/14.1.1");
		expect(result).toBe("malicious_extraneous:789,input3,Safari/14.1.1");
	});
});
describe("malicious_attack_tool", () => {
	it("should return the correct string with string userIdOrIp, string toolName, and string userAgent", () => {
		const result = malicious_attack_tool("user123", "tool1", "Mozilla/5.0");
		expect(result).toBe("malicious_attack_tool:user123,tool1,Mozilla/5.0");
	});

	it("should return the correct string with number userIdOrIp, string toolName, and string userAgent", () => {
		const result = malicious_attack_tool(123, "tool2", "Chrome/91.0.4472.124");
		expect(result).toBe("malicious_attack_tool:123,tool2,Chrome/91.0.4472.124");
	});

	it("should return the correct string with bigint userIdOrIp, string toolName, and string userAgent", () => {
		const result = malicious_attack_tool(BigInt(456), "tool3", "Safari/14.1.1");
		expect(result).toBe("malicious_attack_tool:456,tool3,Safari/14.1.1");
	});
});
describe("malicious_excess_404", () => {
	it("should return the correct string", () => {
		const userIdOrIp = "123";
		const userAgent = "Mozilla/5.0";
		const result = malicious_excess_404(userIdOrIp, userAgent);
		expect(result).toBe("malicious_excess404:123,Mozilla/5.0");
	});

	it("should handle numeric userIdOrIp", () => {
		const userIdOrIp = 456;
		const userAgent = "Chrome/91.0.4472.124";
		const result = malicious_excess_404(userIdOrIp, userAgent);
		expect(result).toBe("malicious_excess404:456,Chrome/91.0.4472.124");
	});

	it("should handle bigint userIdOrIp", () => {
		const userIdOrIp = BigInt(789);
		const userAgent = "Safari/14.1.1";
		const result = malicious_excess_404(userIdOrIp, userAgent);
		expect(result).toBe("malicious_excess404:789,Safari/14.1.1");
	});
});
describe("malicious_cors", () => {
	it("should return the correct string", () => {
		const userIdOrIp = "user123";
		const userAgent = "Mozilla/5.0";
		const referer = "https://example.com";
		const result = malicious_cors(userIdOrIp, userAgent, referer);
		expect(result).toBe(
			"malicious_cors:user123,Mozilla/5.0,https://example.com",
		);
	});

	it("should handle numeric userIdOrIp", () => {
		const userIdOrIp = 456;
		const userAgent = "Chrome/91.0.4472.124";
		const referer = "https://example.com";
		const result = malicious_cors(userIdOrIp, userAgent, referer);
		expect(result).toBe(
			"malicious_cors:456,Chrome/91.0.4472.124,https://example.com",
		);
	});

	it("should handle bigint userIdOrIp", () => {
		const userIdOrIp = BigInt(789);
		const userAgent = "Safari/14.1.1";
		const referer = "https://example.com";
		const result = malicious_cors(userIdOrIp, userAgent, referer);
		expect(result).toBe("malicious_cors:789,Safari/14.1.1,https://example.com");
	});
});
describe("malicious_direct_reference", () => {
	it("should return the correct string with string userIdOrIp and string userAgent", () => {
		const result = malicious_direct_reference("user123", "Mozilla/5.0");
		expect(result).toBe("malicious_direct:user123,Mozilla/5.0");
	});

	it("should return the correct string with number userIdOrIp and string userAgent", () => {
		const result = malicious_direct_reference(123, "Chrome/91.0.4472.124");
		expect(result).toBe("malicious_direct:123,Chrome/91.0.4472.124");
	});

	it("should return the correct string with bigint userIdOrIp and string userAgent", () => {
		const result = malicious_direct_reference(BigInt(456), "Safari/14.1.1");
		expect(result).toBe("malicious_direct:456,Safari/14.1.1");
	});
});
