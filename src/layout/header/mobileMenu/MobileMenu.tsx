import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {LinkBlock} from "../../../components/iconBlock/LinkBlock.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const MobileMenu = (props: { menuItems: Array<{ section: string, id: string }> }) => {
    return (
        <StyledMobileMenu>
            <FlexWrapper justify={"center"} gap={"50px"}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href={`#${item.id}`} aria-label={`linck ${item.section} section`}>
                                {item.section}
                                <Mask>
                                    <span>{item.section}</span>
                                </Mask>
                                <Mask>
                                    <span>{item.section}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
                <LinkBlock/>
            </FlexWrapper>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.div`
    margin: 0;
    
    @media ${theme.media.tablet} {
        display: none;
    }
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`

const Link = styled.a`
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: transparent;
    position: relative;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.font};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.font};

        position: absolute;
        top: 30%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(-5px);
            color: ${theme.colors.fontGr};

            & + ${Mask} {
                transform: skewX(12deg) translateX(5px);
            }
        }
    }
`