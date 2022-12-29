import { useState } from "react";
import "./Footer.scss";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    asunto: "",
    message: "",
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const { name, email, asunto, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsFetching(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setIsFetching(false);
        setIsSubmited(true);
      })
      .catch((err) => console.log(err));
  };

  if(isFetching) {
    return <h2>Enviando....</h2>
  }

  return (
    <div className="app__footer">
      <h3 className="head-text-nc"> Contáctame en el <span>Formulario</span> o directamente al <span>email</span> </h3>
      <div className="app__footer-container">
        {!isSubmited ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Nombre"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>

            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Tu Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>

            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Asunto"
                name="asunto"
                value={asunto}
                onChange={handleChangeInput}
              />
            </div>

            <div className="app__flex">
              <textarea
                className="p-text"
                type="text"
                placeholder="Escribe tu mensaje"
                name="message"
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <button className="p-text" onClick={handleSubmit}>
              {" "}
              {!isSubmited ? "Enviar mensaje" : "Enviando..."}{" "}
            </button>
          </div>
        ) : (
          <div className="">
            <h3> Gracias por ponerte en contacto</h3>
          </div>
        )}

        <div className="app__footer-email">
          <img src={images.email} alt="email" />
          <a href="mailto:manuetov@hotmail.com" className="p-text">
            manuetov@hotmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Footer, 'Contacto');
