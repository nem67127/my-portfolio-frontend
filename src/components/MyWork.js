
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";

const MyWork = () => {

    //fetch projects from MongoDB and set them inside
    const [projects, setProjects] = useState("");
    const [status, setStatus] = useState("loading");
    const [imageIndex, setImageIndex] = useState(0);

    //useEffect to fetch projects
    useEffect(()=>{
        //change before push!!
        fetch(`http://localhost:9000/projects`)
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
    <Wrapper>
        <Title>MY WORK</Title>
        <Section>
            <Slider {...settings}>
                {projects.map((project, index)=>{
                    return (
                    <Project key={project.name} className={index === imageIndex ? "slide activeSlide": "slide"} >
                        <ImgWrapper>
                        <img className="img-mywork" src={require(`../photos/${project.photo}`)} alt={project.name}/>
                        </ImgWrapper>
                        <InfoBox>
                            <Link href={project.link} target="_blank">{project.name}</Link>
                            <p>{project.description}</p>
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
`;

const Title = styled.h2`
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
    min-height: 80vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const Link = styled.a`
    text-decoration: none;
    color: #334036;
    &:hover {
        color: rgba(90,173,125);
    }
`;

