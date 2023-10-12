import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import DDLlogo from "../../assets/Logo - DDL.png";
import DDLLetters from "../../assets/DDL.png";
import NavegationTabs from "../NavegationTabs/NavegationTabs";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "sticky",
    backgroundColor: "white !important",
    zIndex: 100,
  },
  toolbar: {
    display: "flex",
    color: "black",
    justifyContent: "space-between",
    paddingRight: "30px !important",
    boxShadow: "0px 0px 0px 6px white",
  },
  logo: {
    width: "70px",
    paddingLeft: "15px",
  },
  logoMobile: {
    width: "35px",
    paddingLeft: "10px",
  },
  drawer: {
    width: 250,
  },
  button: {
    "&:focus": {
      outline: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Hidden smUp>
            <img src={DDLlogo} alt="DDL Logo" className={classes.logoMobile} />
          </Hidden>
          <Hidden smDown>
            <img src={DDLLetters} alt="DDL Logo" className={classes.logo} />
            {/* Display on screens wider than or equal to 'sm' */}
            <NavegationTabs></NavegationTabs>
          </Hidden>

          <Hidden smUp>
            {/* Display on screens narrower than 'md' */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              className={classes.button}
            >
              <MenuIcon style={{ fontSize: 35 }} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        {/* Mobile drawer for screens narrower than 'md' */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawer,
          }}
        >
          <List>
            <ListItem onClick={handleDrawerToggle}>
              <Link
                to="/projects"
                onClick={handleDrawerToggle}
                style={{
                  textDecoration: "none",
                  color: location.pathname === "/projects" ? "black" : "gray",
                }} // Override Link styles
              >
                <ListItemText
                  primary="Proyectos"
                  style={{ color: "inherit", fontSize: "inherit" }}
                />
              </Link>
            </ListItem>
            <ListItem onClick={handleDrawerToggle}>
              <Link
                to="/about"
                onClick={handleDrawerToggle}
                style={{
                  textDecoration: "none",
                  color: location.pathname === "/about" ? "black" : "gray",
                }} // Override Link styles
              >
                <ListItemText
                  primary="Acerca de"
                  style={{ color: "inherit", fontSize: "inherit" }}
                />
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Navbar;
