import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import proj1 from "../../../assets/images/Rectangle 8.png";
import proj2 from "../../../assets/images/Rectangle 16.png";
import proj3 from "../../../assets/images/Rectangle 18.png";
import proj4 from "../../../assets/images/Rectangle 22.png";
import proj5 from "../../../assets/images/Rectangle 23.png";
import proj6 from "../../../assets/images/Rectangle 24.png";
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
                             iconId={"gitHub"}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj2}
                             iconId={"gitHub"}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj3}
                             iconId={"gitHub"}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj4}
                             iconId={"gitHub"}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj5}
                             iconId={"gitHub"}
                    />
                    <Project title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             techText={"Tech stack : HTML , JavaScript, SASS, React"}
                             src={proj6}
                             iconId={"gitHub"}
                    />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
`