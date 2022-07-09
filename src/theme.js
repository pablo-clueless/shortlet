import { createTheme } from "@mui/material"

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#8484F0",
      secondary: "#757575",
      info: "#008BD2",
    },
  },
  typography: {
    fontFamily: "var(--font-body)",
    h1: { fontFamily: "var(--font-heading)" },
    h2: { fontFamily: "var(--font-heading)" },
    h3: { fontFamily: "var(--font-heading)" },
    h4: { fontFamily: "var(--font-heading)" },
    h5: { fontFamily: "var(--font-heading)" },
    h6: { fontFamily: "var(--font-heading)" },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--color-light)",
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: '1rem 2rem',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          height: "45px",
          backgroundColor: "var(--color-primary)",
          color: "var(--color-light)",
          transition: "0.3s ease",
          textTransform: "capitalize",
          "&:hover": {
            transform: "translateY(-3px)",
            backgroundColor: "var(--color-primary-dark)",
          },
        },
        outlined: {
          backgroundColor: "var(--color-info)",
          color: "var(--color-light)",
          transition: "0.3s ease",
          textTransform: "capitalize",
          "&:hover": {
            transform: "translateY(-5px)",
            backgroundColor: "var(--color-info-dark)",
            color: "var(--color-light)",
          },
        },
      },
    },
  },
})


export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#757575",
      secondary: "#fff",
      info: "#008BD2",
      dark: "#000",
    },
  },
  typography: {
    fontFamily: "var(--font-body)",
    h1: { fontFamily: "var(--font-heading)" },
    h2: { fontFamily: "var(--font-heading)" },
    h3: { fontFamily: "var(--font-heading)" },
    h4: { fontFamily: "var(--font-heading)" },
    h5: { fontFamily: "var(--font-heading)" },
    h6: { fontFamily: "var(--font-heading)" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          height: "45px",
          backgroundColor: "var(--color-secondary)",
          color: "var(--color-light)",
          transition: "0.3s ease",
          textTransform: "capitalize",
          "&:hover": {
            transform: "translateY(-3px)",
            backgroundColor: "var(--color-secondary-dark)",
          },
        },
        outlined: {
          backgroundColor: "var(--color-info)",
          color: "var(--color-light)",
          transition: "0.3s ease",
          textTransform: "capitalize",
          "&:hover": {
            transform: "translateY(-5px)",
            backgroundColor: "var(--color-info-dark)",
            color: "var(--color-light)",
          },
        },
      },
    },
  },
})
