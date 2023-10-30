import { Meta ,StoryFn} from "@storybook/react";
import IconTypography, { IconTypographyProps } from ".";
import { DEFAULT_LABEL, DEFAULT_SRC } from "../../../constants";


export default {
  title: "molecules/IconTypography",
  component: IconTypography,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "heading1",
          "heading2",
          "subtitle1",
          "body1",
          "body2",
          "caption2",
        ],
      },
    },
    label: { control: "text" },
    src: { control: "text" },
    alt: { control: "text" },
  },
} as Meta<typeof IconTypography>;

const Template: StoryFn<IconTypographyProps> = (args) => (
  <IconTypography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "body1",
  label: DEFAULT_LABEL,
  src: DEFAULT_SRC,
  alt: "Image Alt Text",
};
