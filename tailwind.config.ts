import type { Config } from 'tailwindcss';
const svgToDataUri = require('mini-svg-data-uri');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // HIER DEN FOLGENDEN BLOCK HINZUFÜGEN
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'], // Wichtig für die Titel in den Karten
      },
      // DER REST DEINER KONFIGURATION BLEIBT GLEICH...
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'fade-in-up': 'fade-in-up 0å6s ease-out forwards',
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-right': 'slide-right 0.5s ease-out forwards',
        'pulse-orange': 'pulse-orange 3s infinite'
      },
  		keyframes: {
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
  				},
  				'100%': {
  					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'slide-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'pulse-orange': {
          '0%, 100%': {
            opacity: '0.5'
          },
          '50%': {
            opacity: '0.1'
          }
        }
  		}
  	}
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-dot-thick': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
    function ({ addUtilities }: any) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
        },
        '.btn-glow': {
          'background': 'linear-gradient(to right, #ff5500, #ff8040)',
          'box-shadow': '0 0 15px rgba(255, 85, 0, 0.5), 0 0 30px rgba(255, 85, 0, 0.3)'
        },
        '.btn-shine': {
          'position': 'relative',
          'overflow': 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
            transform: 'rotate(30deg)',
            animation: 'shine 3s infinite',
          }
        },
        '.orange-glassmorphism': {
          'background': 'rgba(255, 85, 0, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 85, 0, 0.2)',
        }
      });
      
      // Add keyframes for shine effect
      addUtilities({
        '@keyframes shine': {
          '0%': { transform: 'rotate(30deg) translateX(-300%)' },
          '100%': { transform: 'rotate(30deg) translateX(300%)' }
        }
      });
    }
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
