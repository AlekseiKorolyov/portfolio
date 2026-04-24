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
                    <FlexWrapper align={"center"} justify={"space-around"}>
                        <a href="#">+91 12345 09876</a>
                        <a href="#">info@example.com</a>
                        <LinkBlock/>
                    </FlexWrapper>
                </WrapperFooter>
                <Copyright>
                    {/*<FooterGradient>*/}
                    {/*</FooterGradient>*/}
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

const Copyright = styled.p`
    padding: 20px 0;
    font-weight: 400;
    font-size: 12px;
    opacity: 0.5;
    text-align: center;
    background: linear-gradient(19.49304203489544deg, #00c0fd 0%, #e70faa 100%);
    background-clip: text;
    span {
        color: transparent;
    }
`