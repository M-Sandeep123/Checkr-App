import { StoryFn, Meta } from "@storybook/react";
import { ExportModal } from ".";

export default {
    title: "organisms/export-modal",
    component: ExportModal,
    argTypes: {},
} as Meta<typeof ExportModal>;

const Template: StoryFn<typeof ExportModal> = (args) => (
    <ExportModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
    open: true
};
