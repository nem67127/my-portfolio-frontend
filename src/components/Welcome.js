import styled from "styled-components";
import schoenimg from"../photos/schoenlake.jpeg";

const Welcome = () => {
return (
    // create another background with only water and the mountains
    // have WELCOME rise up from behind the mountains 
        <Wrapper id="welcome">
            <Rightside>
                <Greeting>WELCOME</Greeting>
            </Rightside>
        </Wrapper>
);
}

export default Welcome;

const Wrapper = styled.div`
    background-image: url(${schoenimg});
    background-size: cover;
    background-position: center center;
    height: 100vh;
    width: 100%;
`;

const Rightside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 25vw;
`;

const Greeting = styled.h1`
    padding-top: 7vh;
    font-size: 7vw;
`;