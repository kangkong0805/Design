import styled from "@emotion/styled";

type Stick = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Loader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Stick = styled.div<Stick>`
  --i: ${(e) => e.num};
  position: relative;
  width: 40px;
  height: 200px;
  margin: 20px;
  overflow: hidden;
  border-radius: 40px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), #edf1f4);
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #fff,
    inset -5px -5px 5px rgba(255, 255, 255, 0.5),
    inset 5px 5px 5px rgba(255, 255, 255, 0.5);
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    border-radius: 40px;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #fff,
      inset -5px -5px 5px rgba(255, 255, 255, 0.5),
      inset 5px 5px 5px rgba(255, 255, 255, 0.5);
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    box-shadow: inset -5px -5px 5px rgba(0, 0, 0, 0.2), 0 420px 0 400px #2196f3;
    animation: animate 2.5s ease-in-out infinite;
    transform: translateY(160px);
    animation-delay: calc(-0.5s * var(--i));
  }
  @keyframes animate {
    0% {
      transform: translateY(160px);
      filter: hue-rotate(180deg);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(160px);
    }
  }
`;
