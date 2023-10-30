import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Card from ".";
import UserInfoImage from "../../../../public/assets/images/user_info_image.svg";
import { NAME_PLACEHOLDER, USER_NAME } from "../../../constants";

export default {
  title: "molecules/Card",
  component: Card,
  argTypes: {},
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: NAME_PLACEHOLDER,
  content: USER_NAME,
  imageUrl: UserInfoImage,
};
