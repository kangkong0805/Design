import styled from "@emotion/styled";

export const bg = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #cfd1e1;
  overflow: hidden;
`;

export const label = styled.label`
  position: relative;
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #777; */
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    width: 60%;
    height: 4px;
    background: #444;
    border-radius: 4px;
  }
  input {
    position: absolute;
    :checked ~ .icon {
      left: 60px;
    }
    :checked ~ .icon .iconBox svg {
      color: #00ffe2;
      filter: drop-shadow(0 0 0 5px #00ffe2) drop-shadow(0 0 0 15px #00ffe2);
    }
    display: none;
  }
  appearance: none;
`;

export const icon = styled.div`
  position: absolute;
  left: 0;
  width: 60px;
  height: 100%;
  transition: 0.5s;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(#fff, #fff, #e3e3e3);
    filter: blur(1px);
    z-index: 1;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: #9d9d9d;
    filter: blur(1px);
  }
  .iconBox {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#dbdae1, #a3aaba);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1),
      15px 15px 15px rgba(0, 0, 0, 0.1), 20px 20px 15px rgba(0, 0, 0, 0.1),
      30px 30px 15px rgba(0, 0, 0, 0.1), inset 1px 1px 3px #fff;
    svg {
      color: #555;
      font-size: 1.5em;
      transition: 0.5s;
    }
  }
  .shadow {
    position: absolute;
    top: 30px;
    left: -12px;
    width: 84.85px;
    height: 300px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1),
      transparent,
      transparent
    );
    transform-origin: top;
    transform: rotate(315deg);
    pointer-events: none;
  }
`;