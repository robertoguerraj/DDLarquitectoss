import { Typography } from "@mui/material";
import "./About.css"; // Importa tu archivo de estilos
import Fade from "@mui/material/Fade";

const About3 = () => {
  return (
    <Fade in timeout={1000}>
      <div className="background-image">
        <div className="content-container">
          <Typography variant="h2" className="title" align="left">
            “Conectando con el lado humano de la arquitectura”
          </Typography>
          <Typography variant="body1" className="description" align="justify">
            El taller de diseño y construcción está conformado por profesionales
            comprometidos con la creación de un vínculo genuino entre el ser
            humano y el espacio que habita. Nuestro trabajo se realiza a través
            de un detallado proceso de descubrimiento que consiste en obtener
            información de nuestro clientes para conocer sus más profundas
            necesidades y brindar soluciones únicas y creativas que protejan su
            inversión.
            <br />
            Cada creación la tomamos como un reto personal y adoptamos el rol de
            guías para dirigir el rumbo de nuestros proyectos hacia el mejor
            resultado posible mediante la generación de una relación de
            confianza y constante comunicación.
          </Typography>

          <Typography variant="body1" className="description" align="justify">
            Creatividad | Innovación | Sostenibilidad | Estética
          </Typography>
        </div>
      </div>
    </Fade>
  );
};

export default About3;
