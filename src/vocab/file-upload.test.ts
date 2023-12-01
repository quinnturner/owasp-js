import { describe, expect, it } from "bun:test";
import {
	upload_complete,
	upload_delete,
	upload_stored,
	upload_validation,
} from "./file-upload.js";

describe("upload_delete", () => {
	it("should return the correct string when userId and fileId are strings", () => {
		const result = upload_delete("user123", "file456");
		expect(result).toBe("upload_delete:user123,file456");
	});

	it("should return the correct string when userId and fileId are numbers", () => {
		const result = upload_delete(123, 456);
		expect(result).toBe("upload_delete:123,456");
	});

	it("should return the correct string when userId and fileId are bigints", () => {
		const result = upload_delete(BigInt(123), BigInt(456));
		expect(result).toBe("upload_delete:123,456");
	});
});

describe("upload_delete", () => {
	it("should return the correct string when userId and fileId are strings", () => {
		const result = upload_delete("user123", "file456");
		expect(result).toBe("upload_delete:user123,file456");
	});

	it("should return the correct string when userId and fileId are numbers", () => {
		const result = upload_delete(123, 456);
		expect(result).toBe("upload_delete:123,456");
	});

	it("should return the correct string when userId and fileId are bigints", () => {
		const result = upload_delete(BigInt(123), BigInt(456));
		expect(result).toBe("upload_delete:123,456");
	});
});

describe("upload_validation", () => {
	it("should return the correct string", () => {
		const result = upload_validation("file123", "vendor456", "PASSED");
		expect(result).toBe("upload_validation:file123,vendor456,PASSED");
	});
});

describe("upload_delete", () => {
	it("should return the correct string when userId and fileId are strings", () => {
		const result = upload_delete("user123", "file456");
		expect(result).toBe("upload_delete:user123,file456");
	});

	it("should return the correct string when userId and fileId are numbers", () => {
		const result = upload_delete(123, 456);
		expect(result).toBe("upload_delete:123,456");
	});

	it("should return the correct string when userId and fileId are bigints", () => {
		const result = upload_delete(BigInt(123), BigInt(456));
		expect(result).toBe("upload_delete:123,456");
	});
});

describe("upload_stored", () => {
	it("should return the correct string", () => {
		const result = upload_stored("file123", "destination456");
		expect(result).toBe("upload_stored:file123,destination456");
	});
});

describe("upload_delete", () => {
	it("should return the correct string when userId and fileId are strings", () => {
		const result = upload_delete("user123", "file456");
		expect(result).toBe("upload_delete:user123,file456");
	});

	it("should return the correct string when userId and fileId are numbers", () => {
		const result = upload_delete(123, 456);
		expect(result).toBe("upload_delete:123,456");
	});

	it("should return the correct string when userId and fileId are bigints", () => {
		const result = upload_delete(BigInt(123), BigInt(456));
		expect(result).toBe("upload_delete:123,456");
	});
});

describe("upload_validation", () => {
	it("should return the correct string", () => {
		const result = upload_validation("file123", "vendor456", "PASSED");
		expect(result).toBe("upload_validation:file123,vendor456,PASSED");
	});
});

describe("upload_stored", () => {
	it("should return the correct string", () => {
		const result = upload_stored("file123", "destination456");
		expect(result).toBe("upload_stored:file123,destination456");
	});
});

describe("upload_complete", () => {
	it("should return the correct string when userId, filename, and type are provided", () => {
		const result = upload_complete("user123", "file456.jpeg", "image/jpeg");
		expect(result).toBe("upload_complete:user123,file456.jpeg,image/jpeg");
	});

	it("should return the correct string when userId and filename are provided, but type is undefined", () => {
		const result = upload_complete("user123", "file456");
		expect(result).toBe("upload_complete:user123,file456");
	});
});
