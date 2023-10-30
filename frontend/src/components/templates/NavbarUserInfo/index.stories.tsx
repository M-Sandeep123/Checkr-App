import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import NavbarUserInfoTemplate from ".";

export default {
  title: "templates/CandidateInfoTemplate",
  component: NavbarUserInfoTemplate,
} as Meta<typeof NavbarUserInfoTemplate>;

const Template: StoryFn<typeof NavbarUserInfoTemplate> = (args) => (
  <NavbarUserInfoTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {};
