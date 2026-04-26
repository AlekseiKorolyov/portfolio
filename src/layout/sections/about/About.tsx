import styled from "styled-components";
import photo from "../../../assets/images/50353683-1.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";

export const About = () => {
    return (
        <StyledAbout id={"about"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <TextWrapper>
                        <span>Hi 👋,</span>
                        <span>My name is</span>
                        <span><Name>Pavan MG</Name></span>
                        <span>I build things for web </span>
                    </TextWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    padding-top: 200px;
    min-height: 100vh;
    display: flex;
`

const TextWrapper = styled.h2`
    max-width: 636px;
    font-family: Poppins sans-serif;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
    text-decoration: none;
    margin: 0;

    span {
        display: block;
    }
`

const PhotoWrapper = styled.div`
    margin: 0;

    ::before {
        content: "";
        width: 628px;
        height: 628px;
        background-image: url("../../../assets/images/Abstract.svg");
    }
`

const Photo = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 50%;
    border-width: 9px;
    object-fit: cover;
    background-clip: content-box;
`

const Name = styled(TextWrapper)`
    background: linear-gradient(19.49304203489544deg, #00c0fd 0%, #e70faa 100%);
    background-clip: text;
    color: transparent;
`



