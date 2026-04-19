import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import proj1 from "../../../assets/images/Rectangle 8.png";
import proj2 from "../../../assets/images/Rectangle 16.png";


export const Projects = () => {
    return (
        <StyledProjects>
            <FlexWrapper>
                <FlexWrapper>
                    <SectionTitle>Projects</SectionTitle>
                    <span>Things I’ve built so far</span>
                </FlexWrapper>
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
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    background-color: burlywood;
`