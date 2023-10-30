import React from "react";
import { Link, LinkProps, styled } from "@mui/material";
import theme from "../../../theme/theme";
interface PropsType extends LinkProps {
  children: string;
}
const StyledLink = styled(Link)({
  "&:hover": {
    cursor: "pointer",
  },
});
export const Navlink = (props: PropsType) => {
  const { children, ...otherProps } = props;
  return (
    <StyledLink
      variant="body1"
      underline="none"
      {...otherProps}
      color={theme.palette.primaryColor[500]}
    >
      {children}
    </StyledLink>
  );
};
