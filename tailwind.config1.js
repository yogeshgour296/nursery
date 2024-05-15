/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    //screens
    screens: {
      xs: '480px',
      sm: '768px',
      md: '991px',
      lg: '1280px',
      xl: '1440px',
    },
    //Max width
    // maxWidth:{
    //   '1/2' : 'calc(100vw - 30px)',
    // },
    //Container
    container: {
      center: true,
      screens: {
        '2xl': '1630px',
      },
      padding: {
        DEFAULT : '15px',
        md: '30px'
      },
    },
    //Spacing
    spacing: {
      '0': '0px',
      '1': '5px',
      '2': '10px',
      '3': '15px',
      '4': '20px',
      '5': '25px',
      '6': '30px',
      'container': 'calc(((100vw - 17px) - 1630px) / 2)',
    },
    //Colors
    colors: {
      primary : {
        DEFAULT: '#014B4B',
        50 : '#e5eded',
        100 : '#ccdbdb',
        200 : '#b2c9c9',
        300 : '#99b7b7',
        400 : '#80a5a5',
        500 : '#679393',
        600 : '#4d8181',
        700 : '#346f6f',
        800 : '#1a5d5d',
        900 : '#014B4B',
      },
      secondary : '#E9F3F3',
      primary_light : '#008D2B', 
      white: '#fff',
      red:{
        DEFAULT : '#FF0000'
      },
      yellow:{
        DEFAULT : '#FFC700'
      },
      transparent : 'transparent',
    },
    //fontFamily
    fontFamily: {
      primary: ['Poppins', 'sans-serif']
    },
    //fontSize
    fontSize: {
      'xs': '8px',
      'sm': '10px',
      'sm2': '16px',
      'sm3': '18px',
      'lg': '44px',
      'xl': '120px',
      'p' : '16px',
      'h1': '70px',
      'h2' : '50px',
      'h3' : '40px',
      'h4' : '36px',
      'h5' : '30px',
      'h6' : '25px',
    },
    //Background size
    backgroundSize: {
      '100%' : '100% 100%'
    },
    //Grid template
    gridTemplateColumns:{
      '4': 'repeat(auto-fit, minmax(250px, 1fr))',
      '5': 'repeat(auto-fit, minmax(310px, 1fr))',
    }
  },
  plugins: [
  
  ],
}
