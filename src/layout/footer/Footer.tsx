import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <SocialIconsList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"twitter"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialIconsList>
                <Copyright>Designed and built by Pavan MG with Love & Coffee</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
`
const SocialIconsList = styled.ul`
    display: flex;
    
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`
const Copyright = styled.small`

`