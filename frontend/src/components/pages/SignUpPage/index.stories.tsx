import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SignUpPage from ".";

export default {
  title: "pages/signup-page",
  component: SignUpPage,
} as Meta<typeof SignUpPage>;

const Template: StoryFn<typeof SignUpPage> = () => <SignUpPage />;

export const Primary = Template.bind({});
Primary.args = {};
