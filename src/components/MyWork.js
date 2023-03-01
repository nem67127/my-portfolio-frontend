
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {FaArrowRight, FaArrowLeft, FaGithub, FaExternalLinkSquareAlt} from "react-icons/fa";

const MyWork = () => {

    //fetch projects from MongoDB and set them inside
    const [projects, setProjects] = useState("");
    const [status, setStatus] = useState("loading");
    const [imageIndex, setImageIndex] = useState(0);

    //useEffect to fetch projects
    useEffect(()=>{
        //change before push!!
        fetch(`https://my-portfolio-api-x0sg.onrender.com/projects`)
            .then((res) => res.json())
            .then((data) => {
                setProjects(data.data);
                setStatus("idle");
        }).catch((err)=>{
            console.log(err);
        })  
    },[])

    if(status === "loading") {
        return (
            //create a loading component
            <div>loading</div>
        )
    };

    const NextArrow = ({onClick})=>{
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight/>
            </div>
        )
    };

    const PrevArrow = ({onClick})=>{
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft/>
            </div>
        )
    }

    const settings = {
        infinite: true, 
        lazyLoad: true,
        speed: 300,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    };

return (
    // may have pop up when clicked to be bigger details or go to another page?
    <Wrapper id="my-work">
        <Title>MY WORK</Title>
        <Section>
            <Slider {...settings}>
                {projects.map((project, index)=>{

                    const link = project.link;
                    const github = link.includes("github");
                    return (
                    <Project key={project.name} className={index === imageIndex ? "slide activeSlide": "slide"} >
                        <ImgWrapper>
                        <img className="img-mywork" src={require(`../photos/${project.photo}`)} alt={project.name}/>
                        </ImgWrapper>
                        <InfoBox>
                            <TopBox>
                                <h2>{project.name}</h2>
                                {github ? <Link href={project.link} target="_blank"><FaGithub className="icon"/></Link> : <Link href={project.link} target="_blank"><FaExternalLinkSquareAlt className="icon"/></Link> }    
                            </TopBox>
                            <Info>{project.description}</Info>
                        </InfoBox>
                    </Project>)
                })}
            </Slider>
        </Section>
    </Wrapper>
);
}

export default MyWork;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7vh;
`;

const Title = styled.h2`
    margin-bottom: 2%;
`;

const InfoBox = styled.div`
    visibility: hidden;
    position: absolute;
    width: 100%;
    min-height: 35%;
    top: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(237,240,241, 0.9);
    padding: 20px;
    /* border: 1px solid red; */
`;

const TopBox = styled.div`
    display: flex;
    align-items: center;

`;

const Link = styled.a`
    position: absolute;
    right: 5%;
    width: 4vh;
    height: 4vh;
    
    text-decoration: none;
    color: #334036;

    &:hover {
        color: rgba(90,173,125);
    }

    @media screen and (max-width: 950px){
        width: 3vh;
        height: 3vh;
    }
    
    @media screen and (max-width: 450px){
        width: 2vh;
        height: 2vh;
    }
`;

const Section = styled.div`
    width: 80%;  
`;

const Project = styled.div`
    background: linear-gradient(217deg, rgba(237,240,241, 0.8), rgba(187, 227, 217, 0) 70.71%),
            linear-gradient(336deg, rgba(90,173,125, 0.8), rgba(178, 203, 178, 0) 70.71%),
            linear-gradient(140deg, rgba(199,219,229, 0.8), rgba(157, 157, 167, 0) 70.71%);
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover ${InfoBox} {
    visibility: visible;
    };

`;

const ImgWrapper = styled.div`
    min-height: 40vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;


const Info = styled.p`
    /* border: 1px solid pink; */
`;

