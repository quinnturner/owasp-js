/**
 * When a new authenticated session is created that session may be logged and activity monitored.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.info({ event: session_created(userId) }, `User ${userId} has started a new session`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "session_created:joebob1",
 * 	"level": "INFO",
 * 	"description": "User joebob1 has started a new session",
 * 	"requestId": "3852a457-6d69-4f8c-a98e-aeafe5f1fdd1"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - session_created](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#session_createduserid)
 */
export function session_created<U extends string | number | bigint>(userId: U) {
	return `session_created:${userId}` as const;
}

/**
 * When a user is warned of session to be expired/revoked and chooses to extend their session that activity should be logged.
 * Also, if the system in question contains highly confidential data then extending a session may require additional verification.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.info({ event: session_renewed(userId) }, `User ${userId} was warned of expiring session and extended`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "session_renewed:joebob1",
 * 	"level": "INFO",
 * 	"description": "User joebob1 was warned of expiring session and extended",
 * 	"requestId": "ec67b394-8391-4579-94fb-a36719ab5292"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - session_renewed](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#session_reneweduserid)
 */
export function session_renewed<U extends string | number | bigint>(userId: U) {
	return `session_renewed:${userId}` as const;
}

/**
 * When a session expires, especially in the case of an authenticated session or with sensitive data,
 * then that session expiry may be logged and clarifying data included.
 * The reason code may be any such as: logout, timeout, revoked, etc.
 * Sessions should never be deleted but rather expired in the case of revocation requirement.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const reason = "revoked";
 * logger.info({ event: session_expired(userId, reason) }, `User ${userId} session expired due to administrator ${reason}.`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "session_expired:joebob1,revoked",
 * 	"level": "INFO",
 * 	"description": "User joebob1 session expired due to administrator revocation.",
 * 	"requestId": "5c0f4762-1170-437f-b618-4406847a533b"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - session_expired](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#session_expireduseridreason)
 */
export function session_expired<
	U extends string | number | bigint,
	R extends string,
>(userId: U, reason: R) {
	return `session_expired:${userId},${reason}` as const;
}

/**
 * In the case a user attempts to access systems with an expired session, it may be helpful to log,
 * especially if combined with subsequent login failure.
 * This could identify a case where a malicious user is attempting a session hijack or directly accessing another person's machine/browser.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.warn({ event: session_use_after_expire(userId) }, `User ${userId} attempted access after session expired.`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "session_use_after_expire:joebob1",
 * 	"level": "WARN",
 * 	"description": "User joebob1 attempted access after session expired.",
 * 	"requestId": "..."
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - session_use_after_expire](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#session_use_after_expireuserid)
 */
export function session_use_after_expire<U extends string | number | bigint>(
	userId: U,
) {
	return `session_use_after_expire:${userId}` as const;
}
