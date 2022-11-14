import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #eff0f4;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 0;
  gap: 40px 60px;
`;

export const Drop = styled.div`
  --clr: ${({ clr }: { clr: string }) => clr};
  position: relative;
  width: 350px;
  height: 350px;
  box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
    25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05),
    inset -20px -20px 25px rgba(255, 255, 255, 0.9);
  transition: 0.5s ease-in-out;
  :nth-child(1) {
    border-radius: 57% 43% 43% 57% / 43% 43% 57% 57%;
  }
  :nth-child(2) {
    border-radius: 61% 39% 52% 48% / 44% 59% 41% 56%;
  }
  :nth-child(3) {
    border-radius: 35% 65% 31% 69% / 57% 59% 41% 43%;
  }
  :hover {
    border-radius: 50%;
  }
  ::before {
    content: "";
    position: absolute;
    top: 50px;
    left: 85px;
    width: 35px;
    height: 35px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.9;
  }
  ::after {
    content: "";
    position: absolute;
    top: 90px;
    left: 110px;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.9;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 40px;
  gap: 15px;
  h1 {
    position: relative;
    margin: 0;
    width: 80px;
    height: 80px;
    background: #eff0f4;
    border-radius: 50%;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
      inset -2px -5px 10px rgba(255, 255, 255, 1),
      15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0, 0.025);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: var(--clr);
  }
  a {
    position: relative;
    padding: 10px 25px;
    background: var(--clr);
    text-decoration: none;
    color: #fff;
    border-radius: 25px;
    font-weight: 500;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0, 0.25);
    opacity: 0.75;
    transition: 0.5s;
    ::before {
      content: "";
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 65%;
      height: 5px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.5);
    }
    :hover {
      opacity: 1;
    }
  }
`;
