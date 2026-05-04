import styled from "styled-components";


type SliderPropsType = {
    width?: string
}

export const Slider = styled.div<SliderPropsType>`
    max-width: ${props => props.width || null};
    `