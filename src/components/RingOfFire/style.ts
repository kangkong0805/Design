import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
`;

export const Circle = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  filter: url(#wavy) blur(1px);
  :nth-child(2) {
    ::before {
      animation-delay: -2.5s;
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 100px;
    left: 100px;
    right: 100px;
    bottom: 100px;
    border: 20px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 50px #fff, inset 0 0 50px #fff;
    -webkit-box-reflect: below 10px
      linear-gradient(transparent, transparent, #0002);
    animation: animate 5s linear infinite;
  }
  ::after {
    content: "";
    position: absolute;
    top: 100px;
    left: 100px;
    right: 100px;
    bottom: 100px;
    border: 20px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px #0f0, inset 0 0 10px #0f0;
  }
  @keyframes animate {
    0% {
      box-shadow: 0 0 50px #0f0, inset 0 0 50px #0f0;
      filter: hue-rotate(0deg);
    }
    20% {
      box-shadow: 0 0 60px #0f0, inset 0 0 60px #0f0;
    }
    40% {
      box-shadow: 0 0 40px #0f0, inset 0 0 40px #0f0;
    }
    60% {
      box-shadow: 0 0 80px #0f0, inset 0 0 80px #0f0;
    }
    80% {
      box-shadow: 0 0 100px #0f0, inset 0 0 100px #0f0;
    }
    100% {
      box-shadow: 0 0 50px #0f0, inset 0 0 50px #0f0;
      filter: hue-rotate(360deg);
    }
  }
`;

export const Svg = styled.svg`
  width: 0;
  height: 0;
`;
