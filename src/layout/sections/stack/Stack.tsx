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
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <Skill iconId={"html"}
                           title={"HTML"}/>
                    <Skill iconId={"css"}
                           title={"CSS"}/>
                    <Skill iconId={"js"}
                           title={"Java Script"}/>
                    <Skill iconId={"sass"}
                           title={"Sass"}/>
                    <Skill iconId={"react"}
                           title={"React"}/>
                    <Skill iconId={"github"}
                           title={"GitHub"}/>
                    <Skill iconId={"ts"}
                           title={"Type Script"}/>
                    <Skill iconId={"sc"}
                           title={"Styled Components"}/>
                    <Skill iconId={"vscode"}
                           title={"VSCode"}/>
                    <Skill iconId={"tailwind"}
                           title={"Tailwind"}/>
                    <Skill iconId={"vector"}
                           title={"Vector"}/>
                    <Skill iconId={"gitIcon"}
                           title={"Git"}/>
                </FlexWrapper>
            </Container>
        </StyledStack>
    );
};

const StyledStack = styled.section``