import { StoryFn, Meta } from "@storybook/react";
import { Navlink } from ".";
import { SIGN_IN_TEXT } from "../../../constants";

export default {
  title: "atoms/Navlink",
  component: Navlink,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof Navlink>;

const Template: StoryFn<typeof Navlink> = (args) => <Navlink {...args} />;

export const SignIn = Template.bind({});

SignIn.args = {
  children: SIGN_IN_TEXT,
};
