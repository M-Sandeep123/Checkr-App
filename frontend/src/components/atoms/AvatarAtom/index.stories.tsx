import { Meta, StoryFn } from "@storybook/react";
import AvatarAtom from "./index";

export default {
  title: "atoms/AvatarAtom",
  component: AvatarAtom,
} as Meta;

const Template: StoryFn<typeof AvatarAtom> = (args) => <AvatarAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  alt: "Avatar",
};
