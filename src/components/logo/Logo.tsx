import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";


export const Logo = () => {
    return (
        <LinkIcon href=''>
            <Icon iconId={"logo"} width={"100"} height={"60"} viewBox={"0 0 100 60"}/>
        </LinkIcon>
    );
};

const LinkIcon = styled.a`
    margin: 0;
`