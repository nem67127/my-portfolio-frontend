import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import toque from "../photos/purple-toque.PNG";

const Header = () => {
return(
    // logo / title on left and hamburger dropdown on right
<Wrapper>
    <nav>
        <Box>
            <Toque src={toque} alt="purple toque"/>
            <div>digitallytash</div>
        </Box>
       
        
    </nav>
</Wrapper>
);
};

export default Header;

const Wrapper = styled.div`
    min-height: 7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    padding-left: 5vw;
    padding-right: 5vw;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: rgba(255,255,255, 0.9);
`;

const Box = styled.div`
    display: flex;
    align-items: center;
`;

const Toque = styled.img`
    display: inline-block;
    height: 5vh;
    margin-right: 5px;
`;