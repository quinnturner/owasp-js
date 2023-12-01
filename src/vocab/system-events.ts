/**
 * When a system is first started it can be valuable to log the startup, even if the system is serverless or a container,
 * especially if possible to log the user that initiated the system.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.warn({ event: sys_startup(userId) }, `User ${userId} spawned a new instance`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "sys_startup:joebob1",
 * 	"level": "WARN",
 * 	"description": "User joebob1 spawned a new instance",
 * 	"requestId": "27939458-b680-4132-925f-4dc38678b4b2"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sys_startup](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sys_shutdownuserid)
 */
export function sys_startup<U extends string | number | bigint>(userId: U) {
	return `sys_startup:${userId}` as const;
}

/**
 * When a system is shut down it can be valuable to log the event, even if the system is serverless or a container,
 * especially if possible to log the user that initiated the system.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.warn({ event: sys_shutdown(userId) }, `User ${userId} stopped this instance`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "sys_shutdown:joebob1",
 * 	"level": "WARN",
 * 	"description": "User joebob1 stopped this instance",
 * 	"requestId": "cbe8f317-085c-46a6-9551-057b7c275b63"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sys_shutdown](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sys_shutdownuserid)
 */
export function sys_shutdown<U extends string | number | bigint>(userId: U) {
	return `sys_shutdown:${userId}` as const;
}

/**
 * When a system is restarted it can be valuable to log the event, even if the system is serverless or a container,
 * especially if possible to log the user that initiated the system.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * logger.warn({ event: sys_restarted(userId) }, `User ${userId} initiated a restart`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "sys_restart:joebob1",
 * 	"level": "WARN",
 * 	"description": "User joebob1 initiated a restart",
 * 	"requestId": "1e7b4e37-7acd-4d08-89e9-8a9b07de6a90"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sys_restarted](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sys_restartuserid)
 */
export function sys_restarted<U extends string | number | bigint>(userId: U) {
	return `sys_restart:${userId}` as const;
}

/**
 * If possible to catch an unstable condition resulting in the crash of a system, logging that event could be helpful,
 * especially if the event is triggered by an attack.
 *
 * **Level:** `WARN`
 *
 * @param reason The reason for the system crash.
 * @example
 * ```ts
 * const reason = "outofmemory";
 * logger.warn({ event: sys_crash(reason) }, `The system crashed due to ${reason} error.`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "sys_crash:outofmemory",
 * 	"level": "WARN",
 * 	"description": "The system crashed due to Out of Memory error.",
 * 	"requestId": "43549e84-4d5a-402c-a5cd-753a28795f82"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sys_crash](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sys_crashreason)
 */
export function sys_crash<R extends string>(reason: R) {
	return `sys_crash:${reason}` as const;
}

/**
 * If your systems contain agents responsible for file integrity, resources, logging, virus, etc. it is especially valuable to know if they are halted and by whom.
 *
 * **Level:** `WARN`
 *
 * @param userId The user who disabled the system monitor.
 * @param agent The name of the agent that was disabled.
 * @example
 * ```ts
 * const userId = "joebob1";
 * const agent = "crowdstrike";
 * logger.warn({ event: sys_monitor_disabled(userId, agent) }, `User ${userId} has disabled ${agent}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "sys_monitor_disabled:joebob1,crowdstrike",
 * 	"level": "WARN",
 * 	"description": "User joebob1 has disabled CrowdStrike",
 * 	"requestId": "897365e2-7cd2-475d-a94b-082bf11f368e"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sys_monitor_disabled](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sys_monitor_disableduseridmonitor)
 */
export function sys_monitor_disabled<
	U extends string | number | bigint,
	A extends string,
>(userId: U, agent: A) {
	return `sys_monitor_disabled:${userId},${agent}` as const;
}

/**
 * If your systems contain agents responsible for file integrity, resources, logging, virus, etc.
 * it is especially valuable to know if they are started again after being stopped, and by whom.
 *
 * **Level:** `WARN`
 *
 * @param userId The user who enabled the system monitor.
 * @param agent The name of the agent that was enabled.
 * @example
 * ```ts
 * const userId = "joebob1";
 * const agent = "crowdstrike";
 * logger.warn({ event: sys_monitor_enabled(userId, agent) }, `User ${userId} has enabled ${agent}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "sys_monitor_enabled:joebob1,crowdstrike",
 * 	"level": "WARN",
 * 	"description": "User joebob1 has enabled CrowdStrike",
 * 	"requestId": "897365e2-7cd2-475d-a94b-082bf11f368e"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sys_monitor_enabled](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sys_monitor_enableduseridmonitor)
 */
export function sys_monitor_enabled<
	U extends string | number | bigint,
	A extends string,
>(userId: U, agent: A) {
	return `sys_monitor_enabled:${userId},${agent}` as const;
}
