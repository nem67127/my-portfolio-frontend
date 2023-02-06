import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import toque from "../photos/purple-toque.PNG";
import {HiBars3BottomRight} from "react-icons/hi2";

const Header = () => {
return(
// will have to do ternary to change class on what to show depending on size of screen 
<Wrapper>
    <HashLink to="#welcome" smooth>
        <Box>
            <Toque src={toque} alt="purple toque"/>
            <div>digitallytash</div>
        </Box>
        <SmallBox>
            <Toque src={toque} alt="purple toque"/>
        </SmallBox>
    </HashLink>
        <NavBar>
            <Link to="#about-me" smooth>About Me</Link>
            <Link to="#my-work" smooth>My Work</Link>
            <Link to="#contact" smooth>Contact</Link>
        </NavBar>
        <SmallNav>
            <HiBars3BottomRight className="icon"/>
        </SmallNav>
</Wrapper>
);
};

export default Header;

const Wrapper = styled.div`
    width: 100%;
    min-height: 7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    padding-left: 5vw;
    padding-right: 5vw;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: rgba(255,255,255, 0.9);
`;

const Box = styled.div`
    display: flex;
    align-items: center;

    &:hover {
        color: rgba(90,173,125);
    }

    @media screen and (max-width: 450px){
            display: none;

            &:hover {
                opacity: 0.7;
            }
        }
`;

const SmallBox = styled.div`
    display: none;
    
    @media screen and (max-width: 450px){
            display: block;
        }
    `;

const Toque = styled.img`
    display: inline-block;
    height: 5vh;
    margin-right: 5px;
`;

const NavBar = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 950px){
        display: none;
    }
`;

const Link = styled(HashLink)`
    margin-left: 5%;

    &:hover{
        color: rgba(90,173,125);
    }

    &:active {
        color: #8980cc;
    }

`;

const SmallNav = styled.div`
    display: none;
    height: 5vh;
    width:5vh;

    @media screen and (max-width: 950px){
        display: block;
    }
    `;

