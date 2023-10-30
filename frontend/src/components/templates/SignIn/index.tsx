import { Box } from "@mui/material";
import CustomImage from "../../atoms/Image";
import "./styles.css";
interface TemplateLayoutProps {
  children?: React.ReactNode;
  image?: string;
}

const SignInTemplate = ({ children, image }: TemplateLayoutProps) => {
  return (
    <Box className="signin-tenplate-outline ">
      <Box className="outer-stack">
        <Box className="StyledImageGrid">
          <CustomImage src={image} width="292" height="316" />
        </Box>
        <Box
          className={
            !children ? "addStyle StyledChildrenGrid" : "StyledChildrenGrid"
          }
        >
          {children ?? "Children"}
        </Box>
      </Box>
    </Box>
  );
};

export default SignInTemplate;
