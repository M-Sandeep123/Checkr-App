import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { PreAdviceActionModal } from ".";
import { CHARGES_SELECTED, DEFAULT_USER_DATA } from "../../../constants";

export default {
  title: "organisms/preadvice-action-modal",
  component: PreAdviceActionModal,
  argTypes: {},
} as Meta<typeof PreAdviceActionModal>;

const Template: StoryFn<typeof PreAdviceActionModal> = (args) => (
  <PreAdviceActionModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  chargesSelected: CHARGES_SELECTED,
  userData: DEFAULT_USER_DATA
};
