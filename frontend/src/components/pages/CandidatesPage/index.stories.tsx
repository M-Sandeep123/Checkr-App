import { StoryFn, Meta } from "@storybook/react";
import { CandidatesPage } from ".";
export default {
  title: "pages/CandidatesPage",
  component: CandidatesPage,
} as Meta<typeof CandidatesPage>;

const Template: StoryFn<typeof CandidatesPage> = () => <CandidatesPage />;

export const Default = Template.bind({});
Default.args = {};
