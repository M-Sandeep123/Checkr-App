import styled from "@emotion/styled";
import { Chip, ChipProps } from "@mui/material";
import theme from "../../../theme/theme";

interface PropTypes extends ChipProps {
  label?: string;
  variant?: "filled" | "outlined";
  size?: "medium" | "small";
}
function getChipColor(label?: string) {
  switch (label) {
    case "CONSIDER":
      return theme.palette.accentColor.yellow;
    case "ADVERSEACTION":
      return theme.palette.accentColor.yellow;
    case "CLEAR":
    case "ENGAGE":
      return theme.palette.accentColor.green;
    default:
      return theme.palette.accentColor.blue;
  }
}

function getChipBackgroundColor(label?: string) {
  switch (label) {
    case "CONSIDER":
      return theme.palette.accentColor.lightyellow;
    case "ADVERSE ACTION":
      return theme.palette.accentColor.lightyellow;
    case "CLEAR":
    case "ENGAGE":
      return theme.palette.accentColor.lightgreen;
    default:
      return theme.palette.accentColor.lightblue;
  }
}

export default function CustomChip({
  label,
  variant,
  size,
  color,
  ...rest
}: PropTypes) {
  const chipColor = getChipColor(label);
  const chipBackgroundColor = getChipBackgroundColor(label);

  const StyledChip = styled(Chip)({
    color: chipColor,
    width: "auto",
    height: "26px",
    borderRadius: "4px",
    padding: "4px 12px 4px 12px",
    backgroundColor: chipBackgroundColor,
  });

  return (
    <div>
      <StyledChip
        label={label}
        variant={variant}
        size={size}
        data-testid="custom-chip"
        sx={{
          ".MuiChip-label": {
            padding: theme.spacing(0),
          },
        }}
        {...rest}
      ></StyledChip>
    </div>
  );
}
