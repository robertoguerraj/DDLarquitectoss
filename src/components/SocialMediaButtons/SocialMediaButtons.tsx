import { useState } from "react";
import cn from "classnames";
import { MdLocationPin } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import "./SocialMediaButtons.scss";
import { Hidden } from "@mui/material";

const phoneNumber = "4492062393"; // Número de teléfono DDL

const actions = [
  {
    label: "WhatsApp",
    backgroundColor: "#009a11",
    icon: <BsWhatsapp />,
    href: `https://wa.me/${phoneNumber}?text=Hola,%20tengo%20un%20proyecto%20y%20me%20interesa%20trabajar%20con%20ustedes.`,
  },
  {
    label: "Facebook",
    backgroundColor: "#4267B2",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/ddlarquitectos/",
  },
  {
    label: "Instagram",
    backgroundColor: "linear-gradient(235deg, #e604d5, #f4301b, #f6bc02)",
    icon: <BsInstagram />,
    href: "https://www.instagram.com/ddlarquitectos/",
  },
  {
    label: "Linkedin",
    backgroundColor: "#0a66c2",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/ddlarquitectos/",
  },
  {
    label: "Google Maps",
    backgroundColor: "#c72320",
    icon: <MdLocationPin />,
    href: "https://maps.app.goo.gl/EvRpX7Wy5TwLZzY48",
  },
];

const SocialMediaButtons = () => {
  const [open, setOpen] = useState(false);

  return (
    <ul
      className={cn("fab-container", { open })}
      onClick={() => setOpen((prev) => !prev)}
    >
      <Hidden smUp>
        <li className="fab-button">
          {open ? <AiOutlineClose /> : <BsWhatsapp />}
        </li>
      </Hidden>
      <Hidden smDown>
        <li
          className="fab-button"
          style={{
            width: "40px",
            height: "40px",
            fontSize: "30px",
            right: 40,
            bottom: 12,
            marginTop: "25px",
          }}
        >
          {open ? <AiOutlineClose /> : <FaPlus />}
        </li>
      </Hidden>

      {actions.map((action, index) => (
        <>
          <Hidden smUp>
            <li
              style={{
                transitionDelay: `${index * 40}ms`,
                background: action.backgroundColor,
              }}
              className={cn("fab-action", { open })}
              key={action.label}
              onClick={() => window.open(action.href, "_blank")}
            >
              {action.icon}
              <Hidden smDown>
                <span className="tooltip">{action.label}</span>
              </Hidden>
            </li>
          </Hidden>
          <Hidden smDown>
            {action.label != "WhatsApp" && (
              <li
                style={{
                  transitionDelay: `${index * 40}ms`,
                  background: action.backgroundColor,
                  width: "40px",
                  height: "40px",
                  fontSize: "30px",
                  right: 40,
                }}
                className={cn("fab-action", { open })}
                key={action.label}
                onClick={() => window.open(action.href, "_blank")}
              >
                {action.icon}
                <Hidden smDown>
                  <span className="tooltip">{action.label}</span>
                </Hidden>
              </li>
            )}
          </Hidden>
        </>
      ))}
    </ul>
  );
};

export default SocialMediaButtons;
