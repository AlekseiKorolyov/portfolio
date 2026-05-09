import styled from "styled-components";
import photo from "../../../assets/images/50353683-1.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../styles/Theme.ts";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import {font} from "../../styles/Commonts.ts";

export const About = () => {
    return (
        <StyledAbout id={"about"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <FlexWrapper direction={"column"} justify={"center"}>
                        <TextAbout>Hi 👋,</TextAbout>
                        <TextAbout>My name is</TextAbout>
                        <Name>Pavan MG</Name>
                        <TypewriterWrapper>
                            <Typewriter
                                options={{
                                    strings: ["I build things for web", "A Web Developer", "A Frontend Developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </TypewriterWrapper>
                    </FlexWrapper>
                    <PhotoWrapper>
                        <Tilt>
                            <Photo src={photo} alt="My photo"/>
                        </Tilt>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    )
        ;
};

const StyledAbout = styled.section`
    padding-top: 200px;
    min-height: 100vh;
    display: flex;
    overflow: hidden;

}

${FlexWrapper} {
    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
        gap: 50px;
        text-align: center;
    }
`

const TextAbout = styled.span`
    ${font({weight: 700, color: "#d9d9d9", Fmax: 58, Fmin: 29})}
    display: block;
    width: 100%;
    text-align: left;

`

const PhotoWrapper = styled.div`
    margin: 0;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 60%;
        transform: translate(-50%, -50%);
        width: 628px;
        height: 628px;
        background-image: url("../../../../public/Abstract.svg");
        background-size: contain;
        z-index: -1; /* Ставим СТРОГО под фото */
    }
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    border-width: 8px;
    object-fit: cover;
    background-clip: content-box;
`

const Name = styled(TextAbout)`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    color: transparent;
`

const TypewriterWrapper = styled(TextAbout)``