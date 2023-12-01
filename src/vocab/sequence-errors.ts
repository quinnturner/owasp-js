/**
 * When a user reaches a part of the application out of sequence it may indicate intentional abuse of the business logic and should be tracked.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.warn({ event: sequence_fail(userId) }, `User ${userId} has reached a part of the application out of the normal application flow.`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "sequence_fail:joebob1",
 * 	"level": "WARN",
 * 	"description": "User joebob1 has reached a part of the application out of the normal application flow.",
 * 	"requestId": "b6de2047-08f0-4041-aab1-c693d337d63b"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sequence_fail](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sequence_failuserid)
 */
export function sequence_fail<U extends string | number | bigint>(userId: U) {
	return `sequence_fail:${userId}` as const;
}
