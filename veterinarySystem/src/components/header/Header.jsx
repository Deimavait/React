import { StyledLinksDiv, StyledNavigation } from "./Header.styled";

import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/images/vetbeeIcon.svg";

const Header = () => {
  // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const links = [
    { title: "Pets", to: "/" },
    { title: "Medications", to: "/medications" }
  ];

  return (
    <>
      <StyledNavigation>
        <Link component={RouterLink} to="/">
          <img src={logo} alt="vetbee logo" />
        </Link>
        <StyledLinksDiv>
          {links.map(link => (
            <Link
              key={link.title}
              underline="none"
              fontWeight={600}
              component={RouterLink}
              to={link.to}
            >
              {link.title}
            </Link>
          ))}
        </StyledLinksDiv>
      </StyledNavigation>
     
    </>
  );
};

export default Header;
