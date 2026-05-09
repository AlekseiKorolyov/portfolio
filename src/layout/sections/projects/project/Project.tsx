import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Commonts.ts";

type ProjectPropsType = {
    title: string;
    text: string;
    techText: string;
    src: string
};

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt="my project image"/>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechText>Tech stack :{props.techText}</TechText>

                <LinkGroup>
                    <ProjectLink href="#" target="_blank" aria-label="Linck my project">
                        <Icon iconId={"link"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                        Live Preview
                    </ProjectLink>

                    <ProjectLink href="https://github.com" target="_blank" aria-label="GitHub linck">
                        <Icon iconId={"gitHubHeader"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                        View Code
                    </ProjectLink>
                </LinkGroup>

            </Description>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    margin: 0 5px;
    background-color: #363636;
    border-radius: 12px;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;

`

const Description = styled.div`
    padding: 25px 30px;
`


const Title = styled.h3`
    ${font({weight: 400, Fmax: 32, Fmin: 26})}
`

const Text = styled.p`
    ${font({weight: 400, Fmax: 18, Fmin: 14})}
`

const TechText = styled.p`
    ${font({weight: 400, Fmax: 20, Fmin: 16})}
    margin-bottom: 30px;
    display: flex;

    span {
        white-space: nowrap;
    }
`

const LinkGroup = styled.div`
    display: flex;
    gap: 50px;
`


const ProjectLink = styled.a`
    ${font({Fmax: 16, Fmin: 16})}
    margin: 0;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${theme.colors.font};
    text-decoration: none;


    span {
        text-decoration: underline;
    }

    svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }

`;