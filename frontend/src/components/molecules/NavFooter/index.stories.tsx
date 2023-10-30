import { Meta, StoryFn } from "@storybook/react";
import ProfilePicture from "../../../../public/assets/images/Avatar.svg";
import IconPicture from "../../../../public/assets/images/Logout.svg";
import NavFooter from ".";

export default {
  title: "molecules/NavFooter",
  component: NavFooter,
  argTypes: {},
} as Meta<typeof NavFooter>;

const Template: StoryFn<typeof NavFooter> = (args) => <NavFooter {...args} />;

export const footer = Template.bind({});
footer.args = {
  avatarSrc: ProfilePicture,
  avatarAlt: "profile picture",
  userName: "James Rodriguez",
  userNameVariant: "body1",
  email: "James.co",
  emailVariant: "caption2",
  emailSx: { "color": "grey" },
  iconSrc: IconPicture,
  iconAlt: "logout",
};
