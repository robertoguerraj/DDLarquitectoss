import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Fade from "@mui/material/Fade";
import "./About.css";
const StyledContainer = styled(Container)({
  marginTop: "0px",
  padding: "20px",
});

const About = () => {
  const valores = [
    {
      title: "Fidelidad",
      description:
        "Comprometidos en la superación de las expectativas y firmeza en la conclusión de trabajos completos de calidad.",
    },
    {
      title: "Empatía",
      description:
        "Salir del sistema para observar ampliamente las necesidades del cliente desde una perspectiva externa y compasiva.",
    },
    {
      title: "Sostenibilidad",
      description:
        "Declaración de ofrecimiento total a la labor de la arquitectura con soluciones de convencimiento directas y honestas.",
    },
  ];

  return (
    <Fade in timeout={1000}>
      <StyledContainer maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Lado izquierdo: Imagen */}

          {/* Lado derecho: Descripción */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom align="center">
              “Conectando con el lado humano de la arquitectura”
            </Typography>
            <br />
            <Typography variant="body1" paragraph align="justify">
              {`El taller de diseño y construcción lo conformamos profesionales comprometidos con la creación de un vínculo genuino entre el ser humano y el espacio que habita. 
              Realizamos nuestro trabajo a través de un proceso de descubrimiento personalizado que consiste en obtener información de nuestros clientes mediante la construcción de una relación de confianza para conocer sus más profundas necesidades y brindarles soluciones únicas que protejan su inversión. 
              Adoptamos el rol de guías para dirigir el rumbo de nuestros proyectos en conjunto con el usuario hacia el mejor resultado posible, estableciendo cada actividad creativa como un reto personal.`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="../src/assets/AboutPage/AboutPageImage.jpg"
              alt="Arquitecto"
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
        {/* Salto de línea */}
        <div style={{ marginTop: "150px" }} />

        {/* Sección de valores */}
        <Grid container spacing={0}>
          {valores.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={index}
              className={`column ${
                index < valores.length - 1 ? "divider" : ""
              }`}
            >
              <div className="centered-content">
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </Fade>
  );
};

export default About;
