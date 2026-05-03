import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {LinkBlock} from "../../components/iconBlock/LinkBlock.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <WrapperFooter>
                    <Logo/>
                    <FlexWrapper align={"center"} justify={"flex-end"} gap={"30px"}>
                        <LinkInfo href="#">+91 12345 09876</LinkInfo>
                        <LinkInfo href="#">info@example.com</LinkInfo>
                        <LinkBlock/>
                    </FlexWrapper>
                </WrapperFooter>
                <Copyright>

                    Designed and built by
                    <span> Pavan MG </span>
                    with
                    <span> Love </span>
                    &
                    <span> Coffee </span>

                    </Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 40px 0;
`

const WrapperFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    width: 100%;
    border-bottom: 2px solid #42446e;

`

const LinkInfo = styled.a`
    margin: 0;
`

const Copyright = styled.p`
    padding: 20px 0;
    opacity: 0.5;
    text-align: center;
    background: linear-gradient(19.49304203489544deg, #00bdff 0%, #bf0085 100%);
    background-clip: text;

    span {
        color: transparent;
    }
`