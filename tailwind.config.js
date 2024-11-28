/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        'button': '0 2px 4px -2px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          fontWeight: '500',
          transition: 'all 150ms ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        '.btn-primary': {
          backgroundColor: '#4A0404',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#6B0606',
          },
        },
        '.btn-secondary': {
          backgroundColor: '#ffffff',
          color: '#0ea5e9',
          border: '1px solid #0ea5e9',
          '&:hover': {
            backgroundColor: '#f0f9ff',
            transform: 'translateY(-1px)',
          },
        },
        '.btn-outline': {
          backgroundColor: 'transparent',
          color: '#525252',
          border: '1px solid #d4d4d4',
          '&:hover': {
            borderColor: '#0ea5e9',
            color: '#0ea5e9',
            transform: 'translateY(-1px)',
          },
        },
        '.card': {
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          padding: '1.5rem',
          border: '1px solid #e5e5e5',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
        '.input': {
          width: '100%',
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          border: '1px solid #d4d4d4',
          backgroundColor: '#ffffff',
          color: '#404040',
          '&:focus': {
            outline: 'none',
            borderColor: '#0ea5e9',
            boxShadow: '0 0 0 2px rgba(14, 165, 233, 0.2)',
          },
        },
      })
    }
  ]
}