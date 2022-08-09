import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #07252d;
`;

export const H2 = styled.h2`
  position: relative;
  font-size: 6em;
  letter-spacing: 15px;
  color: #0e3742;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
  line-height: 0.7em;
  outline: none;
  animation: animtate 5s linear infinite;
  @keyframes animtate {
    0%,
    18%,
    20%,
    50.1%,
    60%,
    65.1%,
    80%,
    90.1%,
    92.1% {
      color: #0e3742;
      text-shadow: none;
    }
    18.1%,
    20.1%,
    30%,
    50%,
    60.1%,
    65%,
    80.1%,
    90%,
    92.1%,
    100% {
      color: #fff;
      text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4,
        0 0 80px #03bcf4, 0 0 160px #03bcf4;
    }
  }
`;
