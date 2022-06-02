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
  datePicker: {
    '& .MuiInputBase-input': {
      width: '50%',
      color: 'var(--color-primary)',
      height: '50px',
      border: '1px solid var(--color-primary)',
      borderRadius: '5px',
      padding: '0 0.75rem',
      cursor: 'pointer',
    },
  },
  form: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: '1rem 0',
    '@media screen and (max-width: 800px)': {
      width: '90%'
    },
    '@media screen and (min-width: 1270px)': {
      width: '50%'
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
    zIndex: 3,
    '& ul': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      listStyle: 'none',
      '@media screen and (max-width: 900px)': {
        display: 'none'
      },
      '& a': {
        color: 'var(--color-primary)',
        textDecoration: 'none',
        textTransform: 'capitalize',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        transition: '0.3s ease',
        '&:hover': {
          color: 'var(--color-primary-dark)',
        }
      }
    }
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
  menuButton: {
    display: 'none',
    '@media screen and (max-width: 900px)': {
      display: 'block',
      cursor: 'pointer'
    },
  },
  menu: {
    display: 'none',
    '@media screen and (max-width: 900px)': {
      display: 'block',
      position: 'fixed',
      top: '64px',
      right: 0,
    },
    '& a': {
      textTransform: 'capitalize',
      margin: '0 2rem'
    }
  },
  header: {
    width: '100%',
    height: '94vh',
    display: 'grid',
    placeItems: 'center',
    marginTop: '64px',
    background: 'url(https://images.unsplash.com/photo-1528908929486-dfaa209c6986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80) no-repeat center/cover',
  },
   /*
  *================
  * Layout and Cards
  * ===============
  */
  layout: {
    padding: '0 1rem',
    margin: '4rem 0',
    textAlign: 'center',
  },
  productCard: {
    height: '400px',
    borderRadius: '5px',
    transition: 'var(--transition-time)',
    overflow: 'hidden',
    cursor: 'pointer',
    '& img': {
      width: '100%',
      objectFit: 'cover',
      borderRadius: '5px',
      opacity: 0.7,
    },
    '&:hover': {
      transform: 'scale(1.03)',
      '& img': {
        opacity: 1,
      }
    }
  },
  reviewCard: {
    display: 'grid',
    placeItems: 'center',
    borderRadius: '10px',
    padding: '1rem 2rem',
    margin: '1rem 0',
  },
  /*
  *================
  * Footer
  * ===============
  */
  footer: {
    backgroundColor: 'var(--color-primary)',
    background: 'linear-gradient(to bottom, var(--color-mid) 30%, var(--color-primary))',
  },
  /*
  *================
  * Product Page
  * ===============
  */
  product: {
    '& img': {
      borderRadius: '10px',
    }
  },
  /*
  * ==============
  * InputField
  * ==============
  */
  root: {
    '& .MuiInputBase-input': {
      color: 'var(--color-primary)'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        height: '50px',
        color: 'var(--color-primary)',
        borderColor: 'var(--color-primary)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-primary-dark)',
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
    /*
  * ==============
  * Modal
  * ==============
  */
 backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    width: '100vw',
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    backdropFilter: 'blur(3px)',
  },
  modal: {
    display: 'grid',
    placeItems: 'center',
    width: '40%',
    '@media screen and (max-width: 1000px)': {
      width: '50%'
    },
    '@media screen and (max-width: 763px)': {
      width: '70%'
    },
    '@media screen and (max-width: 550px)': {
      width: '90%'
    },
  }
}))
