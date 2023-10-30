import { StoryFn, Meta } from "@storybook/react";
import InputTypography, { InputTypographyProps } from ".";
import { DEFAULT_PLACEHOLDER } from "../../../constants";
import theme from "../../../theme/theme";

export default {
  title: "molecules/InputTypography",
  component: InputTypography,
} as Meta;

const Template: StoryFn<InputTypographyProps> = (args) => (
  <InputTypography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  variant: "body1",
  height: "36px",
  width: "384px",
  placeholder: DEFAULT_PLACEHOLDER,
  border: "1px solid #ccc",
  bradius: "4px",
  bcolor: "#ccc",
  bgcolor: "#fff",
  labelColor: `${theme.palette.textColor.medemp}`,
  onChange: (e) => console.log(e.target.value),
};
