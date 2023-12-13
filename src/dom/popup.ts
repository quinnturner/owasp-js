/// <reference lib="dom" />

/**
 * Open a popup window with the given URL, name, and window features.
 *
 * @param url - The URL to open in the popup.
 * @param name - The name of the popup window.
 * @param windowFeatures - A string containing a comma-separated list of window features in the form `name=value` — or for boolean features, just name.
 * These features include options such as the window's default size and position, whether or not to open a minimal popup window, and so forth.
 * The following options are supported:
 * - `'popup'`: Requests a minimal popup window. If no other features are specified, the new browsing context will be a tab.
 * - `'width'`: Specifies the width of the content area, including scrollbars. The minimum required value is `100`.
 * - `'innerWidth'`: Specifies the width of the content area, excluding scrollbars. The minimum required value is `100`.
 * - `'height'`: Specifies the height of the content area, including scrollbars. The minimum required value is `100`.
 * - `'innerHeight'`: Specifies the height of the content area, excluding scrollbars. The minimum required value is `100`.
 * - `'left'`: Specifies the distance in pixels from the left side of the work area where the new window will be generated.
 * - `'screenX'`: Specifies the distance in pixels from the left side of the screen where the new window will be generated.
 * - `'top'`: Specifies the distance in pixels from the top side of the work area where the new window will be generated.
 * - `'screenY'`: Specifies the distance in pixels from the top side of the screen where the new window will be generated.
 * - `'noopener'`: Prevents the new window from having access to the originating window via `Window.opener`.
 * - `'noreferrer'`: Omits the `Referer` header and sets `noopener` to true.
 *
 * @returns If the browser successfully opens the new browsing context, a `WindowProxy` object is returned.
 *          The returned reference can be used to access properties and methods of the new context as long as it complies with the same-origin policy security requirements.
 *          `null` is returned if the browser fails to open the new browsing context, for example because it was blocked by a browser popup blocker.
 * @see [OWASP HTML5 Security Cheat Sheet - Tabnabbing](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#tabnabbing)
 * @see [MDN `Window.open`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#popup)
 */
export function openPopup(
	url: string | URL,
	name?: string | undefined,
	windowFeatures?: string | undefined,
): Window | null {
	// Open the popup and set the opener and referrer policy instruction
	const newWindow = window.open(
		url,
		name,
		`noopener,noreferrer${windowFeatures ? `,${windowFeatures}` : ""}`,
	);
	// Reset the opener link
	if (newWindow) newWindow.opener = null;
	return newWindow;
}
