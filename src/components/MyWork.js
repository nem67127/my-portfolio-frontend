
import { useEffect, useState } from "react";
import styled from "styled-components";

const MyWork = () => {

    //fetch projects from MongoDB and set them inside
    const [projects, setProjects] = useState("");

    //useEffect to fetch projects
    useEffect(()=>{
        fetch(`https://my-portfolio-api-x0sg.onrender.com/projects`)
            .then((res) => res.json())
            .then((data) => {
                setProjects(data.data);
        }).catch((err)=>{
            console.log(err);
        })  
    },[])

    

return (
    // may have pop up when clicked to be bigger details or go to another page?
    <Wrapper>
        <Title>MY WORK</Title>
        <div className="big-section carousel" >
            <div className="inner-carousel">
                {projects.length > 0 ? projects.map((project)=>{
                    return (
                    <Project key={project.name}>
                        <ImgWrapper>
                        <Img className="img-mywork" src={require(`../photos/${project.photo}`)} alt={project.name}/>
                        </ImgWrapper>
                        <InfoBox>
                            <Link href={project.link}>{project.name}</Link>
                            <p>{project.description}</p>
                        </InfoBox>
                    </Project>)
                }): <p>loading</p>}
            </div>
        </div>
    </Wrapper>
);
}

export default MyWork;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    font-size: calc(20px + 2vw);
    height: 20%;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-bottom: 2%;
`;

const InfoBox = styled.div`
    visibility: hidden;
    position: absolute;
    width: 100%;
    min-height: 25%;
    top: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgba(237,240,241, 0.9);
    justify-content: center;
`;

const Project = styled.div`
    margin-right: 7.5vw;
    width: 80vw;
    height: 95%;
    background: linear-gradient(217deg, rgba(237,240,241, 0.8), rgba(187, 227, 217, 0) 70.71%),
            linear-gradient(336deg, rgba(90,173,125, 0.8), rgba(178, 203, 178, 0) 70.71%),
            linear-gradient(140deg, rgba(199,219,229, 0.8), rgba(157, 157, 167, 0) 70.71%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    position:relative;

    &:hover ${InfoBox} {
    visibility: visible;
    };

    &:nth-child(1) {
        margin-left: 7.5vw;
    }

`;

const ImgWrapper = styled.div`
    height: 100%;
    display:flex;
    justify-content: center;
`;

const Img = styled.img`
    object-fit: scale-down;
    height: 90%;
    align-self: center;
`;

const Link = styled.a`
    text-decoration: none;
    font-size: 2.5vw;
    color: #334036;
    &:hover {
        color: rgba(90,173,125);
    }
`;

