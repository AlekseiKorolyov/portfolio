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
            <FlexWrapper direction={"column"} align={"center"}>
                <Image src={props.src} alt=""/>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechText>{props.techText}</TechText>
                <FlexWrapper direction={"row"} align={"center"}>
                    <Icon iconId={"link"}/>
                    <Link href={"#"}>Live Preview</Link>
                    <Icon iconId={props.iconId}/>
                    <Link href={"#"}>View Code</Link>
                </FlexWrapper>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color:#363636;
    max-width: 25%;
    width: 100%;
    margin: 65px 48px;
    border-radius: 12px;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;

`

const Link = styled.a`

`

const Title = styled.h3`
    margin: 50px 0 15px;
`

const Text = styled.p`
    text-align: start;
`

const TechText = styled.p`

`