import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {SectionText} from "../../../components/SectionText.tsx";
import {GridWrapper} from "../../../components/GridWrapper.tsx";

const stacksArr = [
    {
        iconId: "html", title: "HTML"
    },
    {
        iconId: "css", title: "CSS"
    },
    {
        iconId: "js", title: "Java Script"
    },
    {
        iconId: "sass", viewBox: "0 -16 120 120", title: "Sass"
    },
    {
        iconId: "react", viewBox: "-4 -10 120 120", title: "React"
    },
    {
        iconId: "github", viewBox: "-6 -6 100 100", title: "GitHub"
    },
    {
        iconId: "ts", title: "Type Script"
    },
    {
        iconId: "sc", title: "Styled Components",
    },
    {
        iconId: "vscode", title: "VSCode",
    },
    {
        iconId: "tailwind", viewBox: "4 10 120 120", title: "Tailwind"
    },
    {
        iconId: "vector", title: "Vector"
    },
    {
        iconId: "gitIcon", viewBox: "-7 -7 120 120", title: "Git"
    }
]

export const Stack = () => {
    return (
        <StyledStack>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionText> Technologies I’ve been working with recently</SectionText>
                </FlexWrapper>
                <GridWrapper  minmax={"120px, auto"} gap={"90px"}>
                    {
                        stacksArr.map((s) => <Skill iconId={s.iconId}
                                                   viewBox={s.viewBox}
                                                   title={s.title}
                        />)
                    }
                </GridWrapper>
            </Container>
        </StyledStack>
    );
};

const StyledStack = styled.section``