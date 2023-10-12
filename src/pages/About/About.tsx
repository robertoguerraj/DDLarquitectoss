import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Fade from "@mui/material/Fade";

const StyledContainer = styled(Container)({
  marginTop: "30px",
  padding: "20px",
});

const About = () => {
  const valores = [
    {
      titulo: "Creatividad",
      descripcion:
        "Diseñamos espacios innovadores que inspiran y mejoran la calidad de vida.",
    },
    {
      titulo: "Integridad",
      descripcion:
        "Nos comprometemos a mantener altos estándares éticos y profesionales en cada proyecto.",
    },
    {
      titulo: "Sostenibilidad",
      descripcion:
        "Priorizamos prácticas ecoamigables para minimizar nuestro impacto en el medio ambiente.",
    },
    {
      titulo: "Colaboración",
      descripcion:
        "Trabajamos de la mano con nuestros clientes para convertir sus sueños en realidad.",
    },
  ];

  return (
    <Fade in timeout={1000}>
      <StyledContainer maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Lado izquierdo: Imagen */}
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

          {/* Lado derecho: Descripción */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom align="justify">
              “Conectando con el lado humano de la arquitectura”
            </Typography>
            <Typography variant="body1" paragraph align="justify">
              El taller de diseño y construcción está conformado por
              profesionales comprometidos con la creación de un vínculo genuino
              entre el ser humano y el espacio que habita. Nuestro trabajo se
              realiza a través de un detallado proceso de descubrimiento que
              consiste en obtener información de nuestro clientes para conocer
              sus más profundas necesidades y brindar soluciones únicas y
              creativas que protejan su inversión.
              <br />
              Cada creación la tomamos como un reto personal y adoptamos el rol
              de guías para dirigir el rumbo de nuestros proyectos hacia el
              mejor resultado posible mediante la generación de una relación de
              confianza y constante comunicación.
            </Typography>
          </Grid>
        </Grid>
        {/* Salto de línea */}
        <div style={{ marginTop: "30px" }} />

        {/* Sección de valores */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom align="justify">
            Valores
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            {valores.map((valor, index) => (
              <a key={index}>
                <strong>{valor.titulo}:</strong> {valor.descripcion}
                <br />
              </a>
            ))}
          </Typography>
        </Grid>
      </StyledContainer>
    </Fade>
  );
};

export default About;
