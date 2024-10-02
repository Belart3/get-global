/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'BL100': '#B3BCC5',
        'BL500': '#001F3D',
        'PE500': '#F8DCBF',
        'B300': '#707070',
        'B400': '#404040',
        'B500': '#101010',
        'G500': '#B7EBE1',
        'Background': '#FEF8F2',
      },
      width: {
        '45': '45%',
        '48': '48%',
        '250': '250px',
        '290': '290px',
        '400': '400px',
        '500': '500px',
        '400': '400px',
        'off-16': 'calc(100% - 16px)',
        'off-32': 'calc(100% - 32px)',
      },
      minWidth: {
        '120': '120px',
        '250': '250px',
        '290': '290px',
        '400': '400px',
        '500': '500px',
        '400': '400px',
      },
      maxWidth: {
        '290': '290px',
        '400': '400px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
      },
      height: {
        '100': '100px',
        '320': '320px',
        '400': '400px',
        '420': '420px',
        '500': '500px',
        '573': '573px',
        '700': '700px',
        '906': '906px',
        '1044': '1044px',
      },
      inset: {
        '80': '80px',
        '130': '130px',
      },
      lineHeight: {
        '12': '12px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '38': '38px',
        '60': '60px',
        '64': '64px',
      },
      fontSize: {
        '12': '12px',
        '28': '28px',
        '32': '32px',
        '64': '64px',
      },
    },
  },
  plugins: [],
}

