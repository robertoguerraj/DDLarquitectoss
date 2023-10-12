import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";

const ContactButton = () => {
  const phoneNumber = "4492062393"; // Número de teléfono DDL

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=Hola,%20tengo%20un%20proyecto%20y%20me%20interesa%20trabajar%20con%20ustedes.`,
      "_blank"
    );
  };

  return (
    <Tooltip title="Contactanos" arrow placement="right">
      <Button
        variant="contained"
        color="primary"
        onClick={handleWhatsAppClick}
        style={{
          position: "fixed",
          bottom: "40px",
          left: "35px",
          width: "62px", // Set the width to 20px
          height: "62px", // Set the height to 20px for a circular button
          backgroundColor: "#009a11",
          borderRadius: "50%",
          padding: "0", // Remove padding to ensure the button is just the icon
          minWidth: "unset", // Remove minWidth to allow the button to be circular
        }}
      >
        <WhatsAppIcon style={{ fontSize: 35, color: "white" }} />{" "}
        {/* Adjust fontSize and color */}
      </Button>
    </Tooltip>
  );
};

export default ContactButton;
