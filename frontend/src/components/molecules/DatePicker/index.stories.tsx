import { StoryFn, Meta } from "@storybook/react";
import CustomeDatePicker from ".";
import { DATE_PICKER } from "../../../constants";

export default {
    title: "molecules/DatePicker",
    component: CustomeDatePicker,
    argTypes: {
        control: {
            label: {
                type: "text"
            }
        }
    }
} as Meta<typeof CustomeDatePicker>;

const Template: StoryFn<typeof CustomeDatePicker> = (args) => <CustomeDatePicker {...args} />;
export const From = Template.bind({});
From.args = {
    label: DATE_PICKER.toLabel,
    dateFormat: DATE_PICKER.dateFormate
};

export const To = Template.bind({});
To.args = {
    label: DATE_PICKER.fromLabel,
    dateFormat: DATE_PICKER.dateFormate
};
