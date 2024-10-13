import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { toggleTheme } from "./themeSlice";
import { lightTheme, darkTheme } from "./theme";

const Theme = ({ children }) => {
  useDispatch(toggleTheme);
  const tema = useSelector((state) => state.theme.tema);

  return (
    <>
      <ThemeProvider theme={tema === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Theme;
