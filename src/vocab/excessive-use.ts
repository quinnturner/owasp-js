/**
 * Expected service limit ceilings should be established and alerted when exceeded, even if simply for managing costs and scaling.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const user = "joebob1";
 * const max = 100000;
 * logger.warn({ event: excess_rate_limit_exceeded(user, max) }, `User ${user} has exceeded max:${max} requests`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "excess_rate_limit_exceeded:app.foobarapi.prod,100000",
 * 	"level": "WARN",
 * 	"description": "User app.foobarapi.prod has exceeded max:100000 requests",
 * 	"requestId": "e997c333-fd0a-4880-b6d0-27e871285e50"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - excess_rate_limit_exceeded](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#excess_rate_limit_exceededuseridmax)
 */
export function excess_rate_limit_exceeded<
	U extends string | number | bigint,
	M extends string | number | bigint,
>(userId: U, max: M) {
	return `excess_rate_limit_exceeded:${userId},${max}` as const;
}
