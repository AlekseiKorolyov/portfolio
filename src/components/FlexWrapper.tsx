import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${ props => props.direction || null};
    justify-content: ${ props => props.justify || null};
    align-items: ${ props => props.align || null};
    flex-wrap: ${ props => props.wrap || null};
    gap: ${ props => props.gap || null};
    height: 100%;
`