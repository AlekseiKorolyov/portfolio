import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const HeaderMenu = (props: { menuItems: Array<{ section:string, id:string }> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href={`#${item.id}`}>
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
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.div`
    margin: 0;
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

const Link = styled.a`
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: transparent;
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
        height: 3px;
        background-color: ${theme.colors.font};
        
        position: absolute;
        top: 50%;
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
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.fontGr};
            
            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`