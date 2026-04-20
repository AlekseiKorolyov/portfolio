import styled from "styled-components";
import photo from "../../../assets/images/50353683 1.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <TextWrapper>
                        <SmallText>Hi 👋,</SmallText>
                        <Name>My name is Pavan MG</Name>
                        <AboutTitle>I build things for web</AboutTitle>
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
    min-height: 100vh;
    display: flex;
`

const TextWrapper = styled.div`
    text-align: start;
`

const Photo = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 50%;
    border-width: 9px;
    object-fit: cover;
    background-clip: content-box;
`

const PhotoWrapper = styled.div`
    width: 440px;
    height: 440px;
    position: relative;
    z-index: 0;
    
`

const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
`

const Name = styled.h2`
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 10px 0;
    background: linear-gradient(19.49304203489544deg, #00c0fd 0%, #e70faa 100%);
    background-clip: text;
    color: transparent;
`
const AboutTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
`


