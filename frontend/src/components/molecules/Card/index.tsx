import React from "react";
import { Box, Stack } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../theme/theme";
import CustomImage from "../../atoms/Image";
import Typography from "../../atoms/TypographyAtom";
import "./styles.css";
interface CardPropsType {
  title: string;
  content: string;
  imageUrl: string;
}
const StyledOuterStack = styled(Stack)({
  flexDirection: "row",
  height: "68px",
  borderRadius: "12px",
  backgroundColor: `${theme.palette.primaryColor[50]}`,
  border: `1px solid ${theme.palette.structural.stroke}`,
  paddingLeft: "12px",
  gap: "12px",
  alignItems: "center",
});

const Card = (props: CardPropsType) => {
  const { title, content, imageUrl } = props;
  return (
    <StyledOuterStack data-testid="card">
      <CustomImage src={imageUrl} height="44px" width="44px" />
      <Box className="card-StyledInnerStack">
        <Typography
          variant="body1"
          sx={{ color: theme.palette.textColor.medemp }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.textColor.highemp }}
        >
          {content}
        </Typography>
      </Box>
    </StyledOuterStack>
  );
};
export default Card;
