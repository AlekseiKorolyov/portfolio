import styled from "styled-components";
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
                <Image src={props.src} alt=""/>
                <Description>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <TechText>{props.techText}</TechText>

                    <LinkGroup>
                    <ProjectLink href="#" target="_blank">
                    <Icon iconId={"link"}  width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                    Live Preview
                    </ProjectLink>

                    <ProjectLink href="https://github.com" target="_blank">
                    <Icon iconId={"gitHubHeader"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                    View Code
                    </ProjectLink>
                    </LinkGroup>

                </Description>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #363636;
    max-width: 375px;
    min-height: 567px;
    //width: 100%;
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
    padding: 25px 10px;
`



const Title = styled.h3`
`

const Text = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0;
    text-decoration: none;
    margin: 15px 0;
`

const TechText = styled(Text)`
    font-size: 16px;
    margin-bottom: 30px;
`

const LinkGroup = styled.div`
    display: flex;
    justify-content: center;
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