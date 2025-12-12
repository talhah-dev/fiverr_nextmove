module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        ring: 'hsl(var(--ring))',
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        orbit: {
          '0%': {
            transform: 'translate(-50%, -50%) rotate(calc(var(--angle) * 1deg)) translateX(var(--radius)) rotate(calc(var(--angle) * -1deg))',
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(calc(var(--angle) * 1deg + 360deg)) translateX(var(--radius)) rotate(calc((var(--angle) * -1deg) - 360deg))',
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' }
        },
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        'orbit': 'orbit var(--duration) linear infinite',
        'scroll': 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}; 