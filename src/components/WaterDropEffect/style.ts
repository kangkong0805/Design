import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #eee;
`;

export const drop = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(0, 0, 0, 0.05), 15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  SVG {
    font-size: 5rem;
    color: #4444;
  }
  ::before {
    content: "";
    position: absolute;
    top: 35px;
    left: 25px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
  }
  ::after {
    content: "";
    position: absolute;
    top: 25px;
    left: 50px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
  }
`;