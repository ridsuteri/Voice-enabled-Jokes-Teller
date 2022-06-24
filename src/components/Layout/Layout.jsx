import React,{useEffect} from "react"
import { css } from "emotion"
import "./layout.css"
import alanBtn from "@alan-ai/alan-sdk-web";

const Layout = ({ children }) => {
  useEffect(() => {
    alanBtn({
        key: '',
        onCommand: (commandData) => {
          if (commandData.command === 'nextJoke') {
            console.log('Next Joke');
          }
        }
    });
  }, []);
  return (
    <main
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {children}
    </main>
  )
}

export default Layout
