import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";

type ProjectPropsType = {
    title: string;
    text: string;
    techText: string;
    src: string
};

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction={"column"} align={"center"}>
                <Image src={props.src} alt=""/>
                <Description>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <TechText>{props.techText}</TechText>

                    <LinkGroup>
                    <ProjectLink href="#" target="_blank">
                    <Icon iconId={"link"}  width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                    <span>Live Preview</span>
                    </ProjectLink>

                    <ProjectLink href="https://github.com" target="_blank">
                    <Icon iconId={"gitHubHeader"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                    <span>View Code</span>
                    </ProjectLink>
                    </LinkGroup>

                </Description>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #363636;
    max-width: 30%;
    min-height: 567px;
    width: 100%;
    margin: 65px 0;
    border-radius: 12px;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;

`

const Description = styled.div`
    padding: 25px 20px;
`



const Title = styled.h3`
`

const Text = styled.p`
    text-align: start;
    margin: 17px 0 12px;
`

const TechText = styled.p`

`

const LinkGroup = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
`;


const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${theme.colors.font};
    text-decoration: none;
    font-size: 16px;
    font-family: sans-serif;
    
    span {
        text-decoration: underline;
    }

    svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }

    &:hover {
        opacity: 0.7;
    }
`;