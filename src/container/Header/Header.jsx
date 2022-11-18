import { useState, useEffect } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import BgAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Header = () => {
  const [about, setAbout] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [ text ] = useTypewriter({
    words: [
     '<Full Stack Web Developer Freelancer 👨‍💻​/>',
     'Ningún código tiene cero defectos.💪​',
     'A program is never less than 90% complete and never more than 95% complete.​💻',
     '<ButLoveCoding 🙂​/>',
     'Deleted code is debugged code.🤣​',
     'Software and cathedrals are much the same, first we build them, then we pray.​​🙏​​',
     '<ButLoveCoding 🙂​/>',
    ],
    loop: true,
    typeSpeed: 90,
    delaySpeed: 1500,
    deleteSpeed: 25
  })
  

  useEffect(() => {
    // sanity
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbout(data);
      setIsFetching(false);
    });
  }, []);

  if (isFetching) {
    <h2> Cargando... </h2>;
  }

  return (
    // <div id='home' className="app__header app__flex"> AppWrap
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-name app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hola, soy</p>
              <h1 className="head-text">Manuel Tovar</h1>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="app__header-img">
        <img src={images.profile} alt="profile_bg" />
        {/* <div className="bg_animation">
           <BgAnimation /> 
        </div>  */}
      </div>
      <div className="tag-dev app__flex">
        <p className="p-text" style={{ color: '#4CBB17', backgroundColor: '#313448', padding: "3px" }}>
          {text}<Cursor cursorColor='#4CBB17'/>
        </p>
      </div>


      <div className="app__about">
        <h2 className="head-text">
          Acerca{" "}
          <span style={{ textTransform: "lowercase", color: "#242020" }}>de</span>{" "}
          <span> mí. </span>
        </h2>

        <div className="app__profile">
          {about.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              key={about.title + index}
            >
              {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// wrap and pass id=home how parameter
export default AppWrap(
  MotionWrap(Header, 'app__header'),
    'Home',
    'app__primarybg'
  );
