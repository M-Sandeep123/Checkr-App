import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Filter } from ".";

export default {
  title: "molecules/Filter",
  component: Filter,
} as Meta<typeof Filter>;

const Template: StoryFn<typeof Filter> = (args) => <Filter {...args} />;

export const CandidatesFilter = Template.bind({});
export const AdverseActionFilter = Template.bind({});

CandidatesFilter.args = {
  isCandidatesFilter: true,
  isCandidateFilterOpen:true
};
AdverseActionFilter.args = {
  isCandidatesFilter: false,
  isAdverseActionFilterOpen:true
};
