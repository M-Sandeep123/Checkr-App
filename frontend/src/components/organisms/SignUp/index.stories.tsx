import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { SignUp } from ".";

export default {
  title: "organisms/SignUp",
  component: SignUp,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof SignUp>;

const Template: StoryFn<typeof SignUp> = () => <SignUp />;

export const Primary = Template.bind({});
Primary.args = {};
