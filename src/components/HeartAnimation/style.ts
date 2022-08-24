import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #042104;
  animation: animateBgColor 10s linear infinite;
  @keyframes animateBgColor {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const Loader = styled.div`
  position: relative;
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  top: 0;
  left: -200px;
  width: 200px;

  transform-origin: right;
  transform: rotate(calc(18deg * var(--i)));
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 15px;
    height: 15px;
    background: #00ff0a;
    border-radius: 50%;
    animation: animate 2s linear infinite;
    box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a,
      0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
    animation-delay: calc(-0.1s * var(--i));
  }
  @keyframes animate {
    0% {
      transform: translateX(0) scale(0.5);
    }
    50% {
      transform: translateX(200px) scale(1);
    }
    100% {
      transform: translateX(0) scale(0.5);
    }
  }
`;
