import { useState, useEffect } from "react";
import "./Work.scss";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
//motionWrap needs implement
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [isMobile, setIsMobile] = useState(window.innerWidth)
  console.log(isMobile)

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
      setIsFetching(false);
    });
  }, []);

  useEffect(() => {
    const handleWindowsResize = () => {
      setIsMobile(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowsResize)
    return () => {
      window.removeEventListener('resize', handleWindowsResize)
    }
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "Todos") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  if (isFetching) {
    <h2> Cargando... </h2>;
  }

  return (
    <div className="app__works">
      <h2 className="head-text">
        Mis <span>Trabajos</span> 
      </h2>

      <div className="app__work-filter-bottom">
        {["Todos", "Frontend", "FullStack", "Wordpress"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item-bottom app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__filter-work-card"
      >
        
        {filterWork.map((work, index) => (
          <div className="app__filter-work-card-item app__flex" key={index}>
            <div className="app__filter-work-card-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              
              {isMobile > 820 ? (
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__filter-work-card-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
              ) : (
                <div className="app__filter-work-card-mobile app__flex">
                  <a
                  className="mobile"
                  href={work.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                <AiFillEye />
                </a> 
                <a
                  className="mobile" 
                  href={work.codeLink} 
                  target="_blank"
                  rel="noopener noreferrer">  
                  <AiFillGithub /> 
                </a>
                </div>
               )}
            </div>

            <div className="app__filter-work-card-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text-small" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__flex">
                {work.tags.map((tag, i) => (
                  <p key={i} className='app__filter-work-card-tag' >{tag}</p>  
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'Proyectos',
  'app__primarybg'
  );
