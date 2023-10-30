import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import OTPPage from ".";

export default {
  title: "pages/OTPPage",
  component: OTPPage,
} as Meta<typeof OTPPage>;

const Template: StoryFn<typeof OTPPage> = () => <OTPPage />;

export const Primary = Template.bind({});
Primary.args = {};
