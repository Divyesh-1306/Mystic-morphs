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
			fontFamily: {
				'magical': ['Cinzel', 'serif'],
				'serif': ['Crimson Text', 'serif'],
			},
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
				magical: {
					glow: 'hsl(var(--magical-glow))',
					purple: 'hsl(var(--magical-purple))',
					deep: 'hsl(var(--magical-deep))',
					light: 'hsl(var(--magical-light))'
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
				}
			},
			backgroundImage: {
				'gradient-magical': 'var(--gradient-magical)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-door': 'var(--gradient-door)',
				'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))'
			},
			boxShadow: {
				'magical': 'var(--shadow-magical)',
				'glow': 'var(--shadow-glow)'
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
				'shimmer': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'magical-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--magical-glow) / 0.5)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--magical-glow) / 0.8)' }
				},
				'spell-ring': {
					'from': { transform: 'rotate(0deg) scale(0.8)', opacity: '0' },
					'50%': { opacity: '1' },
					'to': { transform: 'rotate(360deg) scale(1.2)', opacity: '0' }
				},
				'door-left': {
					'0%': { transform: 'translateX(0) rotateY(0deg)' },
					'100%': { transform: 'translateX(-100%) rotateY(-70deg)' }
				},
				'door-right': {
					'0%': { transform: 'translateX(0) rotateY(0deg)' },
					'100%': { transform: 'translateX(100%) rotateY(70deg)' }
				},
				'zoom-through': {
					'0%': { transform: 'scale(1) translateZ(0)' },
					'100%': { transform: 'scale(50) translateZ(1000px)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'magical-pulse': 'magical-pulse 2s ease-in-out infinite',
				'spell-ring': 'spell-ring 2s ease-out infinite',
				'door-left': 'door-left 2s ease-in-out forwards',
				'door-right': 'door-right 2s ease-in-out forwards',
				'zoom-through': 'zoom-through 1s ease-in forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.8s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
