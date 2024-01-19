import React, { useState, useRef, useEffect } from "react";
import cImage from "../assets/imgs/skills/c.png";
import cssImage from "../assets/imgs/skills/css.png";
import firebaseImage from "../assets/imgs/skills/firebase.png";
import gitImage from "../assets/imgs/skills/git.png";
import graphqlImage from "../assets/imgs/skills/graphql.png";
import htmlImage from "../assets/imgs/skills/html.png";
import javascriptImage from "../assets/imgs/skills/javascript.png";
import nextjsImage from "../assets/imgs/skills/nextjs.png";
import angularImage from "../assets/imgs/skills/angular.png";
import aspnetCoreImage from "../assets/imgs/skills/asp.png";
import nodejsImage from "../assets/imgs/skills/nodejs.png";
import reactImage from "../assets/imgs/skills/react.png";
import threejsImage from "../assets/imgs/skills/threejs.png";
import typescriptImage from "../assets/imgs/skills/typescript.png";
import javaImage from "../assets/imgs/skills/java.png";
import kotlinImage from "../assets/imgs/skills/kotlin.png";
import pythonImage from "../assets/imgs/skills/python.png";
import tailwindImage from "../assets/imgs/skills/tailwind.png";

const skillsData = [
  { name: "C", imagePath: cImage },
  { name: "CSS", imagePath: cssImage },
  { name: "FireBase", imagePath: firebaseImage },
  { name: "Git", imagePath: gitImage },
  { name: "GraphQL", imagePath: graphqlImage },
  { name: "HTML", imagePath: htmlImage },
  { name: "JavaScript", imagePath: javascriptImage },
  { name: "Nextjs", imagePath: nextjsImage },
  { name: "Angular", imagePath: angularImage },
  { name: "ASP.net Core", imagePath: aspnetCoreImage },
  { name: "Nodejs", imagePath: nodejsImage },
  { name: "React", imagePath: reactImage },
  { name: "Threejs", imagePath: threejsImage },
  { name: "TypeScript", imagePath: typescriptImage },
  { name: "Java", imagePath: javaImage },
  { name: "Kotlin", imagePath: kotlinImage },
  { name: "Python", imagePath: pythonImage },
  { name: "Tailwind", imagePath: tailwindImage },
];

const SkillsComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const totalSlides = 22;
  const slidesToShow = 5;
  const slideWidth = 110 / slidesToShow;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === totalSlides - slidesToShow ? 0 : prev + 1,
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 1500);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.3s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        currentSlide * slideWidth
      }%)`;
    }
  }, [currentSlide, slideWidth]);

  return (
    <>
      <p className="self-start text-white m-3 text-slate-200 mt-28 mb-1">
        What I can do
      </p>
      <h2 className="self-start text-5xl m-3 text-white font-extrabold mt-0">
        My Skills
      </h2>
      <p className="self-start  text-white m-3 max-w-[36rem] text-slate-200 mb-12">
        Discover the range of skills I've honed over time. From technical
        expertise to soft skills, I've built a toolkit that allows me to tackle
        various challenges with confidence
      </p>
      <div
        className="overflow-hidden w-11/12 rounded-xl px-4 max-w-[90rem]"
        style={{ height: "250px" }}
      >
        <div className="flex h-full" ref={slideRef}>
          {skillsData.map((skill, i) => (
            <div
              key={i}
              className="flex items-center justify-center m-2" // removed bg-blue-500 and text-white as they might conflict with your image
              style={{ flex: `0 0 ${slideWidth}%`, height: "100%" }}
            >
              {/* Assuming the path is from the public folder, otherwise, you might need to import the images above */}
              <img
                src={skill.imagePath}
                alt={skill.name}
                className="object-contain w-5/12 h-5/12 mb-12"
              />{" "}
              {/* Tailwind classes to maintain aspect ratio */}
              <div className="absolute bottom-3 py-2 px-4 text-center text-white text-lg w-full">
                {skill.name} {/* Skill name overlay (optional) */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsComponent;
