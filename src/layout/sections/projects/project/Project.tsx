import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";

type ProjectPropsType = {
    title: string;
    text: string;
    techText: string;
    src: string
    iconId: string
};

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TechText>{props.techText}</TechText>
            <FlexWrapper>
                <Icon iconId={"link"}/>
                <Link href={"#"}>Live Preview</Link>
                <Icon iconId={props.iconId}/>
                <Link href={"#"}>View Code</Link>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: chocolate;
    max-width: 373px;
    width: 100%;
    margin: 10px;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Link = styled.a`

`

const Title = styled.h3`

`

const Text = styled.p`

`

const TechText = styled.p`

`