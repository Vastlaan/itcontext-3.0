import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles";

export default function ThemePrv({ children }) {
    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
