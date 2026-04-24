import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import proj1 from "../../../assets/images/Rectangle-8.webp";
import proj2 from "../../../assets/images/Rectangle-16.webp";
import proj3 from "../../../assets/images/Rectangle-18.webp";
import proj4 from "../../../assets/images/Rectangle-22.webp";
import proj5 from "../../../assets/images/Rectangle-23.webp";
import proj6 from "../../../assets/images/Rectangle-24.webp";
import {Container} from "../../../components/Container.ts";
import {SectionText} from "../../../components/SectionText.tsx";


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <SectionTitle>Projects</SectionTitle>
                    <SectionText>Things I’ve built so far</SectionText>
                </FlexWrapper>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj1}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj2}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj3}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj4}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj5}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj6}
                    />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
`