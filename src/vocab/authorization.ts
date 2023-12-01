/**
 * An attempt was made to access a resource which was unauthorized.
 *
 * **Level:** `CRITICAL`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const resource = "resource"
 * logger.critical({ event: authz_fail(userId, resource) }, `User ${userId} attempted to access a resource without entitlement`);
 * ```
 * @example
 * ```json
 * {
 *  "datetime": "2019-01-01 00:00:00,000",
 *  "appid": "foobar.netportal_auth",
 *  "event": "authz_fail:joebob1,resource",
 *  "level": "CRITICAL",
 *  "description": "User joebob1 attempted to access a resource without entitlement",
 * 	"requestId": "00b13b12-51ab-49bc-94be-34c450804850"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authz_fail](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authz_failuseridresource)
 */
export function authz_fail<
	U extends string | number | bigint,
	R extends string | number | bigint,
>(userId: U, resource: R) {
	return `authz_fail:${userId},${resource}` as const;
}

/**
 * The user or entity entitlements was changed.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const from = "user";
 * const to = "admin";
 * logger.warn({ event: authz_change(userId, from, to) }, `User ${userId} access was changed from ${from} to ${to}`);
 * ```
 * @example
 * ```json
 * {
 *  "datetime": "2019-01-01 00:00:00,000",
 *  "appid": "foobar.netportal_auth",
 *  "event": "authz_change:joebob1,user,admin",
 *  "level": "WARN",
 *  "description": "User joebob1 access was changed from user to admin",
 * 	"requestId": "5e952d3b-97b6-4c20-a241-b3aa9a591647"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authz_change](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authz_changeuseridfromto)
 */
export function authz_change<
	U extends string | number | bigint,
	F extends string | number | bigint,
	T extends string | number | bigint,
>(userId: U, from: F, to: T) {
	return `authz_change:${userId},${from},${to}` as const;
}

/**
 * All activity by privileged users such as admin should be recorded.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const adminUserId = "joebob1";
 * const event = "user_privilege_change";
 * const userId = "foobarapi";
 * const from = "user";
 * const to = "admin";
 * logger.warn({ event: authz_admin(adminUserId, event) }, `Administrator ${adminUserId} has updated privileges of user ${userId} from ${from} to ${to}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "authz_admin:joebob1,user_privilege_change",
 * 	"level": "WARN",
 * 	"description": "Administrator joebob1 has updated privileges of user foobarapi from user to admin",
 * 	"requestId": "e02ffa1d-99b6-4616-b54e-5f51ed208331"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - authz_admin](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#authz_changeuseridfromto)
 */
export function authz_admin<
	U extends string | number | bigint,
	E extends string,
>(userId: U, event: E) {
	return `authz_admin:${userId},${event}` as const;
}
