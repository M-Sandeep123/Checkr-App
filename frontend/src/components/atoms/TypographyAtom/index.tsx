import { Typography as TypographyAtom, TypographyProps } from "@mui/material";

interface TypographyAtomProps extends TypographyProps {
  variant?:
    | "heading1"
    | "heading2"
    | "subtitle1"
    | "body1"
    | "body2"
    | "caption2";
}

const Typography = (props: TypographyAtomProps) => {
  return (
      <TypographyAtom variant={props.variant} {...props}>
        {props.children}
      </TypographyAtom>
  );
};

export default Typography;
