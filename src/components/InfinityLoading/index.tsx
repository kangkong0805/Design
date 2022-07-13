import * as S from "./style";

export default function InfinityLoading() {
    return (
        <S.Layout>
            <S.box1>
                <S.circle />
                <S.circle />
                <S.dot />
            </S.box1>
            <S.box2>
                <svg width="150" height="94">
                    <defs>
                        <linearGradient id="color">
                            <stop offset="0%" stopColor="#d2305c" />
                            <stop offset="25%" stopColor="#ff5e00" />
                            <stop offset="50%" stopColor="#ffeb00" />
                            <stop offset="75%" stopColor="#1cff00" />
                            <stop offset="100%" stopColor="#00b9ff" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
                </svg>
            </S.box2>
        </S.Layout>
    )
}