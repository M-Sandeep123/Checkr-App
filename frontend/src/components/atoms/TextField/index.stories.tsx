import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomTextField from ".";
import theme from '../../../theme/theme';


export default {
    title: "Atoms/TextField",
    component: CustomTextField,
} as Meta;

const Template: StoryFn<typeof CustomTextField> = (args) => (<CustomTextField {...args} />);

export const TextField = Template.bind({});
TextField.args = {
    placeholder: "Search for candidate",
    type: "text",
    width: "384px",
    height: "36px",
    border: "1px solid #E5E7ED",
    bcolor: `${theme.palette.greyColor.stroke}`,
    bradius: '4px',
    typographyVariant: theme.typography.body2,
    bgcolor: `${theme.palette.greyColor.white}`,
};




