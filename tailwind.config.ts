
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				gold: {
					DEFAULT: '#ffd700',
					dark: '#b8860b',
					light: '#ffeb99',
				},
				pink: {
					DEFAULT: '#ff007a',
					dark: '#c6005f',
					light: '#ff66ab',
				},
				purple: {
					DEFAULT: '#7b2cbf',
					dark: '#5a189a',
					light: '#9d4edd',
				},
				dark: {
					DEFAULT: '#0f0f1a',
					light: '#1a1a2e',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['"Playfair Display"', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-gold': {
					'0%, 100%': { 
						boxShadow: '0 0 15px 5px rgba(255, 215, 0, 0.7)'
					},
					'50%': { 
						boxShadow: '0 0 25px 10px rgba(255, 215, 0, 0.9)'
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-gold': 'pulse-gold 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 3s infinite linear',
			},
			backgroundImage: {
				'gradient-dark': 'linear-gradient(to bottom, #0f0f1a, #1a1a2e)',
				'gradient-gold': 'linear-gradient(90deg, #ffd700, #b8860b, #ffd700)',
				'header-pattern': "url('/public/lovable-uploads/567a2f91-61fe-4cdc-8339-f9243702d099.png')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
