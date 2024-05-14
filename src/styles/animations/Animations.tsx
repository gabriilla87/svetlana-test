import {keyframes} from "styled-components";

export const MyAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const PixelItemAnim = keyframes`
    from {
        transform: scale(100%);
    }
    to {
        transform: scale(150%);
    }
`