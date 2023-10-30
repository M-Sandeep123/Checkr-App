import { StoryFn, Meta } from "@storybook/react";
import { AdverseActionPage } from ".";
export default {
  title: "pages/PreAdverseActionPage",
  component: AdverseActionPage,
} as Meta<typeof AdverseActionPage>;

const Template: StoryFn<typeof AdverseActionPage> = () => <AdverseActionPage />;

export const Default = Template.bind({});
Default.args = {};
