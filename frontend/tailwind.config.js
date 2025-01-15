/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			// Colors extension for black and white theme
			colors: {
				// Define black and white theme
				white: 'hsl(0, 0%, 100%)', // Use pure white
				black: 'hsl(0, 0%, 0%)', // Neutral black

				// Set primary as black (neutral)
				primary: {
					DEFAULT: 'hsl(0, 0%, 0%)', // Neutral black
					foreground: 'hsl(0, 0%, 100%)', // White text on black for contrast
				},

				// Define other colors using white and neutral themes
				background: 'hsl(0, 0%, 100%)', // Pure white background
				foreground: 'hsl(0, 0%, 0%)', // Black text
				card: {
					DEFAULT: 'hsl(0, 0%, 97%)', // Light gray card background (for contrast)
					foreground: 'hsl(0, 0%, 10%)', // Darker gray text for card
				},
				popover: {
					DEFAULT: 'hsl(0, 0%, 97%)', // Light background for popovers
					foreground: 'hsl(0, 0%, 10%)', // Dark text for popovers
				},
				border: 'hsl(0, 0%, 90%)', // Light border color for contrast
				input: 'hsl(0, 0%, 95%)', // Light input background color
				ring: 'hsl(0, 0%, 85%)', // Light ring color
				chart: {
					'1': 'hsl(0, 0%, 20%)', // Dark chart color
					'2': 'hsl(0, 0%, 40%)', // Medium dark chart color
					'3': 'hsl(0, 0%, 60%)', // Medium light chart color
					'4': 'hsl(0, 0%, 80%)', // Light chart color
					'5': 'hsl(0, 0%, 95%)', // Very light chart color
				},

				// Accent, Muted, Destructive colors for black/white theme
				accent: {
					DEFAULT: 'hsl(0, 0%, 20%)', // Dark accent color
					foreground: 'hsl(0, 0%, 100%)', // Light text on accent color
				},
				muted: {
					DEFAULT: 'hsl(0, 0%, 90%)', // Light muted color
					foreground: 'hsl(0, 0%, 20%)', // Dark text on muted color
				},
				destructive: {
					DEFAULT: 'hsl(0, 100%, 50%)', // Red for destructive actions
					foreground: 'hsl(0, 100%, 100%)', // White text on destructive
				},
			},

			// Border radius customization
			borderRadius: {
				lg: '0.5rem',
				md: '0.375rem',
				sm: '0.125rem',
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
}
