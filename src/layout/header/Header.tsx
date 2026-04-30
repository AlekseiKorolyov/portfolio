import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";


const items = [
    {
        section: "About",
        id: "about"
    },
    {
        section: "Tech Stack",
        id: "stack",
    },
    {
        section: "Projects",
        id: "projects"
    },
    {
        section: "Contact",
        id: "contact"
    },
]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} gap={"50px"}>
                    <Logo href={"#contact"}/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
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
    background-color: #191919cc;
    z-index: 999999;
`