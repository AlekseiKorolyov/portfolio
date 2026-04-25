import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const LinkBlock = () => {
    return (
        <StyledIconBlock>
            <a href="#">
                <Icon iconId={"gitHubHeader"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
            </a>
            <a href="#">
                <Icon iconId={"twitter"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
            </a>
            <a href="#">
                <Icon iconId={"linkedin"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
            </a>
        </StyledIconBlock>
    );
};

const StyledIconBlock = styled.nav`
    margin: 0;
    display: flex;
    gap: 20px;
`