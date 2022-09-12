import React from "react";
import Skinstore from "../assets/portfolio/Skinstore.png";
import Newspaper from "../assets/portfolio/Newspaper.png";
import Bluefly from "../assets/portfolio/Bluefly.png";
import weatherApp from "../assets/portfolio/weatherApp.png";
import virtualmcdonalds from "../assets/portfolio/virtualmcdonalds.png";
import milaap from "../assets/portfolio/milaap.png"

import { Fade } from "react-reveal"
import { FaEye,FaGithub} from "react-icons/fa";
const Portfolio = () => {
  const portfolios = [
    {

      id: 1,
      src: milaap,
      link: 'milaap-clone.vercel.app',
      repo: 'https://github.com/anowar265/sordid-authority-4005',
      text: "milaap clone",
      skills: "HTML,CSS,React,Redux,Javascript, Chakra UI,Sass,Firebase,Heroku",
      desc: "This project is about building a online crowdfunding platform. Here with the use of React & redux I implemeted the functionalities of an e-commerce website like Donate any amount,if user faces any issue they just contact us..etc  ",
      title:"Milaap Clone"
  },
    {
      id: 2,
      src: Skinstore,
      link: 'https://lovely-hamster-621907.netlify.app/',
      repo: 'https://github.com/Sagar-Gondage/SkinStore',
      text:"Skinstore clone",
      skills: "HTML,CSS,Javascript",
      desc:`This project is clone of Skinstore.com  which is e-commerce shopping site.I have cloned the brand, anniversary edit and sale page. Here I implemented some functionalities like slider image,sorting,filtering,add to cart.. etc  `,
      title:"Skinstore Clone"
    },
    {
      id: 3,
      src: Bluefly,
      link: 'https://inspiring-cactus-1f1348.netlify.app/',
      repo: 'https://github.com/SPinfluencers/BlueFly',
      text: "Bluefly clone",
      skills: "Javascript,HTML,CSS",
      desc: "This project is about building an online shopping website. We implemeted all the functionality of a Shopping website. Here I implemented the checkout with all the functionality as real time application",
      title:"Bluefly Clone"
    },
    {
      id: 4,
      src: Newspaper,
      link: 'https://reliable-eclair-5358fa.netlify.app/',
      repo: 'https://github.com/bishnu05/deccan-chronicle',
      text: "Deccan-chronicle clone",
      skills: "Javascript,HTML,CSS",
      desc: "This project is about building a daily news update website. Here I implemeted all the functionalities of a News website like dropdown menu, daily updated all news, etc  ",
      title:"Deccan-chronicle Clone"
    },
    {
      id: 5,
      src: weatherApp,
      link: 'https://curious-piroshki-5acc1d.netlify.app/',
      repo: 'https://github.com/bishnu05/Weather-App',
      text: "Weather app",
      skills: "Javascript,HTML,CSS",
      desc: " In this website if user search any location know about any location's weather they just search it and they will see the weather like temperature, humadity etc.. ",
      title:"WeatherApp"
    },
    {
      id: 6,
      src: virtualmcdonalds,
      link: 'https://willowy-syrniki-4f1cc2.netlify.app/',
      repo: 'https://github.com/bishnu05/virtual-mcdonalds',
      text: "Virtual mcDonalds",
      skills: "Javascript,HTML,CSS",
      desc: "if any user order any food in this macdonalds they will get the food in some moments in this website. ",
      title:"Virtual mcDonalds"
    }

  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white portfolio1 projects "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo ,title,desc,skills}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
           <Fade top duration={1000} distance="40px">    <img
                src={src}
                alt="projects"
                className="rounded-md hover:scale-105 duration-500 "
              /> </Fade>
              <div className="p-4">
                <p className="text-center text-xl p-2" >{title}</p>
                <p className="text-sm">{ desc}</p>
                <p className="mt-5 text-sm"><b>Tech Stack : </b> { skills}</p>
              </div>
              <div className="flex m-auto items-center justify-between">
                <button className=" px-6 py-1 m-4 duration-200 text-center   hover:scale-110" onClick={ () => window.open(link, '_blank')}>
                  <FaEye size={30} />
                </button>
                <button className=" px-6 py-1 m-4 text-center duration-200 hover:scale-110 " onClick={ () => window.open(repo, '_blank')}>
                  <FaGithub size={30} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;