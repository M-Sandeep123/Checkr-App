import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import { NAV_LISTS, NavListProps } from "../../../constants";
import "./styles.css";
import theme from "../../../theme/theme";
import { ResuableNavbar } from "./Navbar";
import { NavFooterProps } from "../../molecules/NavFooter";
interface NavProps {
  navFooterProps: NavFooterProps;
  navLists: NavListProps[];
  activeTab?: string;
}
export const Navbar = ({ navFooterProps, navLists, activeTab }: NavProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [active, setActive] = useState<string>("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleNavClick = (title: string) => {
    setActive(title);
    setOpenDrawer(false);
  };
  useEffect(() => {
    if (active === NAV_LISTS[1].title) {
      navigate("/candidates");
    } else if (active === NAV_LISTS[2].title) {
      navigate("/adverse-actions");
    }
  }, [active]);

  return !isMobile ? (
    <Box data-testid="desktop-view">
      <ResuableNavbar
        navFooterProps={navFooterProps}
        navLists={navLists}
        activeTab={activeTab}
        handleNavClick={handleNavClick}
      />
    </Box>
  ) : (
    <Box data-testid="mobile-view">
      <ListIcon data-testid="toggle-icon" onClick={() => setOpenDrawer(true)} />
      <Drawer open={openDrawer}>
        <ResuableNavbar
          data-testid="mobile-view"
          navFooterProps={navFooterProps}
          navLists={navLists}
          activeTab={activeTab}
          handleNavClick={handleNavClick}
        />
      </Drawer>
    </Box>
  );
};
