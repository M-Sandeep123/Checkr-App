import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ForgotPasswordPage from ".";

export default {
  title: "pages/ForgotPasswordPage",
  component: ForgotPasswordPage,
} as Meta<typeof ForgotPasswordPage>;

const Template: StoryFn<typeof ForgotPasswordPage> = () => (
  <ForgotPasswordPage />
);

export const Primary = Template.bind({});
Primary.args = {};
