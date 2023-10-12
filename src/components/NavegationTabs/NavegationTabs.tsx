import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";

export default function NavTabs() {
  const location = useLocation();

  return (
    <Box sx={{ paddingRight: "50px" }}>
      <Tabs
        value={location.pathname}
        aria-label="nav tabs"
        indicatorColor="primary" // You can change "primary" to any color you prefer
      >
        <Tab
          label="Proyectos"
          value="/projects"
          to="/projects"
          component={Link}
        />
        <Tab label="Acerca de" value="/about" to="/about" component={Link} />
      </Tabs>
    </Box>
  );
}
