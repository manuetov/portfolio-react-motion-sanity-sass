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
        images.node,
        images.react,
        images.sass,
        images.javascript,
        images.tailwind,
        images.bootstrap,
        images.redux,
        images.typescript,
        images.python,
        images.github,
        images.docker,
        images.nginx,
        images.graphql,
        images.aws,
        images.linux,
        images.seo,
        images.mongodb,
        images.mysql,
        images.html,
        images.css,
        images.wordpress,

      ].map((circle, index) => (
        <div className="app__flex" key={`circle-${index}`}>
          <img src={circle} alt="skills_bg" />
        </div>
      ))}
    </motion.div>
    </div>
);

export default AppWrap (Skills, 'Habilidades');
