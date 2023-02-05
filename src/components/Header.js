import styled from "styled-components";

const Header = () => {
return(
    // logo / title on left and hamburger dropdown on right
<Wrapper>
    <div>digitallytash</div>
    {/* <div>Menu</div> */}
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