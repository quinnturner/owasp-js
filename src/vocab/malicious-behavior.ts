/**
 * When a user makes numerous requests for files that don't exist it often is an indicator of attempts to "force-browse" for files that could exist and is often behavior indicating malicious intent.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1"; // or req.ip if you don't have a userId
 * const ua = req.get("User-Agent");
 * logger.warn({ event: malicious_excess_404(userId, ua) }, `A user at ${ip} has generated a large number of 404 requests.`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "malicious_excess404:123.456.789.101,M@l1c10us-Hax0rB0t0-v1",
 * 	"level": "WARN",
 * 	"description": "A user at 123.456.789.101 has generated a large number of 404 requests.",
 * 	"requestId": "e22569d2-5fb6-4453-ae7e-c496a2584d94"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - malicious_excess_404](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#malicious_excess_404useridipuseragent)
 */
export function malicious_excess_404<
	U extends string | number | bigint,
	UA extends string,
>(userIdOrIp: U, userAgent: UA) {
	return `malicious_excess404:${userIdOrIp},${userAgent}` as const;
}

/**
 * When a user submits data to a backend handler that was not expected it can indicate probing for input validation errors.
 * If your backend service receives data it does not handle or have an input for this is an indication of likely malicious abuse.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1"; // or req.ip if you don't have a userId
 * const inputName = "creditcardnum";
 * const ua = req.get("User-Agent");
 * logger.warn({ event: malicious_extraneous(userId, ua) }, `A user at ${ip} has generated a large number of 404 requests.`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "malicious_extraneous:dr@evil.com,creditcardnum,Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0",
 * 	"level": "WARN",
 * 	"description": "User dr@evil.com included field creditcardnum in the request which is not handled by this service.",
 * 	"requestId": "3f63d196-7699-4f14-ab44-7597bd13dd5d"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - malicious_extraneous](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#malicious_extraneoususeridipinputnameuseragent)
 */
export function malicious_extraneous<
	U extends string | number | bigint,
	I extends string,
	UA extends string,
>(userIdOrIp: U, inputName: I, userAgent: UA) {
	return `malicious_extraneous:${userIdOrIp},${inputName},${userAgent}` as const;
}

/**
 * When obvious attack tools are identified either by signature or by user agent they should be logged.
 *
 * **Level:** `CRITICAL`
 *
 * @example
 * ```ts
 * const userId = "joebob1"; // or req.ip if you don't have a userId
 * const toolName = "nikto";
 * const ua = req.get("User-Agent");
 * logger.critical({ event: malicious_attack_tool(userId, toolName, ua) }, `Attack traffic indicating use of ${toolName} coming from ${ip}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "malicious_attack_tool:123.456.789.101,nikto,Mozilla/5.00 (Nikto/2.1.6) (Evasions:None) (Test:Port Check)",
 * 	"level": "WARN",
 * 	"description": "Attack traffic indicating use of Nikto coming from 123.456.789.101",
 * 	"requestId": "e07d0d81-0ac4-4ef0-bcb4-100ff2c47486"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - malicious_attack_tool](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#malicious_attack_tooluseridiptoolnameuseragent)
 */
export function malicious_attack_tool<
	U extends string | number | bigint,
	T extends string,
	UA extends string,
>(userIdOrIp: U, toolName: T, userAgent: UA) {
	return `malicious_attack_tool:${userIdOrIp},${toolName},${userAgent}` as const;
}

/**
 * When attempts are made from unauthorized origins they should of course be blocked, but also logged whenever possible.
 * Even if we block an illegal cross-origin request the fact that the request is being made could be an indication of attack.
 *
 * > NOTE: Did you know that the word "referer" is misspelled in the original HTTP specification?
 * > The correct spelling should be "referrer" but the original typo persists to this day and is used here intentionally.
 *
 * **Level:** `CRITICAL`
 *
 * @example
 * ```ts
 * const userId = "joebob1"; // or req.ip if you don't have a userId
 * const ua = req.get("User-Agent");
 * const referer = req.get("Referer");
 * logger.warn({ event: malicious_cors(userId, ua, referer) }, `An illegal cross-origin request from ${ip} was referred from ${referer}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "malicious_cors:127.0.0.1,Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0,attack.evil.com",
 * 	"level": "WARN",
 * 	"description": "An illegal cross-origin request from 127.0.0.1 was referred from attack.evil.com",
 * 	"requestId": "303b3203-c108-4df1-a136-99c244b6d211"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - malicious_cors](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#malicious_corsuseridipuseragentreferer)
 */
export function malicious_cors<
	U extends string | number | bigint,
	UA extends string,
	R extends string,
>(userIdOrIp: U, userAgent: UA, referer: R) {
	return `malicious_cors:${userIdOrIp},${userAgent},${referer}` as const;
}

/**
 * A common attack against authentication and authorization is to directly access an object without credentials or appropriate access authority.
 * Failing to prevent this flaw used to be one of the OWASP Top Ten called **Insecure Direct Object Reference**.
 * Assuming you've correctly prevented this attack, logging the attempt is valuable to identify malicious users.
 *
 * **Level:** `CRITICAL`
 *
 * @example
 * ```ts
 * const userId = "joebob1"; // or req.ip if you don't have a userId
 * const ua = req.get("User-Agent");
 * logger.warn({ event: malicious_direct_reference(userId, ua) }, `User ${userId} attempted to access an object to which they are not authorized`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "malicious_direct:joebob1, Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0",
 * 	"level": "WARN",
 * 	"description": "User joebob1 attempted to access an object to which they are not authorized",
 * 	"requestId": "e21196dc-ab3e-4911-b720-b796a374e5d6"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - malicious_direct_reference](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#malicious_direct_referenceuseridip-useragent)
 */
export function malicious_direct_reference<
	U extends string | number | bigint,
	UA extends string,
>(userIdOrIp: U, userAgent: UA) {
	return `malicious_direct:${userIdOrIp},${userAgent}` as const;
}
