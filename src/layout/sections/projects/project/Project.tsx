import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

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
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TechText>{props.techText}</TechText>
            <FlexWrapper>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: chocolate;
`
const Image = styled.img`
`

const Link = styled.a`

`

const Title = styled.h3`

`

const Text = styled.p`

`

const TechText = styled.p`

`