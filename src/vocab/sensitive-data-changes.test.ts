import { describe, expect, it } from "bun:test";
import {
	sensitive_create,
	sensitive_delete,
	sensitive_read,
	sensitive_update,
} from "./sensitive-data-changes.js";

describe("sensitive_create", () => {
	it("should return the correct string", () => {
		const result = sensitive_create("user123", "file1");
		expect(result).toBe("sensitive_create:user123, file1");
	});
});
describe("sensitive_read", () => {
	it("should return the correct sensitive read string", () => {
		const userId = "123";
		const fileOrObject = "example.txt";
		const result = sensitive_read(userId, fileOrObject);
		const expected = "sensitive_read:123, example.txt";

		expect(result).toBe(expected);
	});

	it("should handle numeric userId and fileOrObject", () => {
		const userId = 456;
		const fileOrObject = "data.json";
		const result = sensitive_read(userId, fileOrObject);
		const expected = "sensitive_read:456, data.json";

		expect(result).toBe(expected);
	});

	it("should handle bigint userId", () => {
		const userId = BigInt(789);
		const fileOrObject = "image.jpg";
		const result = sensitive_read(userId, fileOrObject);
		const expected = "sensitive_read:789, image.jpg";

		expect(result).toBe(expected);
	});
});
describe("sensitive_update", () => {
	it("should return the correct string", () => {
		const userId = "123";
		const fileOrObject = "file.txt";
		const result = sensitive_update(userId, fileOrObject);
		expect(result).toBe("sensitive_update:123, file.txt");
	});

	it("should handle numeric userId", () => {
		const userId = 456;
		const fileOrObject = "object";
		const result = sensitive_update(userId, fileOrObject);
		expect(result).toBe("sensitive_update:456, object");
	});

	it("should handle bigint userId", () => {
		const userId = BigInt(789);
		const fileOrObject = "file.txt";
		const result = sensitive_update(userId, fileOrObject);
		expect(result).toBe("sensitive_update:789, file.txt");
	});
});
describe("sensitive_delete", () => {
	it("should return the correct string", () => {
		const userId = "123";
		const fileOrObject = "file.txt";
		const result = sensitive_delete(userId, fileOrObject);
		expect(result).toBe("sensitive_delete:123, file.txt");
	});

	it("should handle numeric userId", () => {
		const userId = 456;
		const fileOrObject = "object";
		const result = sensitive_delete(userId, fileOrObject);
		expect(result).toBe("sensitive_delete:456, object");
	});

	it("should handle bigint userId", () => {
		const userId = BigInt(789);
		const fileOrObject = "file.txt";
		const result = sensitive_delete(userId, fileOrObject);
		expect(result).toBe("sensitive_delete:789, file.txt");
	});
});
