import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from '../src/lib/AlurakutCommons';
import DarkModeToggle from '../src/lib/DarkModeToggle';

const LightTheme = {
  pageBackground: "#D9E6F6",
  navBg: "#5292C1",
  titleColor: "#dc658b",
  tagLineColor: "#fff",
  textColor: "#000",
  boxBorder: "none",
  boxBg: "#fff",
  secundaryColor: "#fff"
}
const DarkTheme = {
  pageBackground: "#000000",
  navBg: "#000000",
  titleColor: "lightpink",
  tagLineColor: "lavender",
  boxBorder: "1px solid #D81D99",
  textColor: "#D81D99",
  boxBg: "#15181D",
  secundaryColor: "#D81D99"
}
const themes = {
  light: LightTheme,
  dark: DarkTheme
}

const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: ${props => themes[props.theme].pageBackground };
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}

`



export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <GlobalStyle theme={theme}/>
      <ThemeProvider theme={themes[theme]}>
        <DarkModeToggle theme={theme} setTheme={setTheme}/>
        <Component {...pageProps} theme={themes[theme]} />
      </ThemeProvider>
    </>
  )
}