/**
 * On successful file upload the first step in the validation process is that the upload has completed.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const user = "joebob1";
 * const filename = "user_generated_content.png";
 * const filetype = "image/png";
 * logger.info({ event: upload_complete(user, filename, filetype) }, `User ${user} has uploaded ${filename}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "upload_complete:joebob1,user_generated_content.png,PNG",
 * 	"level": "INFO",
 * 	"description": "User joebob1 has uploaded user_generated_content.png",
 * 	"requestId": "6e48278f-5f2c-4af0-b821-9d83f1cce30b"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - upload_complete](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#upload_completeuseridfilenametype)
 */
export function upload_complete<
	U extends string | number | bigint,
	N extends string,
>(userId: U, filename: N): `upload_complete:${U},${N}`;
export function upload_complete<
	U extends string | number | bigint,
	N extends string,
	T extends string,
>(userId: U, filename: N, type: T): `upload_complete:${U},${N},${T}`;
export function upload_complete<
	U extends string | number | bigint,
	N extends string,
	T extends string,
>(userId: U, filename: N, type?: T) {
	return type === undefined
		? (`upload_complete:${userId},${filename}` as const)
		: (`upload_complete:${userId},${filename},${type}` as const);
}

/**
 * One step in good file upload validation is to move/rename the file and when providing the content back to end users, never reference the original filename in the download. This is true both when storing in a filesystem as well as in block storage.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const filename = "user_generated_content.png";
 * const to = "kjsdhkrjhwijhsiuhdf000010202002";
 * logger.info({ event: upload_stored(filename, to) }, `File ${filename} was stored in the database with key ${to}`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "upload_stored:user_generated_content.png,kjsdhkrjhwijhsiuhdf000010202002",
 * 	"level": "INFO",
 * 	"description": "File user_generated_content.png was stored in the database with key abcdefghijk101010101",
 * 	"requestId": "7d1fbc36-fc8b-4dc3-8e79-841216f48ada"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - upload_stored](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#upload_storedfilenamefromto)
 */
export function upload_stored<N extends string, T extends string>(
	filename: N,
	to: T,
) {
	return `upload_stored:${filename},${to}` as const;
}

/**
 * All file uploads should have some validation performed, both for correctness (is in fact of file type x), and for safety (does not contain a virus).
 *
 * **Level:** `INFO`|`CRITICAL`
 *
 * @example
 * ```ts
 * const filename = "user_generated_content.png";
 * const randomFileName = randomUUID();
 * // Remember, it's good to use a random filename to prevent path traversal attacks!
 * const filepath = `/tmp/user-uploads/joebob1/${randomFileName}`;
 * const { status } = await performVirusScan(filepath); // PASSED, INCOMPLETE, FAILED
 * const vendor = "virusscan"; // imagemagick, clamav, etc.
 * if (status === "FAILED") {
 *  await fs.promises.rm(filepath, { force: true })
 *  logger.critical({ event: upload_validation(filename, vendor, status) }, `File ${filename} ${status} virus scan and was purged`);
 * } else {
 *  logger.info({ event: upload_validation(filename, vendor, status) }, `File ${filename} ${status} virus scan`);
 * }
 *
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "upload_validation:filename,virusscan:FAILED",
 * 	"level": "CRITICAL",
 * 	"description": "File user_generated_content.png FAILED virus scan and was purged",
 * 	"requestId": "46f449eb-bd37-43ef-a5a6-8d76d80b8975"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - upload_validation](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#upload_validationfilenamevirusscanimagemagickfailedincompletepassed)
 */
export function upload_validation<
	N extends string,
	V extends string,
	S extends string,
>(filename: N, vendor: V, status: S) {
	return `upload_validation:${filename},${vendor},${status}` as const;
}

/**
 * When a file is deleted for normal reasons it should be recorded.
 *
 * **Level:** `INFO`
 *
 * @example
 * ```ts
 * const userId = "joebob1";
 * const fileId = "kjsdhkrjhwijhsiuhdf000010202002";
 * logger.info({ event: upload_delete(userId, fileId) }, `User ${userId} has marked file ${fileId} for deletion`);
 * ```
 * @example
 * ```json
 * {
 * 	"datetime": "2019-01-01 00:00:00,000",
 * 	"appid": "foobar.netportal_auth",
 * 	"event": "upload_delete:joebob1,",
 * 	"level": "INFO",
 * 	"description": "User joebob1 has marked file abcdefghijk101010101 for deletion",
 * 	"requestId": "d4fc4479-210b-4d89-ae1e-4fe7b595cbb4"
 * }
 * ```
 * @see [OWASP Logging Vocabulary Cheat Sheet - upload_delete](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html#upload_deleteuseridfileid)
 */
export function upload_delete<
	U extends string | number | bigint,
	F extends string | number | bigint,
>(userId: U, fileId: F) {
	return `upload_delete:${userId},${fileId}` as const;
}
