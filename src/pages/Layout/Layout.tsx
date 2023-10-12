import { Container, Hidden } from "@mui/material";
import "./Layout.css";
import Navbar from "../../components/Navbar/Navbar";
import { ReactNode, useEffect, useState } from "react";
import ContactButton from "../../components/WhatsAppButton/WhatsAppButton";
import SocialMediaButtons from "../../components/SocialMediaButtons/SocialMediaButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import Intro from "../../components/Intro/Intro";

const theme = createTheme();

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [visibleIntro, setVisibleIntro] = useState(true);

  useEffect(() => {
    const introTimeout = setTimeout(() => {
      setVisibleIntro(false);
    }, 5000);

    return () => {
      clearTimeout(introTimeout);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {visibleIntro ? <Intro></Intro> : <></>}
      <Navbar></Navbar>
      <Container
        fixed
        style={{
          color: "gray",
          paddingTop: "70px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        {children}
      </Container>
      <Hidden smUp>
        <SocialMediaButtons />
      </Hidden>
      <Hidden smDown>
        <SocialMediaButtons />
        <ContactButton></ContactButton>
      </Hidden>
    </ThemeProvider>
  );
};

export default Layout;
