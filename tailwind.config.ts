import type { Config } from "tailwindcss";
import { userTheme } from "./theme.config";

export default (<Partial<Config>>{
	theme: {
		extend: userTheme,
	},
});
