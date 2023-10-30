import { ChangeEvent } from "react";
import { MuiCheckbox } from "../../atoms/Checkbox";
import Typography from "../../atoms/TypographyAtom";
import Box from "@mui/material/Box";

export interface PropsTypes {
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  labelColor?: string;
}

const CheckBoxTypography = ({ label, onChange, labelColor }: PropsTypes) => {
  const Style = {
    display: "flex",
    gap: "11px",
    alignItems: "baseline",
  };

  return (
    <Box style={Style}>
      <MuiCheckbox onChange={onChange} data-testid={`checkbox ${label}`}/>
      <Typography variant="caption2" color={labelColor}>
        {label}
      </Typography>
    </Box>
  );
};

export default CheckBoxTypography;
