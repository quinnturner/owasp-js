import type { Join } from "type-fest";

/**
 * All login events should be recorded including success.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.info({ event: authn_login_success(userId) }, `User ${userId} login successfully`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authn_login_success:joebob1",
 * 	"level": "INFO",
 * 	"description": "User joebob1 login successfully",
 * 	"requestId": "4c682970-ef75-4605-93f2-ab7cf5316d83"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_login_success](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_login_successuserid)
 */
export function authn_login_success<U extends string | number | bigint>(
	userId: U,
) {
	return `authn_login_success:${userId}` as const;
}

/**
 * The user successfully logged in after previously failing.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const retries = 2;
 * logger.info({ event: authn_login_successafterfail(userId, retries) }, `User ${userId} login successfully`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authn_login_successafterfail:joebob1,2",
 * 	"level": "INFO",
 * 	"description": "User joebob1 login successfully.",
 * 	"requestId": "b2b0fc16-cfc1-42cc-a1a7-102a11e7fa6e"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_login_successafterfail](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_login_successafterfailuseridretries)
 */
export function authn_login_successafterfail<
	U extends string,
	R extends string | number | bigint,
>(userId: U, retries: R) {
	return `authn_login_successafterfail:${userId},${retries}` as const;
}

/**
 * All login events should be recorded including failure.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const retries = 2;
 * logger.warn({ event: authn_login_fail(userId) }, `User ${userId} login failed`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authn_login_fail:joebob1",
 * 	"level": "WARN",
 * 	"description": "User joebob1 login failed",
 * 	"requestId": "b7c29e30-199e-4234-a8f1-fff0c12f1624"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_login_fail](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_login_failuserid)
 */
export function authn_login_fail<U extends string | number | bigint>(
	userId: U,
) {
	return `authn_login_fail:${userId}` as const;
}

/**
 * All login events should be recorded including failure.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const maxLimit = 3;
 * logger.warn({ event: authn_login_fail_max(userId, maxLimit) }, `User ${userId} reached the login fail limit of ${maxLimit}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authn_login_fail_max:joebob1,3",
 * 	"level": "WARN",
 * 	"description": "User joebob1 reached the login fail limit of 3",
 * 	"requestId": "b7c29e30-199e-4234-a8f1-fff0c12f1624"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_login_fail_max](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_login_fail_maxuseridmaxlimitint)
 */
export function authn_login_fail_max<U extends string | number | bigint>(
	userId: U,
): `authn_login_fail_max:${U}`;
export function authn_login_fail_max<
	U extends string | number | bigint,
	L extends number,
>(userId: U, maxLimit: L): `authn_login_fail_max:${U},${L}`;
export function authn_login_fail_max<
	U extends string | number | bigint,
	L extends number,
>(userId: U, maxLimit?: L) {
	return maxLimit === undefined
		? (`authn_login_fail_max:${userId}` as const)
		: (`authn_login_fail_max:${userId},${maxLimit}` as const);
}

/**
 * When the feature exists to lock an account after _x_ retries or other condition, the lock should be logged with relevant data.
 *
 * **Level:** `WARN`
 *
 * **Reasons:**
 * ```txt
 * 	 maxretries: The maximum number of retries was reached
 * 	 suspicious: Suspicious activity was observed on the account
 * 	 customer: The customer requested their account be locked
 * 	 other: Other
 * ```
 * @example
 * ```ts
 * const userId = "joebob1";
 * const reason = 'maxretries';
 * logger.warn({ event: authn_login_lock(userId, reason) }, `User ${userId} login locked because ${reason} exceeded`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authn_login_lock:joebob1,maxretries",
 * 	"level": "WARN",
 * 	"description": "User joebob1 login locked because maxretries exceeded",
 * 	"requestId": "e6a7c70a-7972-49c9-a056-1af31cecf334"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_login_lock](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_login_lockuseridreason)
 */
export function authn_login_lock<
	U extends string | number | bigint,
	R extends string | number | bigint,
>(userId: U, reason: R): `authn_login_lock:${U},${R}`;
export function authn_login_lock<U extends string>(
	userId: U,
): `authn_login_lock:${U}`;
export function authn_login_lock<
	U extends string,
	R extends string | number | bigint,
>(userId: U, reason?: R) {
	return reason === undefined
		? (`authn_login_lock:${userId}` as const)
		: (`authn_login_lock:${userId},${reason}` as const);
}

/**
 * Every password change should be logged, including the userid that it was for.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.info({ event: authn_password_change(userId) }, `User ${userId} has successfully changed their password`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authn_password_change:joebob1",
 * 	"level": "INFO",
 * 	"description": "User joebob1 has successfully changed their password",
 * 	"requestId": "72b29ffe-4b2a-4eef-9b4b-e9dc36483d28"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_password_change](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_password_changeuserid)
 */
export function authn_password_change<U extends string | number | bigint>(
	userId: U,
) {
	return `authn_password_change:${userId}` as const;
}

/**
 * An attempt to change a password that failed. May also trigger other events such as {@link authn_login_lock}
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.info({ event: authn_password_change_fail(userId) }, `User ${userId} failed to changing their password`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authn_password_change:joebob1",
 * 	"level": "INFO",
 * 	"description": "User joebob1 failed to changing their password",
 * 	"requestId": "e5c80286-e7b4-4add-ab67-24ce28c7f187"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_password_change_fail](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_password_change_failuserid)
 */
export function authn_password_change_fail<U extends string | number | bigint>(
	userId: U,
) {
	return `authn_password_change_fail:${userId}` as const;
}

/**
 * When a user is logged in from one city and suddenly appears in another, too far away to have traveled in a reasonable timeframe, this often indicates a potential account takeover.
 *
 * **Level:** `CRITICAL`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const location1 = "US-OR";
 * const location2 = "CN-SH";
 * logger.info({ event: authn_impossible_travel(userId, location1, location2) }, `User ${userId} has accessed the application in two distant cities at the same time`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authn_impossible_travel:joebob1,US-OR,CN-SH",
 * 	"level": "CRITICAL",
 * 	"description": "User joebob1 has accessed the application in two distant cities at the same time",
 * 	"requestId": "c1a514a9-70f1-4496-8c69-ebf9337783f6"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_impossible_travel](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_impossible_traveluseridregion1region2)
 */
export function authn_impossible_travel<
	U extends string | number | bigint,
	L1 extends string,
	L2 extends string,
>(userId: U, location1: L1, location2: L2) {
	return `authn_impossible_travel:${userId},${location1},${location2}` as const;
}

/**
 * When a token is created for service access it should be recorded.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const entitlements = ["create", "read", "update"] as const;
 * logger.info({ event: authn_token_created(userId, ...entitlements) }, `A token has been created for ${userId} with ${entitlements.join(",")}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "aws.foobar.com",
 * 	"event": "authn_token_created:app.foobarapi.prod,create,read,update",
 * 	"level": "INFO",
 * 	"description": "A token has been created for app.foobarapi.prod with create,read,update",
 * 	"requestId": "e6002b7c-87f4-45c9-abf6-f1e0f94523d5"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_token_created](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_token_createduserid-entitlements)
 */
export function authn_token_created<
	U extends string | number | bigint,
	E extends readonly string[] | readonly number[] | readonly bigint[],
>(userId: U, ...entitlements: E) {
	return `authn_token_created:${userId},${
		entitlements.join(",") as Join<E, ",">
	}` as const;
}

/**
 * A token has been revoked for the given account.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const tokenId = "xyz-abc-123-gfk";
 * logger.info({ event: authn_token_revoked(userId, tokenId) }, `Token ID: ${tokenId} was revoked for user ${userId}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "aws.foobar.com",
 * 	"event": "authn_token_revoked:app.foobarapi.prod,xyz-abc-123-gfk",
 * 	"level": "INFO",
 * 	"description": "Token ID: xyz-abc-123-gfk was revoked for user app.foobarapi.prod",
 * 	"requestId": "caa98ad0-4b9c-4b20-8633-6be104b1933b"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_token_revoked](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_token_revokeduseridtokenid)
 */
export function authn_token_revoked<U extends string | number | bigint>(
	userId: U,
): `authn_token_revoked:${U}`;
export function authn_token_revoked<
	U extends string | number | bigint,
	T extends string | number | bigint,
>(userId: U, tokenId: T): `authn_token_revoked:${U},${T}`;
export function authn_token_revoked<
	U extends string | number | bigint,
	T extends string | number | bigint,
>(userId: U, tokenId?: T) {
	return tokenId === undefined
		? (`authn_token_revoked:${userId}` as const)
		: (`authn_token_revoked:${userId},${tokenId}` as const);
}

/**
 * A previously revoked token was attempted to be reused.
 *
 * **Level:** `CRITICAL`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const tokenId = "xyz-abc-123-gfk";
 * logger.critical({ event: authn_token_reuse(userId, tokenId) }, `User ${userId} attempted to use token ID: ${tokenId} which was previously revoked`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "aws.foobar.com",
 * 	"event": "authn_token_reuse:app.foobarapi.prod,xyz-abc-123-gfk",
 * 	"level": "CRITICAL",
 * 	"description": "User app.foobarapi.prod attempted to use token ID: xyz-abc-123-gfk which was previously revoked",
 * 	"requestId": "1cfdc054-b87a-4533-9c9a-d329bca0da44"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_token_reuse](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_token_reuseuseridtokenid)
 */
export function authn_token_reuse<U extends string | number | bigint>(
	userId: U,
): `authn_token_reuse:${U}`;
export function authn_token_reuse<
	U extends string | number | bigint,
	T extends string | number | bigint,
>(userId: U, tokenId: T): `authn_token_reuse:${U},${T}`;
export function authn_token_reuse<
	U extends string | number | bigint,
	T extends string | number | bigint,
>(userId: U, tokenId?: T) {
	return tokenId === undefined
		? (`authn_token_reuse:${userId}` as const)
		: (`authn_token_reuse:${userId},${tokenId}` as const);
}

/**
 * A previously revoked token was attempted to be reused.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const appId = 'foobarapi';
 * logger.warn({ event: authn_token_delete(appId) }, `The token for ${appId} has been deleted`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authn_token_delete:foobarapi",
 * 	"level": "WARN",
 * 	"description": "The token for foobarapi has been deleted",
 * 	"requestId": "ecd6341b-bc7c-4301-9c75-f49427f59406"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authn_token_delete](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authn_token_deleteappid)
 */
export function authn_token_delete<A extends string | number | bigint>(
	appId: A,
) {
	return `authn_token_delete:${appId}` as const;
}
