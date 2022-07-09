import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   /*
  *================
  * Global Styles
  * ===============
  */
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
        color: '#fff',
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
      margin: '0 2rem',
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
  link: {
    background: 'var(--color-secondary)',
    padding: '0.25rem 0.5rem',
    borderRadius:'7px',
  },
   /*
  *================
  * Layout and Cards
  * ===============
  */
  layout: {
    padding: '2rem 1.5rem',
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
      transition: 'var(--transition-time)',
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
  result: {
    position: 'fixed',
    top: '50%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    width: '200px',
    padding: '1rem',
    zIndex: 2,
    borderRadius: '5px',
  },
  /*
  *================
  * Footer
  * ===============
  */
  footer: {
    paddingTop: 10,
    padding: '0 1rem',
    // background: 'linear-gradient(to bottom, var(--color-mid) 30%, var(--color-primary))',
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
  formControl: {
    height: 45,
    border: `thin solid ${theme.palette.text.primary}`,
    borderRadius: '5px',
    position: 'relative',
    transition: 'var(--transition-time)',
    '&:focus-within': {
      borderColor: theme.palette.text.secondary,
    },
    '& input': {
      width: '100%',
      height: '100%',
      background: 'transparent',
      color: theme.palette.text.primary,
      padding: '0 1rem',
      borderRadius: '5px',
      border: 0,
      outline: 'none',
    },
    '& select': {
      width: '100%',
      height: '100%',
      background: 'transparent',
      color: theme.palette.text.primary,
      padding: '0 1rem',
      borderRadius: '5px',
      border: 0,
      outline: 'none',
      '& option': {
        background: 'transparent',
        textTransform: 'capitalize',
        height: '20px',
        padding: '0.5rem 1rem',
        margin: '1rem 0'
      },
    },
    '& label': {
      color: theme.palette.text.primary,
      fontSize: '1rem',
      fontWeight: 'bold',
      position: 'absolute',
      top: '-25%',
      left: '2%',
      padding: '0 0.5rem',
    }
  },
  /*
  * ==============
  * Bookings Page
  * ==============
  */
  bookingsPage: {
    width: '100%',
    height: '90vh',
    background: 'url(https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80) no-repeat center/cover',
    display: 'grid',
    placeItems: 'center',
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
