import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {SectionText} from "../../../components/SectionText.tsx";
import {GridWrapper} from "../../../components/GridWrapper.tsx";



export const Stack = () => {
    return (
        <StyledStack>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionText> Technologies I’ve been working with recently</SectionText>
                </FlexWrapper>
                <GridWrapper  minmax={"120px, auto"} gap={"90px"}>
                    <Skill iconId={"html"}
                           title={"HTML"}/>
                    <Skill iconId={"css"}
                           title={"CSS"}/>
                    <Skill iconId={"js"}
                           title={"Java Script"}/>
                    <Skill iconId={"sass"} viewBox={"0 -16 120 120"}
                           title={"Sass"}/>
                    <Skill iconId={"react"} viewBox={"-4 -10 120 120"}
                           title={"React"}/>
                    <Skill iconId={"github"} viewBox={"-6 -6 100 100"}
                           title={"GitHub"}/>
                    <Skill iconId={"ts"}
                           title={"Type Script"}/>
                    <Skill iconId={"sc"}
                           title={"Styled Components"}/>
                    <Skill iconId={"vscode"}
                           title={"VSCode"}/>
                    <Skill iconId={"tailwind"} viewBox={"4 10 120 120"}
                           title={"Tailwind"}/>
                    <Skill iconId={"vector"}
                           title={"Vector"}/>
                    <Skill iconId={"gitIcon"} viewBox={"-7 -7 120 120"}
                           title={"Git"}/>
                </GridWrapper>
            </Container>
        </StyledStack>
    );
};

const StyledStack = styled.section``