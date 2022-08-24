import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Loader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  ::before {
    content: "";
    position: absolute;
    top: 85px;
    left: 15%;
    width: 70%;
    height: 70%;
    background: #ff3b8d;
    box-shadow: -60px -55px 0 #07b2ff;
    border-radius: 50%;
    animation: animate 5s linear infinite;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 85px;
    left: 15%;
    width: 70%;
    height: 70%;
    background: #8dff08;
    box-shadow: 60px 55px 0 #ffeb3b;
    border-radius: 50%;
    animation: animate 5s linear infinite;
  }
  @keyframes animate {
    0% {
      filter: blur(50px) hue-rotate(0deg);
    }
    100% {
      filter: blur(50px) hue-rotate(360deg);
    }
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.1);
  ::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    background: transparent;
    border-radius: 50%;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.08);
  }
`;
