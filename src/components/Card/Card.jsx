import React from "react"
import { css } from "emotion"

const Card = () => {
  return (
    <div
      className={css`
        padding: 10%;
        width: 75vw;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        box-shadow: -20px 20px 0px rgba(255, 255, 255, 0.4);

        h1 {
          color: #5f6c7b;
          text-align: center;
          margin-bottom: 60px;
        }

        p {
          cursor: pointer;
          padding: 20px 30px;
          background-color: #ef4565;
          border-radius: 10px;
          color: #fff;
          box-shadow: 0px 0px 0px rgba(239, 69, 101, 0.4);
          transition: all 0.3s ease;
        }

        p:hover {
          box-shadow: -5px 5px 0px rgba(239, 69, 101, 0.4);
          transform: translateY(-5px);
        }
      `}
    >
      <h1>Jokes go hereee</h1>
      <p onClick={() => console.log("You Clicked Me!")}>Another One!</p>
    </div>
  )
}

export default Card
