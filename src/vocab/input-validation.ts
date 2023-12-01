/**
 * When input validation fails on the server-side it must either be because
 * a) sufficient validation was not provided on the client, or
 * b) client-side validation was bypassed.
 * In either case it's an opportunity for attack and should be mitigated quickly.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const field = 'date_of_birth';
 * const userId = "joebob1";
 * logger.warn({ event: input_validation_fail(field, userId) }, `User ${userId} submitted data that failed validation.`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "input_validation_fail:date_of_birth,joebob1",
 * 	"level": "WARN",
 * 	"description": "User joebob1 submitted data that failed validation.",
 * 	"requestId": "e22569d2-5fb6-4453-ae7e-c496a2584d94"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - input_validation_fail](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#input-validation-input)
 */
export function input_validation_fail<
	F extends string,
	U extends string | number | bigint,
>(field: F, userId: U) {
	return `input_validation_fail:${field},${userId}` as const;
}
