import styled from "styled-components";
import {PixelItemAnim} from "../styles/animations/Animations";

export const PixelItem = styled.div`
    height: 50px;
    width: 50px;
    background-color: dimgrey;
    gap: 10px;

    &:hover {
        background-color: white;
        animation: ${PixelItemAnim} 500ms linear;
    }
`
