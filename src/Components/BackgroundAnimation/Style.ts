import styled from "styled-components";
import img from "../../Assets/tlqkfto.png"

type StyledProps = {
    delay: string;
    length: number;
}

export const BackgroundLayer = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #333;
`;

export const Banner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
`

export const Block = styled.div<StyledProps>`
    position: relative;
    display: block;
    width: ${props => {return 100/props.length+"vw"}};
    height: ${props => {return 100/props.length+"vh"}};
    background: #fff;
    animation: animate .5s ease-in-out forwards;
    animation-delay: ${props => props.delay};
    opacity: 0;
    
    &:nth-child(even) {
        animation: animate .8s ease-in-out forwards;
        animation-delay: ${props => props.delay};
    }
    &:nth-child(7n+1) {
        animation: animate 2s ease-in-out forwards;
        animation-delay: ${props => props.delay};
    }
    &:nth-child(7n+7) {
        animation: animate 1.2s ease-in-out forwards;
        animation-delay: ${props => props.delay};
    }
    
    @keyframes animate {
        0%{
            transform: scale(0) translateY(1000px);
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 1;
            transform: scale(1) translateY(0px);
        }
    }


`
