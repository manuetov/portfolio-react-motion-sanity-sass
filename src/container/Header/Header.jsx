import { useState, useEffect } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import BgAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import { Cursor, useTypewriter } from "react-simple-typewriter";


const initialTextLength = 448

const Header = () => {
  const [about, setAbout] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [text] = useTypewriter({
    words: [
      "<Full Stack Web Developer Freelancer 👨‍💻​/>",
      "Ningún código tiene cero defectos.💪​",
      "A program is never less than 90% complete and never more than 95% complete.​💻",
      "<ButLoveCoding 🙂​/>",
      "Deleted code is debugged code.🤣​",
      "Software and cathedrals are much the same, first we build them, then we pray.​​🙏​​",
      "<ButLoveCoding 🙂​/>",
    ],
    loop: true,
    typeSpeed: 90,
    delaySpeed: 1500,
    deleteSpeed: 25,
  });
  const [showMoreText, setShowMoreText] = useState(false)


  useEffect(() => {
    // sanity
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbout(data);
      setIsFetching(false);
    });
  }, []);

  if (isFetching) {
    return <h2> Cargando... </h2>;
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
        <p
          className="p-text"
          style={{
            color: "#4CBB17",
            backgroundColor: "#313448",
            padding: "3px",
          }}
        >
          {text}
          <Cursor cursorColor="#4CBB17" />
        </p>
      </div>
      <div className="app__about">
        <h2 className="head-text">
          Acerca{" "}
          <span style={{ textTransform: "lowercase", color: "#242020" }}>
            de
          </span>{" "}
          <span> mí. </span>
        </h2>
        <div className="app__profile">
          {about.map((item, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "tween" }}
              key={index}
            >
              {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {item.title}
              </h2>

              {/* <p className="p-text" style={{ marginTop: 10 }}>
                {item.description}
              </p> */}

              <p className="p-text" style={{ marginTop: 10 }}>
                {showMoreText
                  ? item.description
                  : `${item.description.substring(0, initialTextLength)}... `}
                {!showMoreText &&
                  item.description.length > initialTextLength && (
                    <button onClick={() => setShowMoreText(true)}>
                      Leer más
                    </button>
                  )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <button className="app__profile btn_cv">
        <a
          href="https://manutov-cv.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Curriculum Vitae"
          className="p-text"
        >
          Ver Curriculum Vitae
        </a>
      </button>
    </div>
  );
};

// wrap and pass id=home how parameter
export default AppWrap(
  MotionWrap(Header, "app__header"),
  "Home",
  "app__primarybg"
);

{/* <p className="p-text" style={{ marginTop: 10 }}>
          {showMoreText
            ? item.description
            : `${item.description.substring(0, initialTextLength)}... `}
          {!showMoreText &&
            item.description.length > initialTextLength && (
              <button onClick={() => setShowMoreText(true)}>
                Leer más
              </button>
            )}
        </p> */}

             {/* <p className="p-text" style={{ marginTop: 10 }}>
          {item.description.length > initialTextLength && !showMoreText
            ? `${item.description.substring(0, initialTextLength)}... `
            : item.description}
          {item.description.length > initialTextLength && !showMoreText && (
            <button onClick={() => setShowMoreText(true)}>Leer más</button>
          )}
        </p> */}
              {/* <p className="p-text" style={{ marginTop: 10 }}>
                {showMoreText
                  ? item.description
                  : `${item.description.substring(0, initialTextLength)}... `}
              {!showMoreText &&
                item.description.length > initialTextLength && (
                  <button onClick={() => setShowMoreText(true)}>
                    Leer más
                  </button>
                )}
                </p> */}