"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#652AC8",
      dark: "#29183B",
    },
    background: {
      default: "#17181A",
      paper: "#212224",
    },
    text: {
      primary: "#ffffff",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 0,
          maxWidth: 50,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&:first-of-type": {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          },
          "&:last-of-type": {
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          },
          "&:before": {
            display: "none",
          },
          "&expanded": {
            border: "1px solid white",
          },
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#212224",
          //backgroundImage: "none",
          backgroundImage:
            "linear-gradient(to bottom, #212224 0%, #212224 100%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          fontWeight: 600,
          padding: "6px 15px 6px 15px",
        },
        outlined: {
          color: "#fff",
          borderColor: "#fff",
          "&:hover": {
            borderColor: "#fff",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        clickableColorPrimary: {
          ":hover": {
            backgroundColor: "#D98491",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Set the default text color for all Typography components
        },
      },
    },
  },
  typography: {
    fontFamily: ["Syne", "sans-serif"].join(","),
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default defaultTheme;
