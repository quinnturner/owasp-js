import { beforeEach, describe, expect, it, jest } from "bun:test";
import { openPopup } from "./popup.js";

const window = globalThis.window as Window | undefined;
if (!window) {
	throw new Error("window is not defined");
}

describe("openPopup", () => {
	beforeEach(() => {
		jest.restoreAllMocks();
	});
	it("should return a new window object with the correct properties", () => {
		const url = "https://example.com";
		const name = "popup";
		const updatedWindow = {
			...window,
			location: {
				...window.location,
				href: url,
			},
			name,
		};
		window.open = jest.fn().mockReturnValue(updatedWindow);

		const windowFeatures = "width=500,height=500";
		const newWindow = openPopup(url, name, windowFeatures);

		expect(window.open).toHaveBeenCalledWith(
			url,
			name,
			`noopener,noreferrer,${windowFeatures}`,
		);
		expect(newWindow).not.toBeNull();
		expect(newWindow?.location.href).toBe(url);
		expect(newWindow?.name).toBe(name);
		expect(newWindow?.opener).toBeNull();
	});
	it("should not return a new window object if the browser fails to open the new browsing context", () => {
		window.open = jest.fn().mockReturnValue(null);

		const url = "https://example.com";
		const name = "popup";
		const windowFeatures = "width=500,height=500";
		const newWindow = openPopup(url, name, windowFeatures);

		expect(window.open).toHaveBeenCalledWith(
			url,
			name,
			`noopener,noreferrer,${windowFeatures}`,
		);
		expect(newWindow).toBeNull();
	});
});
