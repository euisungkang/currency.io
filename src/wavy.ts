import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const Wavy: CustomThemeConfig = {
    name: 'Wavy',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-500)",
		"--on-secondary": "var(--color-surface-500)",
		"--on-tertiary": "var(--color-surface-500)",
		"--on-success": "var(--color-surface-500)",
		"--on-warning": "var(--color-surface-500)",
		"--on-error": "var(--color-surface-500)",
		"--on-surface": "var(--color-primary-400)",
		// =~= Theme Colors  =~=
		// primary | #cfd6f2 
		"--color-primary-50": "248 249 253", // #f8f9fd
		"--color-primary-100": "245 247 252", // #f5f7fc
		"--color-primary-200": "243 245 252", // #f3f5fc
		"--color-primary-300": "236 239 250", // #eceffa
		"--color-primary-400": "221 226 246", // #dde2f6
		"--color-primary-500": "207 214 242", // #cfd6f2
		"--color-primary-600": "186 193 218", // #bac1da
		"--color-primary-700": "155 161 182", // #9ba1b6
		"--color-primary-800": "124 128 145", // #7c8091
		"--color-primary-900": "101 105 119", // #656977
		// secondary | #c5a9f2 
		"--color-secondary-50": "246 242 253", // #f6f2fd
		"--color-secondary-100": "243 238 252", // #f3eefc
		"--color-secondary-200": "241 234 252", // #f1eafc
		"--color-secondary-300": "232 221 250", // #e8ddfa
		"--color-secondary-400": "214 195 246", // #d6c3f6
		"--color-secondary-500": "197 169 242", // #c5a9f2
		"--color-secondary-600": "177 152 218", // #b198da
		"--color-secondary-700": "148 127 182", // #947fb6
		"--color-secondary-800": "118 101 145", // #766591
		"--color-secondary-900": "97 83 119", // #615377
		// tertiary | #91b4f5 
		"--color-tertiary-50": "239 244 254", // #eff4fe
		"--color-tertiary-100": "233 240 253", // #e9f0fd
		"--color-tertiary-200": "228 236 253", // #e4ecfd
		"--color-tertiary-300": "211 225 251", // #d3e1fb
		"--color-tertiary-400": "178 203 248", // #b2cbf8
		"--color-tertiary-500": "145 180 245", // #91b4f5
		"--color-tertiary-600": "131 162 221", // #83a2dd
		"--color-tertiary-700": "109 135 184", // #6d87b8
		"--color-tertiary-800": "87 108 147", // #576c93
		"--color-tertiary-900": "71 88 120", // #475878
		// success | #b3e1a7 
		"--color-success-50": "244 251 242", // #f4fbf2
		"--color-success-100": "240 249 237", // #f0f9ed
		"--color-success-200": "236 248 233", // #ecf8e9
		"--color-success-300": "225 243 220", // #e1f3dc
		"--color-success-400": "202 234 193", // #caeac1
		"--color-success-500": "179 225 167", // #b3e1a7
		"--color-success-600": "161 203 150", // #a1cb96
		"--color-success-700": "134 169 125", // #86a97d
		"--color-success-800": "107 135 100", // #6b8764
		"--color-success-900": "88 110 82", // #586e52
		// warning | #f6e2b5 
		"--color-warning-50": "254 251 244", // #fefbf4
		"--color-warning-100": "253 249 240", // #fdf9f0
		"--color-warning-200": "253 248 237", // #fdf8ed
		"--color-warning-300": "251 243 225", // #fbf3e1
		"--color-warning-400": "249 235 203", // #f9ebcb
		"--color-warning-500": "246 226 181", // #f6e2b5
		"--color-warning-600": "221 203 163", // #ddcba3
		"--color-warning-700": "185 170 136", // #b9aa88
		"--color-warning-800": "148 136 109", // #94886d
		"--color-warning-900": "121 111 89", // #796f59
		// error | #e591a8 
		"--color-error-50": "251 239 242", // #fbeff2
		"--color-error-100": "250 233 238", // #fae9ee
		"--color-error-200": "249 228 233", // #f9e4e9
		"--color-error-300": "245 211 220", // #f5d3dc
		"--color-error-400": "237 178 194", // #edb2c2
		"--color-error-500": "229 145 168", // #e591a8
		"--color-error-600": "206 131 151", // #ce8397
		"--color-error-700": "172 109 126", // #ac6d7e
		"--color-error-800": "137 87 101", // #895765
		"--color-error-900": "112 71 82", // #704752
		// surface | #333333 
		"--color-surface-50": "224 224 224", // #e0e0e0
		"--color-surface-100": "214 214 214", // #d6d6d6
		"--color-surface-200": "204 204 204", // #cccccc
		"--color-surface-300": "173 173 173", // #adadad
		"--color-surface-400": "112 112 112", // #707070
		"--color-surface-500": "51 51 51", // #333333
		"--color-surface-600": "46 46 46", // #2e2e2e
		"--color-surface-700": "38 38 38", // #262626
		"--color-surface-800": "31 31 31", // #1f1f1f
		"--color-surface-900": "25 25 25", // #191919
		
	}
}
