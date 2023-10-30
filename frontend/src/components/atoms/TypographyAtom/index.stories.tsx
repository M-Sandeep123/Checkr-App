import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TypographyAtom from ".";

export default {
  title: "Atoms/TypographyAtom",
  component: TypographyAtom,
} as Meta;

const Template: StoryFn<typeof TypographyAtom> = (args) => (
    <TypographyAtom {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "heading1",
  children: "Forgot Password?",
};
