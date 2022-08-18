import styled from "@emotion/styled";

type LineType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8f8f8;
`;

export const Safari = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 80px;
  box-shadow: 0 30px 10px #ccc, 0 30px 30px rgba(0, 0, 0, 0.25),
    0 28px 0 rgba(0, 0, 0, 0.5), 0 50px 60px rgba(0, 0, 0, 0.1);
  :hover {
    .niddle {
      transform: translateX(130px) rotate(405deg);
    }
  }
`;

export const CircleLines = styled.div`
  position: absolute;
  inset: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#1ec9ff, #2971e7);
  box-shadow: 0 -5px 0 5px rgba(0, 0, 0, 0.15),
    inset 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const line = styled.span<LineType>`
  --i: ${(e) => e.num};
  position: absolute;
  width: 2px;
  height: 24px;
  background: #fff;
  transform: translateY(-137.55px) rotate(calc(10deg * var(--i)));
  transform-origin: 1px 150px;
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.15));
  ::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 12px;
    background: #fff;
    transform-origin: 0 150px;
    transform: rotate(5deg);
  }
`;

export const Niddle = styled.div`
  position: absolute;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 50px;
  transform: translateX(130px) rotate(45deg);
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));

  transition: 2s cubic-bezier(0.47, -0.48, 0.46, 1.54);
  ::before {
    content: "";
    position: absolute;
    top: -150px;
    height: 150px;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 150px solid #fb3b2e;
  }
  ::after {
    content: "";
    position: absolute;
    top: 150px;
    height: 150px;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-top: 150px solid #fff;
  }
`;
