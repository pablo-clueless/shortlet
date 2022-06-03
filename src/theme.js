import { createTheme } from "@mui/material";

export const theme = createTheme({
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
  palette: {
    text: {
      primary: "#8484F0",
      secondary: "#757575",
    },
  },
});
