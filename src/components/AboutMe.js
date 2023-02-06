import me from "../photos/me-lipa.jpeg";
import styled from "styled-components";
import waves from "../photos/light-waves.png";

const AboutMe = () => {
    // make background animation into ripple effect
    // make flex direction is column when screen small and width is 80%
return(
    <Wrapper>
        <Waves></Waves>
        <Container>
            <PhotoBox>
                <Photo src={me} alt="Natasha crouched with her dog (Lipa)"/>
            </PhotoBox>
            <AboutBox>
                <Title>ABOUT ME</Title>
                <Bio>Hi there! I’m Natasha (Tash), a former Rehab Assistant turned Full Stack Web Developer living in beautiful Victoria, BC. I’m a lifelong learner and lover of all things creative. I spend my free time exploring nature, doodling, and crafting jewelry with my trusty pup (Lipa) at my side. Let's collaborate and create something awesome!</Bio>
                {/* languages i know / programs i use */}
            </AboutBox>
        </Container>
    </Wrapper>
);
};

export default AboutMe;

const Wrapper = styled.div`
    /* height: 85vh; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Waves = styled.div`
    background-image: url(${waves});
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 120vh;
    margin-top: -25vh;
`;

const Container = styled.div`
    position: absolute;
    display: flex;

    @media screen and (max-width: 850px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
    }
`;

const PhotoBox = styled.div`
    width: 45vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px){
        width: 100vw;
    }
`;

const Photo = styled.img`
    width: 40vw; 
    height: 40vw; 
    object-fit: cover; 
    object-position: 60% 0;

    @media screen and (max-width: 900px){
        width: 80%;
        height: auto;
    }
`;

const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px){
        width: 90%;
    }
`;

const Title = styled.h2`
    
`;

const Bio = styled.p`
    text-align: center;
`;