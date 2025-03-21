import presetWind4 from "@unocss/preset-wind4";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerVariantGroup from "@unocss/transformer-variant-group";

import presetRemToPx from "@unocss/preset-rem-to-px";

import { defineConfig } from "unocss";
import { userTheme } from "./theme.config";

export default defineConfig({
	presets: [presetWind4(), presetRemToPx()],
	transformers: [transformerCompileClass(), transformerVariantGroup()],
	theme: userTheme,
});