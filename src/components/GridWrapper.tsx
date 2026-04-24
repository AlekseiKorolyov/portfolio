import styled from "styled-components";


type GridWrapperPropsType = {
    autoRows?: string;
    gap?: string;
    minmax?:string;
}

export const GridWrapper = styled.div<GridWrapperPropsType>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${props => props.minmax}));
    gap: ${ props => props.gap || null};
    `
