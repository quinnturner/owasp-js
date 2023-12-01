/**
 * When a new piece of data is created and marked as sensitive or placed into a directory/table/repository where sensitive data is stored,
 * that creation should be logged and reviewed periodically.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const fileOrObject = "/users/admin/some/important/path";
 * logger.warn({ event: sensitive_create(userId, fileOrObject) }, `User ${userId} created a new file in ${fileOrObject}`);
 * ```
 * @example
 * ```json
 * {
 *  "datetime": "2019-01-01 00:00:00,000",
 *  "appid": "foobar.netportal_auth",
 *  "event": "sensitive_create:joebob1, /users/admin/some/important/path",
 *  "level": "WARN",
 *  "description": "User joebob1 created a new file in /users/admin/some/important/path",
 * 	"requestId": "cd1f3327-48ea-4614-bce0-260d14e30e93"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sensitive_create](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sensitive_createuseridfileobject)
 */
export function sensitive_create<
	U extends string | number | bigint,
	F extends string,
>(userId: U, fileOrObject: F) {
	// The space is intentional, based on the OWASP example.
	return `sensitive_create:${userId}, ${fileOrObject}` as const;
}

/**
 * All data marked as sensitive or placed into a directory/table/repository where sensitive data
 * is stored should be have access logged and reviewed periodically.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const fileOrObject = "/users/admin/some/important/path";
 * logger.info({ event: sensitive_read(userId, fileOrObject) }, `User ${userId} read file ${fileOrObject}`);
 * ```
 * @example
 * ```json
 * {
 *  "datetime": "2019-01-01 00:00:00,000",
 *  "appid": "foobar.netportal_auth",
 *  "event": "sensitive_read:joebob1, /users/admin/some/important/path",
 *  "level": "INFO",
 *  "description": "User joebob1 read file /users/admin/some/important/path",
 * 	"requestId": "df064296-507f-46e3-8384-bb14966cd2bc"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sensitive_read](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sensitive_readuseridfileobject)
 */
export function sensitive_read<
	U extends string | number | bigint,
	F extends string,
>(userId: U, fileOrObject: F) {
	// The space is intentional, based on the OWASP example.
	return `sensitive_read:${userId}, ${fileOrObject}` as const;
}

/**
/**
 * All data marked as sensitive or placed into a directory/table/repository where sensitive data is stored
 * should be have updates to the data logged and reviewed periodically.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const fileOrObject = "/users/admin/some/important/path";
 * logger.warn({ event: sensitive_update(userId, fileOrObject) }, `User ${userId} modified file ${fileOrObject}`);
 * ```
 * @example
 * ```json
 * {
 *  "datetime": "2019-01-01 00:00:00,000",
 *  "appid": "foobar.netportal_auth",
 *  "event": "sensitive_update:joebob1, /users/admin/some/important/path",
 *  "level": "WARN",
 *  "description": "User joebob1 modified file /users/admin/some/important/path",
 * 	"requestId": "9345a8a2-611e-4053-a75c-05c29101dc59"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sensitive_update](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sensitive_updateuseridfileobject)
 */
export function sensitive_update<
	U extends string | number | bigint,
	F extends string,
>(userId: U, fileOrObject: F) {
	return `sensitive_update:${userId}, ${fileOrObject}` as const;
}

/**
 * All data marked as sensitive or placed into a directory/table/repository where sensitive data is stored should have deletions
 * of the data logged and reviewed periodically.
 * The file should not be immediately deleted but marked for deletion and an archive of the file should be maintained according
 * to legal/privacy requirements.
 *
 * **Level:** `WARN`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const fileOrObject = "/users/admin/some/important/path";
 * logger.warn({ event: sensitive_delete(userId, fileOrObject) }, `User ${userId} marked file ${fileOrObject} for deletion`);
 * ```
 * @example
 * ```json
 * {
 *  "datetime": "2019-01-01 00:00:00,000",
 *  "appid": "foobar.netportal_auth",
 *  "event": "sensitive_delete:joebob1, /users/admin/some/important/path",
 *  "level": "WARN",
 *  "description": "User joebob1 marked file /users/admin/some/important/path for deletion",
 * 	"requestId": "f6a08db8-df7a-4b13-82ee-18aaf15c7fc1"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - sensitive_delete](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#sensitive_deleteuseridfileobject)
 */
export function sensitive_delete<
	U extends string | number | bigint,
	F extends string,
>(userId: U, fileOrObject: F) {
	return `sensitive_delete:${userId}, ${fileOrObject}` as const;
}
