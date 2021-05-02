import "../styles/globals.scss";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { useState, useEffect } from "react";
import { DarkTheme, LightTheme, GlobalStyles } from "../components/Style/Theme";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? DarkTheme : LightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={darkmode.toggle}>Switch Mode</button>
      <button onClick={darkmode.enable}>Dark Mode</button>
      <button onClick={darkmode.disable}>Light Mode</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
