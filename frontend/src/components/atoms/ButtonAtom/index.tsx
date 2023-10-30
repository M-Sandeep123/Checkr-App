import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../theme/theme";

export interface ButtonAtomProps {
  buttonVariant?: "contained" | "outlined" | "text";
  buttonColor?: string;
  buttonText?: string;
  buttonWidth?: number;
  buttonHeight?: number;
  backgroundColor?: string;
  buttonIcon?: React.ReactNode;
  buttonBorder?: string;
  bordeRadius?: number;
  sx?: SxProps;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonAtom = ({
  buttonVariant,
  buttonColor,
  buttonText,
  buttonIcon,
  buttonWidth,
  buttonHeight,
  backgroundColor,
  buttonBorder,
  bordeRadius,
  sx,
  onClick,
  disabled,
}: ButtonAtomProps) => {
  const StyledButton = styled(Button)`
    && {
      background-color: ${disabled
        ? theme.palette.primaryColor[400]
        : backgroundColor};
      color: ${buttonColor};
      border-radius: ${bordeRadius}px;
      width: ${buttonWidth}px;
      font-weight: 500;
      height: ${buttonHeight}px;
      border: ${buttonBorder};
      &:hover {
        background-color: ${backgroundColor};
      }
      text-transform: none;
    }
  `;

  return (
    <StyledButton
      data-testid={`button ${buttonText}`}
      variant={buttonVariant}
      startIcon={buttonIcon}
      onClick={onClick}
      sx={sx}
      disabled={disabled}
      disableElevation
      disableRipple
      disableTouchRipple
      disableFocusRipple
    >
      {buttonText}
    </StyledButton>
  );
};

export default ButtonAtom;
