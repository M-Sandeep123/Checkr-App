import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CheckBoxTypography, { PropsTypes } from ".";
import theme from "../../../theme/theme";

export default {
    title: "Molecules/CheckBoxTypography",
    component: CheckBoxTypography,
} as Meta;

const Template: StoryFn<PropsTypes> = (args) => <CheckBoxTypography {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "All status",
    labelColor: theme.palette.textColor.medemp
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    label: "Custom color",
    labelColor: theme.palette.primaryColor[500],
};
