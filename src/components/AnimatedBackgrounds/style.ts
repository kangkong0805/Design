import styled from "@emotion/styled";

type Itype = {
  num: number;
};

export const Section = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const I = styled.i<Itype>`
  --i: ${(e) => e.num};
  position: relative;
  width: 60px;
  height: 60px;
  background: #222;
  :nth-child(5n + 1) {
    animation: animate 5s linear infinite, animateBg 5s linear infinite;
    animation-delay: calc(-1s * var(--i));
  }
  :nth-child(5n + 2) {
    animation: animate 5s linear infinite, animateBg 5s linear infinite;
    animation-delay: calc(-1.5s * var(--i));
  }
  :nth-child(5n + 3) {
    animation: animate 5s linear infinite, animateBg 5s linear infinite;
    animation-delay: calc(-2s * var(--i));
  }
  :nth-child(5n + 4) {
    animation: animate 5s linear infinite, animateBg 5s linear infinite;
    animation-delay: calc(-2.5s * var(--i));
  }
  :nth-child(5n + 5) {
    animation: animate 5s linear infinite, animateBg 5s linear infinite;
    animation-delay: calc(-3s * var(--i));
  }
  @keyframes animate {
    0%,
    20% {
      background: #222;
    }
    60% {
      background: #0f0;
    }
    80%,
    100% {
      background: #222;
    }
  }
  @keyframes animateBg {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;
