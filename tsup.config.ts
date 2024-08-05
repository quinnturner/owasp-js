import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/dom/index.ts", "src/vocab/index.ts"],
	splitting: false,
	sourcemap: true,
	format: ["cjs", "esm"],
	dts: true,
	minify: false,
	tsconfig: "./tsconfig.build.json",
	clean: true,
	outDir: "dist",
});
