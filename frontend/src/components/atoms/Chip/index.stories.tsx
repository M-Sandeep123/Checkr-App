
import { Meta, StoryFn } from "@storybook/react";
import CustomChip from ".";

export default {
    title: "atoms/BasicChip",
    component: CustomChip,
    argTypes: {
        control: {
            variat: {
                type: "radio",
                options: ["filled", "outlined"]
            },
            color: {
                type: "radio",
                options: ["default", "primary", "secondary", "error", "info", "success", "warning"]
            },
            size: {
                type: "radio",
                options: ["medium", "small"]
            },
            width: {
                type: "number"
            }
        },
    }
} as Meta<typeof CustomChip>;

const Templeat: StoryFn<typeof CustomChip> = (args) => <CustomChip {...args} />;


export const CONSIDER = Templeat.bind({});
CONSIDER.args = {
    label: "CONSIDER",
    variant: "filled",
    color: "primary",
    size: "medium",
};

export const CLEAR = Templeat.bind({});
CLEAR.args = {
    label: "CLEAR",
    variant: "filled",
    color: "primary",
    size: "medium",
};


export const ENGAGE = Templeat.bind({});
ENGAGE.args = {
    label: "ENGAGE",
    variant: "filled",
    color: "primary",
    size: "medium",
};


export const SCHEDULE = Templeat.bind({});
SCHEDULE.args = {
    label: "SCHUDELE",
    variant: "filled",
    color: "primary",
    size: "medium",
};

