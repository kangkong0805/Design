import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Box = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
  margin: 10px;
  background: #000;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Pixel = styled(Box)`
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: repeating-linear-gradient(
        0deg,
        #0006,
        #0006,
        4%,
        transparent 4%,
        transparent 96%,
        #0006 96%,
        #0006 100%
      ),
      repeating-linear-gradient(
        90deg,
        #0006 0%,
        #0006 4%,
        transparent 4%,
        transparent 96%,
        #0006 96%,
        #0006 100%
      );
    background-size: 10px 10px;
  }
  img {
    image-rendering: pixelated;
    filter: contrast(1.4);
  }
`;
