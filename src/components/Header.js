import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect, useRef } from "react";
import toque from "../photos/purple-toque.PNG";
import {HiBars3BottomRight} from "react-icons/hi2";
import resume from "../documents/nmResume.pdf";

const Header = () => {
    const [open, setOpen] = useState(false);

    let dropDownRef = useRef();

    useEffect(() => {

        let handler = (ev) => {
            //clicking outside of navbar close it
            if(dropDownRef.current && dropDownRef.current.contains(ev.target)){
                return 
            }
            
            setOpen(false);
            
        };
        
        document.addEventListener("mousedown", handler);
        //cleanup of the event listener
        return () => {
            document.removeEventListener("mousedown", handler)
            };

    },[]);

return(

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
            <Pdf href={resume} target='_blank' rel='resume'>Resume</Pdf>
        </NavBar>
        <div ref={dropDownRef}>
            <SmallNav onClick={()=> setOpen(!open)}>
                <HiBars3BottomRight className="icon"/>
            </SmallNav>
            <DropDown className={`${ open ? "active" : "inactive"}`} >
                <DropLink  to="#about-me" smooth>About Me</DropLink>
                <DropLink to="#my-work" smooth>My Work</DropLink>
                <DropLink  to="#contact" smooth>Contact</DropLink>
                <DropPdf href={resume} target='_blank' rel='resume'>Resume</DropPdf>
            </DropDown>
        </div>  
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
    position: absolute;
    right: 5%;

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

const Pdf = styled.a`
    margin-left: 5%;

    &:hover{
        color: rgba(90,173,125);
    }

    &:active {
        color: #8980cc;
    }
`;

const SmallNav = styled.button`
    display: none;
    height: 5vh;
    width:5vh;
    background-color: rgba(255,255,255, 0.9);
    @media screen and (max-width: 950px){
        display: block;
    }
    `;


const DropDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    position: absolute;
    right: 5%;
    top: 7vh;
    padding: 2%;
    background-color: rgba(255,255,255, 0.9);

    @media screen and (max-width: 450px){
        width: 100%;
        right: 0;
    }
`;

const DropLink = styled(HashLink)`
    padding: 0 2%;
    font-size: 2rem;

    &:hover {
        color: rgba(90,173,125);
    }

    &:active {
        color: #8980cc;
    }
    
`;

const DropPdf = styled.a`
    padding: 0 2%;
        font-size: 2rem;

        &:hover {
            color: rgba(90,173,125);
        }

        &:active {
            color: #8980cc;
        }
`;
