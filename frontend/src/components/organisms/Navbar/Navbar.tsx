import { Box, Divider, Stack, styled } from "@mui/material";
import React from "react";
import CustomImage from "../../atoms/Image";
import theme from "../../../theme/theme";
import IconTypography from "../../molecules/IconTypography";
import NavFooter, { NavFooterProps } from "../../molecules/NavFooter";
import { NavListProps } from "../../../constants";
import logo from "../../../../public/assets/images/logo.svg";
import "./styles.css";
interface NavProps {
    navFooterProps: NavFooterProps;
    navLists: NavListProps[];
    activeTab?: string;
    handleNavClick:(val:string)=>void;
}
const StyledDivider = styled(Divider)({
  color: `${theme.palette.structural.stroke}`,
});
const StyledNavbarOption = styled(Stack)({
    flexDirection: "row",
    gap: "11px",
    marginBottom: "11px",
    height: "44px",
    alignItems: "center",
    paddingLeft: "15px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: `${theme.palette.primaryColor[300]}`,
    },
    borderRadius: "6px",
});
export const ResuableNavbar = ({ navFooterProps, navLists, activeTab,handleNavClick }: NavProps) => {
  const {
    avatarSrc,
    avatarAlt,
    avatarSx,
    userNameVariant,
    userName,
    userNameSx,
    emailVariant,
    email,
    emailSx,
    iconSrc,
    iconAlt,
    iconStyle,
  } = navFooterProps;
  return (
    <Box className="outline" data-testid="navbar">
      <Box className="inner-stack">
        <Box className="styled-img-outline">
          <CustomImage alt="logo" src={logo} width="78px" height="20px" />
        </Box>
        {navLists.map((list) => {
          return (
            <StyledNavbarOption
              data-testid={list.title}
              key={list.id}
              sx={{
                backgroundColor:
                  list.title === activeTab
                    ? `${theme.palette.primaryColor[300]}`
                    : "",
                color:
                  list.title === activeTab
                    ? `${theme.palette.primaryColor[500]}`
                    : "",
              }}
              onClick={() => handleNavClick(list.title)}
            >
              <IconTypography
                src={list.src}
                alt={list.alt}
                label={list.title}
                variant="body1"
              />
            </StyledNavbarOption>
          );
        })}
      </Box>
      <Box>
        <StyledDivider light />
        <Box data-testid="nav-footer" className="styled-box">
          <NavFooter
            avatarSrc={avatarSrc}
            avatarAlt={avatarAlt}
            avatarSx={avatarSx}
            userNameVariant={userNameVariant}
            userName={userName}
            userNameSx={userNameSx}
            emailVariant={emailVariant}
            email={email}
            emailSx={emailSx}
            iconSrc={iconSrc}
            iconAlt={iconAlt}
            iconStyle={iconStyle}
          />
        </Box>
      </Box>
    </Box>
  );
};
