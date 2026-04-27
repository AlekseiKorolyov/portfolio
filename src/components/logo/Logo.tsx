import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

type LogoPropsType = {
    href?: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <LinkIcon href={props.href}>
            <Icon iconId={"logo"} width={"100"} height={"60"} viewBox={"0 0 100 60"}/>
        </LinkIcon>
    );
};

const LinkIcon = styled.a`
    margin: 0;
`