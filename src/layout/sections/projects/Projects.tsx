import {SectionTitle} from "../../../components/SectionTitle.tsx";
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
import {GridWrapper} from "../../../components/GridWrapper.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {theme} from "../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";



const progectsArr = [
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techText: "HTML , JavaScript, SASS, React",
        src: proj1
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techText: "HTML , JavaScript, SASS, React",
        src: proj2
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techText: "HTML , JavaScript, SASS, React",
        src: proj3
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techText: "HTML , JavaScript, SASS, React",
        src: proj4
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techText: "HTML , JavaScript, SASS, React",
        src: proj5
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techText: "HTML , JavaScript, SASS, React",
        src: proj6
    }
]

export const Projects = () => {
    return (
        <StyledProjects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <GridWrapper minmax={"320px, auto"} gap={"50px"}>
                    {
                        progectsArr.map((p) => <Project title={p.title} text={p.text} techText={p.techText} src={p.src}
                        />)
                    }
                </GridWrapper>
                <Slider progectsArr={items}/>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    ${GridWrapper} {
        @media ${theme.media.tablet} {
            display: none;
        }
    }

    ${FlexWrapper} {
        display: none;

        @media ${theme.media.tablet} {
            display: block;
            max-width: 80vw;

            &:hover {
                transform: none;
            }
        }
    }
`





   /* <FlexWrapper direction={"column"} justify={"center"} align={"center"} gap={"20px"}>
    <Slider/>
    <Pagination>
    <span></span>
<span className="active"></span>
<span></span>
</Pagination>
</FlexWrapper>*/


/*
const Pagination = styled.span`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: rgba(153, 153, 153, 50);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${theme.colors.font};
            width: 20px;
        }
    }
`*/
