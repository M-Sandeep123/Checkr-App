import { Box, styled } from "@mui/material";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/TypographyAtom";
import "./styles.css";
export interface IconTypographyProps {
  variant?:
    | "heading1"
    | "heading2"
    | "subtitle1"
    | "body1"
    | "body2"
    | "caption2";
  label: string;
  src: string;
  alt?: string;
  labelColor?: string;
  onClick?:()=>void;
}

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems:'center'
});

const IconTypography = ({
  variant,
  label,
  src,
  alt,
  labelColor,
  onClick
}: IconTypographyProps) => {
  return (
    <StyledBox className="IconTypography-box">
      <Icon
        src={src}
        alt={alt}
        style={{ width: "18px", height: "18px", marginRight: "11px" }}
        onclick={onClick}
      />
      <Typography
        variant={variant}
        children={label}
        color={labelColor}
      ></Typography>
    </StyledBox>
  );
};

export default IconTypography;
