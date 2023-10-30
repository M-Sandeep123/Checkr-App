import { StoryFn, Meta } from "@storybook/react";
import CourtSearches from ".";

export default {
  title: "organisms/CourtSearches",
  component: CourtSearches,
} as Meta<typeof CourtSearches>;

const Template: StoryFn<typeof CourtSearches> = (args) => (
  <CourtSearches {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const PassData = Template.bind({});
PassData.args = {
  rowsData: [
    {
      id: 1,
      search: "SSN Verification",
      status: "CLEAR",
      date: "06/07/2023",
    },
    {
      id: 2,
      search: "Sex Offender",
      status: "CONSIDER",
      date: "06/07/2023",
    },
    {
      id: 3,
      search: "Federal Criminal",
      status: "ENGAGE",
      date: "06/07/2023",
    },
    {
      id: 4,
      search: "County Criminal",
      status: "SCHEDULE",
      date: "06/07/2023",
    },
    {
      id: 5,
      search: "County Criminal",
      status: "SCHEDULE",
      date: "06/07/2023",
    },
  ],
};
