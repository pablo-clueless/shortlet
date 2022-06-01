import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   /*
  *================
  * Global Styles
  * ===============
  */
  inputField: {
    '& .MuiInputBase-input': {
      color: 'var(--color-primary)'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        height: '60px',
        color: 'var(--color-primary)',
        borderColor: 'var(--color-primary)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--mid)',
      }
    },
    '& .MuiFormLabel-root': {
      color: 'var(--color-primary)',
      fontWeight: 400,
      '&.MuiFormLabel-root.Mui-focused': {
        color: 'var(--color-primary)'
      }
    }
  },
  form: {
    width: '90%',
    display: 'flex',
    gap: '1rem',
    margin: '1rem 0',
    '@media screen and (max-width: 800px)': {
      width: '90%'
    },
    '@media screen and (min-width: 1270px)': {
      width: '60%'
    }
  },
  /*
  *================
  * Navbar
  * ===============
  */
  nav: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'var(--color-light)',
    zIndex: 3
  },
  toolbar: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0.5rem 0',
    '$img': {
      height: '100%',
      width: 'auto',
      maxWidth: '100px',
      margin: '0 1rem'
    },
  },
  navList: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    listStyle: 'none',
    '@media screen and (max-width: 900px)': {
      display: 'none'
    }
  },
  'navItem': {
    color: 'var(--color-primary)',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: '0.3s ease',
    '&:hover': {
      color: 'var(--color-primary-dark)',
    }
  },
  menuButton: {
    display: 'none',
    '@media screen and (max-width: 900px)': {
      display: 'block',
      cursor: 'pointer'
    }
  },
  menu: {
    display: 'none',
    '@media screen and (max-width: 900px)': {
      display: 'block',
      position: 'fixed',
      top: '64px',
      right: 0,
    }
  },
  header: {
    width: '100%',
    height: '90vh',
    marginTop: '64px',
  },
   /*
  *================
  * Products
  * ===============
  */
  productLayout: {
    padding: '0 1rem',
    margin: '1rem 0 2rem',
  },
  productCard: {
    height: '400px',
    transition: 'var(--transition-time)',
    cursor: 'pointer',
    '& img': {
      width: '100%',
      objectFit: 'cover',
      opacity: 0.7,
    },
    '&:hover': {
      transform: 'scale(1.03)',
      '& img': {
        opacity: 1
      }
    }
  },
   /*
  *================
  * Reviews
  * ===============
  */
  reviewLayout: {},
  reviewCard: {},
   /*
  *================
  * Footer
  * ===============
  */
  footer: {
    backgroundColor: 'var(--color-primary)',
    background: 'linear-gradient(to bottom, var(--color-light) 30%, var(--color-primary))',
  }
}))
