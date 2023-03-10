import me from "../photos/me-lipa.jpeg";
import styled from "styled-components";
import waves from "../photos/light-waves.png";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa"

const AboutMe = () => {
    // make background animation into ripple effect
    // make flex direction is column when screen small and width is 80%
return(
    <Wrapper id="about-me">
        <Waves></Waves>
        <Container>
            <PhotoBox>
                <Photo src={me} alt="Natasha crouched with her dog (Lipa)"/>
            </PhotoBox>
            <AboutBox>
                <Title>ABOUT ME</Title>
                <Bio>Hi there! I’m Natasha (Tash), a former Rehab Assistant turned Full Stack Web Developer living in beautiful Victoria, BC. I’m a lifelong learner and lover of all things creative. I spend my free time exploring nature, doodling, and crafting jewelry with my trusty pup (Lipa) at my side. Let's collaborate and create something awesome!</Bio>
                {/* languages i know / programs i use */}
                <Box>
                    <Icon href="https://www.linkedin.com/in/natashamoses/" target='_blank' rel='linked-in'><LinkedIn/></Icon>
                    <Icon href="https://github.com/nem67127" target='_blank' rel='github'><Github/></Icon>
                    <Icon href="https://www.instagram.com/digitallytash/" target='_blank' rel='insta'><Insta/></Icon>
                </Box>
            </AboutBox>
            
        </Container>
    </Wrapper>
);
};

export default AboutMe;

const Wrapper = styled.div`
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 7vh;

    @media screen and (max-width: 950px){
        min-height: 70vh;
    }

    @media screen and (max-width: 450px){
        min-height: 55vh;
    }
`;

const Waves = styled.div`
    background-image: url(${waves});
    background-size: cover;
    background-position: center center;
    width: 100%;
    min-height: 110vh;
    margin-top: -25vh;
    object-fit: scale-down;

    @media screen and (max-width: 950px){
        min-height: 90vh;

    }

    @media screen and (max-width: 450px){
        min-height: 65vh;
    }
`;

const Container = styled.div`
    position: absolute;
    display: flex;

    @media screen and (max-width: 950px) {
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;

const PhotoBox = styled.div`
    width: 45vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 950px){
        width: 100vw;
    }
`;

const Photo = styled.img`
    width: 40vw; 
    height: 40vw; 
    object-fit: cover; 
    object-position: 60% 0;

    @media screen and (max-width: 950px){
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

    @media screen and (max-width: 950px){
        width: 90%;
        margin-top: 5%;
    }

`;

const Title = styled.h2`
    
`;

const Bio = styled.p`
    text-align: center;
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5%;
    `;

const Icon = styled.a`
    margin-right: 10%;
    min-height: 3vw;
    min-width: 3vw;
`;

const LinkedIn = styled(FaLinkedin)`
    width: 100%;
    height: 100%;
`;

const Github = styled(FaGithubSquare)`
    width: 100%;
    height: 100%;
`;

const Insta = styled(FaInstagram)`
    width: 100%;
    height: 100%;
`;