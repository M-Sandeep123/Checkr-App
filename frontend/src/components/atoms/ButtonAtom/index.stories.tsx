import { StoryFn, Meta } from "@storybook/react";
import ButtonAtom, { ButtonAtomProps } from ".";
import AddBoxIcon from "@mui/icons-material/AddBox";
import theme from "../../../theme/theme";
import { MANUALORDER, SIGNIN } from "../../../constants";

export default {
  title: "Atoms/ButtonAtom",
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<ButtonAtomProps> = (args) => <ButtonAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonVariant: "contained",
  buttonWidth: 384,
  buttonHeight: 44,
  buttonColor: theme.palette.greyColor.white,
  buttonText: SIGNIN,
  backgroundColor: theme.palette.primaryColor[500],
  bordeRadius: 4,
  sx: { variant: "body1", fontWeight: "bold" },
};

export const manualOrder = Template.bind({});
manualOrder.args = {
  buttonVariant: "contained",
  buttonColor: theme.palette.greyColor.white,
  buttonText: MANUALORDER,
  backgroundColor: theme.palette.primaryColor[500],
  buttonIcon: <AddBoxIcon />,
  bordeRadius: 4,
};
