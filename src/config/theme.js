import colors from './colors';

const theme = {
  common: {
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)',
    purpleShadow: '0px 0px 5px 0px rgba(66, 78, 166, 1)'
  },
  background: {
    main: colors.white
  },
  typography: {
    defaultBoxModel: {
      margin: '0 0 2rem 0',
      textAlign: 'center'
    },
    hero: {
      mainColor: colors.darkBlue,
      fontSizes: {
        mobile: '2.8rem'
      }
    },
    subhero: {
      mainColor: colors.darkBlue,
      fontSizes: {
        mobile: '1.8rem'
      }
    },

    paragraph: {
      mainColor: colors.darkBlue,
      fontSizes: {
        mobile: '1.4rem'
      }
    }
  }
};

export default theme;
