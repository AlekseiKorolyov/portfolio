import styled from "styled-components";
import photo from "../../../assets/images/50353683 1.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <FlexWrapper direction={"column"} align={"flex-start"}>
                    <span>Hi 👋,</span>
                    <h2>My name is Pavan MG</h2>
                    <h1>I build things for web</h1>
                </FlexWrapper>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 70vh;
`

const Photo = styled.img`
    width:349px;
    height:349px;
    border-width:9px;
    object-fit: cover;
`

