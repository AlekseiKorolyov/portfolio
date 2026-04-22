import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {LinkBlock} from "../../components/iconBlock/LinkBlock.tsx";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <LinkBlock/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
`