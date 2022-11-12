import styled from "@emotion/styled";

type SearchType = {
  active: boolean;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #297eff;
`;

export const Search = styled.div<SearchType>`
  position: relative;
  width: ${(e) => (e.active ? "360px" : "60px")};
  height: 60px;
  background: #fff;
  border-radius: 60px;
  transition: 0.5s;
  box-shadow: 0 0 0 0 5px #2573ef;
  overflow: hidden;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #287dfc;
    border-radius: 50%;
    transform: translate(-4px, -4px);
  }
  ::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 12px;
    background: #287dfc;
    transform: translate(6px, 6px) rotate(315deg);
  }
`;

export const Input = styled.div`
  position: relative;
  width: 300px;
  height: 60px;
  left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 10px 0;
  }
`;

export const Clear = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  right: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 15px;
    background: #999;
    transform: rotate(45deg);
  }
  ::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 15px;
    background: #999;
    transform: rotate(315deg);
  }
`;
