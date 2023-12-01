import type { Join } from "type-fest";

/**
 * When creating new users, logging the specifics of the user creation event is helpful,
 * especially if new users can be created with administration privileges.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const newUserId = "user1";
 * const role = "admin";
 * const attributes = ["create", "update", "delete"];
 * logger.warn({ event: user_created(userId, newUserId, role, attributes) }, `User ${userId} created ${newUserId} with ${role}:${attributes.join(",")} privilege attributes`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "user_created:joebob1,user1,admin:create,update,delete",
 * 	"level": "WARN",
 * 	"description": "User joebob1 created user1 with admin:create,update,delete privilege attributes",
 * 	"requestId": "58705027-fc55-49b3-b8df-ee4842ef105a"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - user_created](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#user_createduseridnewuseridattributesonetwothree)
 */
export function user_created<
	U extends string | number | bigint,
	N extends string | number | bigint,
	R extends string,
>(userId: U, newUserId: N, role: R): `user_created:${U},${N},${R}`;
export function user_created<
	U extends string | number | bigint,
	N extends string | number | bigint,
	R extends string,
	A extends readonly string[],
>(
	userId: U,
	newUserId: N,
	role: R,
	attributes: A,
): `user_created:${U},${N},${R}:${Join<A, ",">}`;
export function user_created<
	U extends string | number | bigint,
	N extends string | number | bigint,
	R extends string,
	A extends readonly string[],
>(userId: U, newUserId: N, role: R, attributes?: A) {
	if (attributes === undefined) {
		return `user_created:${userId},${newUserId},${role}` as const;
	}
	return `user_created:${userId},${newUserId},${role}:${
		attributes.join(",") as Join<A, ",">
	}` as const;
}

/**
 * When updating users, logging the specifics of the user update event is helpful,
 * especially if users can be updated with administration privileges.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const newUserId = "user1";
 * const role = "admin";
 * const attributes = ["create", "update", "delete"];
 * logger.warn({ event: user_updated(userId, newUserId, role, attributes) }, `User ${userId} updated ${newUserId} with ${role}:${attributes.join(",")} privilege attributes`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "user_updated:joebob1,user1,admin:create,update,delete",
 * 	"level": "WARN",
 * 	"description": "User joebob1 updated user1 with admin:create,update,delete privilege attributes",
 * 	"requestId": "55acb903-49a8-4d31-ae52-c7053897cba8"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - user_updated](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#user_updateduseridonuseridattributesonetwothree)
 */
export function user_updated<
	U extends string | number | bigint,
	N extends string | number | bigint,
	R extends string,
>(userId: U, newUserId: N, role: R): `user_updated:${U},${N},${R}`;
export function user_updated<
	U extends string | number | bigint,
	N extends string | number | bigint,
	R extends string,
	A extends readonly string[],
>(
	userId: U,
	newUserId: N,
	role: R,
	attributes: A,
): `user_updated:${U},${N},${R}:${Join<A, ",">}`;
export function user_updated<
	U extends string | number | bigint,
	N extends string | number | bigint,
	R extends string,
	A extends readonly string[],
>(userId: U, newUserId: N, role: R, attributes?: A) {
	if (attributes === undefined) {
		return `user_updated:${userId},${newUserId},${role}` as const;
	}
	return `user_updated:${userId},${newUserId},${role}:${
		attributes.join(",") as Join<A, ",">
	}` as const;
}

/**
 * It is always best to archive users rather than deleting, except where required.
 * When archiving users, logging the specifics of the user archive event is helpful.
 * A malicious user could use this feature to deny service to legitimate users.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const onUserId = "user1";
 * logger.warn({ event: user_archived(userId, onUserId) }, `User ${userId} archived ${onUserId}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "user_archived:joebob1,user1",
 * 	"level": "WARN",
 * 	"description": "User joebob1 archived user1",
 * 	"requestId": "e5ce13d6-bbf7-4479-be87-b33012a84640"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - user_archived](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#user_archiveduseridonuserid)
 */
export function user_archived<
	U extends string | number | bigint,
	N extends string | number | bigint,
>(userId: U, archivedUserId: N) {
	return `user_archived:${userId},${archivedUserId}` as const;
}

/**
 * It is always best to archive users rather than deleting, except where required.
 * When deleting users, logging the specifics of the user delete event is helpful.
 * A malicious user could use this feature to deny service to legitimate users.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const onUserId = "user1";
 * logger.warn({ event: user_deleted(userId, onUserId) }, `User ${userId} has deleted ${deletedUserId}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "user_deleted:joebob1,user1",
 * 	"level": "WARN",
 * 	"description": "User joebob1 has deleted user1",
 * 	"requestId": "5868ae61-e94e-4419-b231-0d81479e2abb"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - user_deleted](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#user_deleteduseridonuserid)
 */
export function user_deleted<
	U extends string | number | bigint,
	N extends string | number | bigint,
>(userId: U, deletedUserId: N) {
	return `user_deleted:${userId},${deletedUserId}` as const;
}
