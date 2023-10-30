import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import OTPInputSection from ".";

export default {
    title: "molecules/OTPInputSection",
    component: OTPInputSection,
} as Meta;

const Template: StoryFn<typeof OTPInputSection> = (args) => <OTPInputSection />;

export const Default = Template.bind({});
Default.args = {};
