/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#F6F7F8',
          white: '#FFFFFF',
          borderSoft: '#C8CCD414',
          border: '#C8CCD41A',
          navy: '#072635',
          line: '#E3E4E6',
          pink: '#FFE6F1',
          blue: '#E0F3FA',
          peach: '#FFE6E9',
          black: '#000000',
          purpleBg: '#F4F0FE',
          purpleLine: '#CBC8D4',
          purpleDark: '#7E6CAB',
          purple: '#8C6FE6',
          magentaDark: '#C26EB4',
          magenta: '#E66FD2',
          mint: '#01F0D0',
          mintSoft: '#D8FCF7',
          gray: '#EDEDED',
          textMuted: '#707070',
        },
      },
      boxShadow: {
        card: '0 0 0 1px #C8CCD414',
      },
    },
  },
  plugins: [],
};
