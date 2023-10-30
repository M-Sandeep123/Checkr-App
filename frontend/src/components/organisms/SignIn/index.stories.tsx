import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Signin } from ".";

export default {
  title: "organisms/Signin",
  component: Signin,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Signin>;

const Template: StoryFn<typeof Signin> = () => <Signin />;

export const Primary = Template.bind({});
Primary.args = {};
