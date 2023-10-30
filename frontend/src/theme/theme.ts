import { createTheme } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    primaryColor: {
      50?: string;
      700?: string;
      500?: string;
      400?: string;
      300?: string;
      100?: string;
    };
    textColor: {
      white?: string;
      highemp?: string;
      lowemp?: string;
      medemp?: string;
    };
    greyColor: {
      white: string;
      stroke: string;
      icon01: string;
      icon02: string;
    };
    accentColor: {
      blue?: string;
      lightblue?: string;
      green?: string;
      lightgreen?: string;
      yellow?: string;
      lightyellow?: string;
      lightRed?: string;
      red?:string;
    };
    structural: {
      stroke?: string;
      white?: string;
    };
  }

  interface PaletteOptions {
    primaryColor?: {
      50?: string;
      700?: string;
      500?: string;
      400?: string;
      300?: string;
      100?: string;
    };
    textColor?: {
      white?: string;
      highemp?: string;
      lowemp?: string;
      medemp?: string;
    };
    greyColor: {
      white: string;
      stroke: string;
      icon01: string;
      icon02: string;
    };
    accentColor: {
      blue?: string;
      lightblue?: string;
      green?: string;
      lightgreen?: string;
      yellow?: string;
      lightyellow?: string;
      lightRed?: string;
      red?:string;
    };
    structural: {
      stroke?: string;
      white?: string;
    };
  }

  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    subtitle1: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption2: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    subtitle1: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption2: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    heading2: true;
    subtitle1: true;
    body1: true;
    body2: true;
    caption2: true;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 1081,
      lg: 1441,
      xl: 1920,
    },
  },
  spacing: 4,
  palette: {
    primaryColor: {
      50: "#FAFAFC",
      700: "1132B7",
      500: "#224DFF",
      400: "#95AAFF",
      300: "#EFF2FF",
      100: "#F7F8FA",
    },
    accentColor: {
      blue: "#3E5FE2",
      lightblue: "#F2F4FC",
      green: "#17A076",
      lightgreen: "#F2FCFB",
      yellow: "#A08817",
      lightyellow: "#FAF8EB",
      lightRed: "#FCE5EA",
      red:"#994D5B"
    },
    textColor: {
      white: "#FFFFFF",
      highemp: "#2C2C2E",
      medemp: "#696A6E",
      lowemp: "#818287",
    },
    greyColor: {
      white: "#FFFFFF",
      stroke: "#E5E7ED",
      icon01: "#696A6E",
      icon02: "#3E414D",
    },
    structural: {
      stroke: "#E5E7ED",
      white: "##FFFFFF",
    },
  },

  typography: {
    heading1: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "30px",
    },
    heading2: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "28px",
    },
    subtitle1: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
    },
    body2: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
    },
    caption2: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
  },
});

theme = createTheme({ ...theme });

export default theme;
