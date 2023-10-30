import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import PreAdverseActionCard, { PreAdverseActionCardProp } from ".";
const mockCandidateData = {
  id: 1,
  name: "John Smith",
  location: "Barrouallie",
  email: "John.smith@checkr.com",
  dob: "21-10-2002",
  phoneNo: "(555) 555-5555",
  zipcode: "94158",
  socialSecurity: "123-322-6789",
  driverLicense: "FTEST1111 (CA)",
};

export default {
  title: "organisms/PreAdverseActionCard",
  component: PreAdverseActionCard,
} as Meta<typeof PreAdverseActionCard>;

const Template: StoryFn<PreAdverseActionCardProp> = (args) => (
  <PreAdverseActionCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  candidateData:mockCandidateData
};
