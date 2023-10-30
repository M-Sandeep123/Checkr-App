import { ChangeEvent } from "react";
import { Stack } from "@mui/material";
import Typography from "../../atoms/TypographyAtom";
import CustomTextField from "../../atoms/TextField";
import "./styles.css";
export interface InputTypographyProps {
  variant?:
  | "heading1"
  | "heading2"
  | "subtitle1"
  | "body1"
  | "body2"
  | "caption2";
  height: string | number;
  width: string | number;
  style: React.CSSProperties;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  border?: string | number;
  bradius?: string | number;
  bcolor?: string;
  bgcolor?: string;
  labelColor?: string;
  label: string;
  typographyVariant?: React.CSSProperties;
}


const InputTypography = ({
  variant,
  height,
  width,
  style,
  placeholder,
  border,
  bradius,
  bcolor,
  bgcolor,
  label,
  labelColor,
  onChange,
  typographyVariant,
}: InputTypographyProps) => {
  return (
    <Stack sx={{ display: "flex", flexFlow: "column", gap: "10px" }} className="InputTypography-container">
      <Typography
        variant={variant}
        children={label}
        style={style}
        color={labelColor}
      ></Typography>
      <CustomTextField
        height={height}
        width={width}
        placeholder={placeholder}
        border={border}
        bradius={bradius}
        bcolor={bcolor}
        bgcolor={bgcolor}
        typographyVariant={typographyVariant}
        onChange={onChange}
      />
    </Stack>
  );
};

export default InputTypography;
