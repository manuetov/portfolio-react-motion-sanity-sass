import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Skills = () => (
  <div className="app_skills">
    <h2 className='head-text'><span>Habilidades</span> </h2>
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[
        images.Node,
        images.React,
        images.Sass,
        images.JavaScript,
        images.Tailwind,
        images.Bootstrap,
        images.Redux,
        images.TypeScript,
        images.Python,
        images.Github,
        images.Docker,
        images.Nginx,
        images.GraphQL,
        images.AWS,
        images.Linux,
        images.Seo,
        images.MongoDB,
        images.MySQL,
        images.Html,
        images.Css,
        images.Wordpress,
        images.Flask,
        images.Mui

      ].map((circle, index) => (
        <div className="app__flex" key={`circle-${index}`}>
          <img src={circle} alt="skills_bg" />
          <p className="p-text-small">{circle.replace('/static/media/', ' ').split('.',1)}</p> 
        </div>
      ))}
    </motion.div>
    </div>
);

export default AppWrap (Skills, 'Habilidades');
