import React from "react";
import { StoryFn } from "@storybook/react";
import PreAdverseActionCardPage from ".";

export default {
  title: "pages/PreAdverseActionCardPage",
  component: PreAdverseActionCardPage,
};

const Template: StoryFn = (args) => <PreAdverseActionCardPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
