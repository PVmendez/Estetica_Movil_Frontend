import { useState, useEffect } from "react";

import masage from "../assets/masage1.jpg";
import hairStyler from "../assets/haircut.jpg";
import makeup from "../assets/makeup.jpg";
import nails from "../assets/nails.jpg";
import mainLogo from "../assets/scissors.svg";
import logo from "../assets/logoEstetica.png";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const carouselImages = [masage, hairStyler, makeup, nails];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${carouselImages[currentImage]})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="relative w-full max-w-[1490px] flex 
        items-center justify-between pt-10 mx-auto px-10"
      >
        <img className="w-12" src={mainLogo} alt="" />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">Servicios</NavLink>
          <NavLink to="products">Precios</NavLink>
          <NavLink to="reference">Galeria</NavLink>
          <NavLink to="care">Nosotras</NavLink>
          <NavLink to="schedule">Agendate</NavLink>
        </ul>

        <img
          src={mainLogo}
          className=" w-12 rotate-180"
          alt=""
        />
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="services" mobileMenu>
              Servicios
            </NavLink>
            <NavLink to="products" mobileMenu>
              Precios
            </NavLink>
            <NavLink to="reference" mobileMenu>
              Galeria
            </NavLink>
            <NavLink to="care" mobileMenu>
              Nosotras
            </NavLink>
            <NavLink to="schedule" mobileMenu>
              Agendate
            </NavLink>
          </ul>
        </div>
      </div>

      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">
          {heroTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h5 className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">
          {heroSubtitle}
        </h5>
      </FadeIn>
      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <div className="relative w-full xs:w-[460px] mt-11 flex justify-center">
          <img
            src={logo}
            alt=""
            className="absolute flex -translate-y-8 w-40 rounded-full bg-white cursor-pointer"
          />
        </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Hero;
