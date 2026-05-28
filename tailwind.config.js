/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        ink: '#e5e2dc',
        muted: '#999999',
        rule: '#252525',
        accent: '#16a34a',
        'accent-light': '#0f1f14',
        surface: '#181818',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.4rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline': ['clamp(1.6rem, 3vw, 2.4rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subhead': ['clamp(1.1rem, 2vw, 1.35rem)', { lineHeight: '1.4' }],
      },
      maxWidth: {
        'prose-wide': '72ch',
        'site': '1120px',
      },
      letterSpacing: {
        'label': '0.1em',
      }
    }
  },
  plugins: []
}
