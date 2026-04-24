import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId}
                      width={props.width || "120"}
                      height={props.height || "120"}
                      viewBox={props.viewBox || "0 0 120 120"}/>
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    max-width: 120px;
    //padding: 40px 90px 62px;
`
const SkillTitle = styled.h3`
    margin-top: 20px;
`
