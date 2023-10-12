import { Box, List, ListItem } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState } from "react";

function ScrollableProjects() {
  const [scrolled, setScrolled] = useState(true);
  const [size, setSize] = useState("550px");

  document.onscrollend = () => {
    setScrolled(true);
    setSize(`${550}px`);
  };

  document.onwheel = (event) => {
    if (scrolled) {
      if (checkScrollDirectionIsUp(event)) {
        setSize(`${545}px`);
      } else {
        setSize(`${545}px`);
      }
      setScrolled(false);
    }
  };

  function checkScrollDirectionIsUp(event: any) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

  return (
    <div>
      <Box
        sx={{
          width: "auto",
          paddingLeft: "4%",
          paddingRight: "4%",
          bgcolor: "background.paper",
        }}
        mx={{ width: "100%", bgcolor: "background.paper" }}
      >
        <nav aria-label="main">
          <List>
            <ListItem style={{ paddingBottom: "30px", cursor: "pointer" }}>
              <ProjectCard size={size} projectKey="casaEma" />
            </ListItem>
            <ListItem style={{ paddingBottom: "30px", cursor: "pointer" }}>
              <ProjectCard size={size} projectKey="casaRL" />
            </ListItem>
            <ListItem style={{ paddingBottom: "30px", cursor: "pointer" }}>
              <ProjectCard size={size} projectKey="casaMezquite" />
            </ListItem>
            <ListItem style={{ paddingBottom: "30px", cursor: "pointer" }}>
              <ProjectCard size={size} projectKey="casaPC2" />
            </ListItem>
            <ListItem style={{ paddingBottom: "30px", cursor: "pointer" }}>
              <ProjectCard size={size} projectKey="pizzaHut" />
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
}

export default ScrollableProjects;
