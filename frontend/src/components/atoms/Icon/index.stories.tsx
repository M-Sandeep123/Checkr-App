import Icon from ".";
import { StoryFn, Meta } from "@storybook/react";
import HomeIcon from "../../../../public/assets/images/home.svg";

export default {
  title: "atoms/Icon",
  component: Icon,
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Home = Template.bind({});

Home.args = {
  src: HomeIcon,
  alt: "Icon not found",
};
