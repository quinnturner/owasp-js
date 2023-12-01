import { describe, expect, it } from "bun:test";
import {
	authn_impossible_travel,
	authn_login_fail,
	authn_login_fail_max,
	authn_login_lock,
	authn_login_success,
	authn_login_successafterfail,
	authn_password_change,
	authn_password_change_fail,
	authn_token_created,
	authn_token_delete,
	authn_token_reuse,
	authn_token_revoked,
} from "./authentication.js";

const userId = "user123";

describe("authn_token_revoked", () => {
	it("should return the correct string when tokenId is undefined", () => {
		const result = authn_token_revoked(userId);
		expect(result).toBe("authn_token_revoked:user123");
	});

	it("should return the correct string when tokenId is defined", () => {
		const tokenId = "token456";
		const result = authn_token_revoked(userId, tokenId);
		expect(result).toBe("authn_token_revoked:user123,token456");
	});
});

describe("authn_token_reuse", () => {
	it("should return the correct string when tokenId is undefined", () => {
		const result = authn_token_reuse(userId);
		expect(result).toBe("authn_token_reuse:user123");
	});
	it("should return the correct string when tokenId is defined", () => {
		const result = authn_token_reuse(userId, "token456");
		expect(result).toBe("authn_token_reuse:user123,token456");
	});
});

describe("authn_impossible_travel", () => {
	it("should return the correct string", () => {
		const result = authn_impossible_travel(userId, "location1", "location2");
		expect(result).toBe("authn_impossible_travel:user123,location1,location2");
	});
});

describe("authn_login_fail", () => {
	it("should return the correct string", () => {
		const result = authn_login_fail(userId);
		expect(result).toBe("authn_login_fail:user123");
	});
});

describe("authn_login_lock", () => {
	it("should return the correct string when reason is undefined", () => {
		const result = authn_login_lock(userId);
		expect(result).toBe("authn_login_lock:user123");
	});
	it("should return the correct string when reason is defined", () => {
		const result = authn_login_lock(userId, "reason");
		expect(result).toBe("authn_login_lock:user123,reason");
	});
});

describe("authn_login_fail_max", () => {
	it("should return the correct string when maxLimit is undefined", () => {
		const result = authn_login_fail_max(userId);
		expect(result).toBe("authn_login_fail_max:user123");
	});
	it("should return the correct string when maxLimit is defined", () => {
		const result = authn_login_fail_max(userId, 3);
		expect(result).toBe("authn_login_fail_max:user123,3");
	});
});

describe("authn_login_success", () => {
	it("should return the correct string", () => {
		const result = authn_login_success(userId);
		expect(result).toBe("authn_login_success:user123");
	});
});

describe("authn_login_successafterfail", () => {
	it("should return the correct string when provided a number as retry", () => {
		const result = authn_login_successafterfail(userId, 1);
		expect(result).toBe("authn_login_successafterfail:user123,1");
	});
	it("should return the correct string when provided a string as retry", () => {
		const result = authn_login_successafterfail(userId, "1");
		expect(result).toBe("authn_login_successafterfail:user123,1");
	});
	it("should return the correct string when provided a bigint as retry", () => {
		const result = authn_login_successafterfail(userId, BigInt(1));
		expect(result).toBe("authn_login_successafterfail:user123,1");
	});
});

describe("authn_password_change", () => {
	it("should return the correct string", () => {
		const result = authn_password_change(userId);
		expect(result).toBe("authn_password_change:user123");
	});
});

describe("authn_password_change_fail", () => {
	it("should return the correct string", () => {
		const result = authn_password_change_fail(userId);
		expect(result).toBe("authn_password_change_fail:user123");
	});
});

describe("authn_token_created", () => {
	it("should return the correct string and perfect type when not using spread", () => {
		const result = authn_token_created(userId, "create", "update");
		expect(result).toBe("authn_token_created:user123,create,update");
	});
	it("should return the correct string and `string,string` type when using non const spread", () => {
		const result = authn_token_created(userId, ...["create", "update"]);
		// Note, the type of `result` is `authn_token_created:user123,${string},${string}`
		expect(result).toBe("authn_token_created:user123,create,update");
	});
	it("should return the correct string and type when using const spread", () => {
		const result = authn_token_created(
			userId,
			...(["create", "update"] as const),
		);
		expect(result).toBe("authn_token_created:user123,create,update");
	});
});

describe("authn_token_delete", () => {
	it("should return the correct string when tokenId is undefined", () => {
		const result = authn_token_delete(userId);
		expect(result).toBe("authn_token_delete:user123");
	});
	it("should return the correct string when tokenId is defined", () => {
		const result = authn_token_delete("app-id");
		expect(result).toBe("authn_token_delete:app-id");
	});
});
