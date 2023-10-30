import { StoryFn, Meta } from "@storybook/react";
import { CandidateInformation } from ".";
import {
  CANDITATE_PAGE_INFROMATION,
  CANDITATE_PAGE_REPORT_INFROMATION,
  SINGLE_USER_DATA,
} from "../../../constants";

export default {
  title: "pages/CandidateInformation",
  component: CandidateInformation,
} as Meta<typeof CandidateInformation>;

const Template: StoryFn<typeof CandidateInformation> = (args) => (
  <CandidateInformation {...args} />
);

export const Default = Template.bind({});
const mockCandidateData = SINGLE_USER_DATA;
Default.args = {
  persontitle: CANDITATE_PAGE_INFROMATION,
  reporttitle: CANDITATE_PAGE_REPORT_INFROMATION,
  candidateData: mockCandidateData,
};
