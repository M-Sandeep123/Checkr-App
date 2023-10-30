import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { CandidateInfoPage } from ".";

export default {
  title: "pages/CandidateInfoPage",
  component: CandidateInfoPage,
} as Meta<typeof CandidateInfoPage>;

const Template: StoryFn<typeof CandidateInfoPage> = () => <CandidateInfoPage />;

export const Primary = Template.bind({});
Primary.args = {};
