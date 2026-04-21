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
                <Description>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <TechText>{props.techText}</TechText>
                    <FlexWrapper>
                        <FlexWrapper direction={"row"}>
                            <Icon iconId={"link"}/>
                            <Link href={"#"}>Live Preview</Link>

                        </FlexWrapper>
                        <FlexWrapper>
                            <Icon iconId={props.iconId}/>
                            <Link href={"#"}>View Code</Link>

                        </FlexWrapper>
                    </FlexWrapper>
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

const Link = styled.a`

`

const Title = styled.h3`
`

const Text = styled.p`
    text-align: start;
    margin: 17px 0 12px;
`

const TechText = styled.p`

`