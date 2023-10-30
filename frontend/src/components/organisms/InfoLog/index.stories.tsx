import { StoryFn, Meta } from "@storybook/react";
import InfoLog, { InfoLogProps } from ".";
import { MapData, data } from "../../../constants";

export default {
  title: "organisms/InfoLog",
  component: InfoLog,
} as Meta<typeof InfoLog>;

const Template: StoryFn<InfoLogProps> = (args) => <InfoLog {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data as MapData[],
  headerName: "Candidate Information",
};
