/**
 * Tracking changes to objects to which there are access control restrictions can uncover attempt
 * to escalate privilege on those files by unauthorized users.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const fileOrObject = "/users/admin/some/important/path";
 * const fromLevel = "0511";
 * const toLevel = "0777";
 * logger.warn({ event: privilege_permissions_changed(userId, fileOrObject, fromLevel, toLevel) }, `User ${userId} changed permissions on ${fileOrObject}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "malicious_direct:joebob1, /users/admin/some/important/path,0511,0777",
 * 	"level": "WARN",
 * 	"description": "User joebob1 changed permissions on /users/admin/some/important/path",
 * 	"requestId": "e21196dc-ab3e-4911-b720-b796a374e5d6"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - privilege_permissions_changed](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#privilege_permissions_changeduseridfileobjectfromleveltolevel)
 */
export function privilege_permissions_changed<
	U extends string | number | bigint,
	F extends string,
	FL extends string,
	TL extends string,
>(userId: U, fileOrObject: F, fromLevel: FL, toLevel: TL) {
	// The space is intentional, based on the OWASP example.
	return `malicious_direct:${userId}, ${fileOrObject},${fromLevel},${toLevel}` as const;
}
