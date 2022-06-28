import styled from "styled-components";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #333;
  gap: 40px;
`;

export const loader = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: #333;
  border-radius: 50%;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25);
  border: 2px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    inset: 40px;
    border-radius: 50%;
    border: 3px dashed #666;
    box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
      inset 5px 5px 35px rgba(0, 0, 0, 0.25);
    z-index: 10;
    animation: animate 30s linear infinite;
  }
  ::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px dashed #666;
    box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
      inset 5px 5px 35px rgba(0, 0, 0, 0.25);
    background: rgba(0, 0, 0, 0.15);
    z-index: 11;
    animation: animate 10s linear infinite;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    animation: animate 2s linear infinite;
    overflow: hidden;
    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    ::before {
      content: "";
      position: absolute;
      top: 30px;
      left: 0;
      width: 100%;
      height: 100%;
      background: #f00;
      transform-origin: top left;
      transform: rotate(35deg);
      filter: blur(30px) drop-shadow(50px 50px 50px #f00);
      opacity: 0.75;
    }
  }
  :nth-child(2) span {
    animation-delay: -1s;
    filter: hue-rotate(290deg);
  }
`;
