import { MuiCheckbox } from ".";
import { StoryFn, Meta } from "@storybook/react";
export default {
  title: "atoms/Checkbox",
  component: MuiCheckbox,
  argTypes: {
    onChange: { action: "Checkbox clicked" },
  },
} as Meta<typeof MuiCheckbox>;

const template: StoryFn<typeof MuiCheckbox> = (args) => (
  <MuiCheckbox {...args} />
);
export const Primary = template.bind({});

Primary.args = {
  defaultChecked: true,
};
