/* eslint-disable react/no-unescaped-entities */
"use client";

import { NextPage } from "next";
import MyImage from "../assets/images/me.jpg";
import Safelynk from "../assets/images/safelynk.svg";
import Viibre from "../assets/images/viibre-icon.webp";
// import WeWire from "../assets/images/wewire.svg";
// import BuddyVotes from "../assets/images/buddy-votes.svg";
// import Xharp from "../assets/images/xharp.svg";
import Signature from "../assets/images/sign.svg";
import Image from "next/image";
import { isValidElement } from "react";
import { motion } from "framer-motion";
// import { useOnScreen } from "@/hooks/visible-hook";
// import Signature from "../components/signature";
import projectLogos from "../utils/project-logos";

// interface Props {}

const About: NextPage = ({}) => {
  // const [ref, visible] = useOnScreen();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="px-5 pt-10 flex flex-col gap-2 md:px-25 lg:px-70 transition-all">
        <Image
          className="w-[97px] h-[97px] object-cover object-top rounded-4xl md:w-[130px] md:h-[130px] transition-all"
          src={MyImage.src}
          alt="me.png"
          width={MyImage.width}
          height={MyImage.height}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1"> 
            <span className="font-normal md:font-medium text-3xl md:w-[400px] md:text-4xl">
              {"Hey, I'm Precious Baisie"}
            </span>
            <span className="font-normal md:font-medium text-3xl md:w-[400px] md:text-4xl">
              {"Dreamer & Designer"}
            </span>
          </div>
          <span className="font-[Inter] font-light">
          I design intuitive digital products that solve real problems through thoughtful user experiences. With a background in product design, strategic communications, and entrepreneurship, I approach every project with both user needs and business objectives in mind. Based in Accra, Ghana, I am passionate about creating products that are simple, useful, and impactful.
          </span>
          <span className="font-[Inter] font-light">
          Before I started designing digital products, I was developing go to market strategies, creating pitch decks, and exploring why great ideas often fail to reach the people they are built for. That perspective continues to shape my design process today. Every project begins with understanding the problem before designing a solution that people genuinely enjoy using.
          </span>
        </div>
        <span className="text-[color:var(--color-primary-color)] pt-6 pb-1">
          I've worked for
        </span>
        <div className="relative">
          {/* Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[color:var(--color-scaffold-color)] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[color:var(--color-scaffold-color)] to-transparent z-10" />

          {/* Scrollable content */}
          {/* <div className="flex flex-row overflow-x-scroll scrollbar-hidden whitespace-nowrap relative z-0 pb-10 scroll-smooth">
            {[Safelynk, BeyondSend, WeWire, BuddyVotes, Xharp].map(
              (image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt="image"
                  className="w-[150px] md:w-[200px] md:h-[30px] h-[25px] pr-[15px] transition"
                  width={image.width}
                  height={image.height}
                />
              )
            )}
          </div> */}

          <div className="overflow-x-hidden relative w-full">
            <div className="flex animate-marquee space-x-5 items-center flex-row whitespace-nowrap w-max">
              {Array(10).fill(0).map((_) => {
                return (
                  projectLogos.map((image, index) => {
                    if (isValidElement(image.logo)) {
                      return (
                        <div key={index}>
                          {image.logo}
                        </div>
                      );
                    }
                    return (
                      <Image
                        key={index}
                        src={image.logo}
                        alt="image"
                        className="transition pr-[15px]"
                        // className="w-[6rem] md:w-[7rem] transition md:h-[30px] h-[25px] pr-[15px]"
                        // width={image.width}
                        // height={image.height}
                        width={image.width}
                        height={image.height}
                      />
                    )
                  }
                )
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <Image
            src={Signature.src}
            alt="image"
            className="md:w-[190px] transition md:scale-75 pt-8"
            width={Signature.width}
            height={Signature.height}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
