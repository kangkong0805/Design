import styled from "@emotion/styled";

type Span = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #607d8b;
`;

export const Container = styled.div`
  position: relative;
  top: 50px;
`;

export const Cup = styled.div`
  position: relative;
  width: 280px;
  height: 300px;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-bottom-right-radius: 45%;
  border-bottom-left-radius: 45%;
`;

export const Top = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-radius: 50%;
`;

export const Circle = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  width: calc(100% - 20px);
  height: 50px;
  background: linear-gradient(to left, #f9f9f9, #d9d9d9);
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Tea = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, #c57e65, #e28462);
  border-radius: 50%;
`;

export const Handle = styled.div`
  position: absolute;
  right: -70px;
  top: 40px;
  width: 160px;
  height: 180px;
  border: 25px solid #dcdcdc;
  border-left: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-radius: 50%;
  transform: rotate(42deg);
`;

export const Plate = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 200px;
  background: linear-gradient(to right, #f9f9f9, #e7e7e7);
  border-radius: 50%;
  box-shadow: 0 35px 35px rgba(0, 0, 0, 0.2);
  ::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    background: linear-gradient(to left, #f9f9f9, #e7e7e7);
  }
  ::after {
    content: "";
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    background: radial-gradient(
      rgba(0, 0, 0, 0.2) 25%,
      transparent,
      transparent
    );
    border-radius: 50%;
  }
`;

export const Vapour = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  padding: 0 20px;
`;

export const Span = styled.span<Span>`
  position: relative;
  bottom: 50px;
  display: block;
  margin: 0 2px 50px;
  min-width: 8px;
  height: 120px;
  background: #fff;
  border-radius: 50%;
  animation: animate 5s linear infinite;
  opacity: 0;
  filter: blur(8px);
  animation-delay: calc(var(--i) * -0.5s);
  @keyframes animate {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    50% {
      transform: translateY(-150px) scale(5);
    }
    95% {
      opacity: 0;
    }
    100% {
      transform: translateY(-200px) scale(10);
    }
  }

  --i: ${(e) => e.num};
`;
