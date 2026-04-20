import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {SectionText} from "../../../components/SectionText.tsx";

export const Stack = () => {
    return (
        <StyledStack>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionText> Technologies I’ve been working with recently</SectionText>
                </FlexWrapper>
                <FlexWrapper justify={"flex-start"} wrap={"wrap"}>
                    <Skill iconId={"html"}
                           title={"HTML"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sapiente?"}/>
                    <Skill iconId={"css"}
                           title={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sapiente?"}/>
                    <Skill iconId={"js"}
                           title={"Java Script"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sapiente?"}/>
                    <Skill iconId={"sass"}
                           title={"Sass"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sapiente?"}/>
                    <Skill iconId={"react"}
                           title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sapiente?"}/>
                    <Skill iconId={"github"}
                           title={"GitHub"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sapiente?"}/>
                    <Skill iconId={"ts"}
                           title={"Type Script"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sapiente?"}/>
                    <Skill iconId={"sc"}
                           title={"Styled Components"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sapiente?"}/>
                </FlexWrapper>
            </Container>
        </StyledStack>
    );
};

const StyledStack = styled.section``