import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Navbar } from ".";
import ProfilePicture from "../../../../public/assets/images/Avatar.svg";
import IconPicture from "../../../../public/assets/images/Vector.svg";
import { DEFAULT_EMAIL, DEFAULT_USERNAME, NAV_LISTS } from "../../../constants";

export default {
  title: "organisms/Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Navigation = Template.bind({});
Navigation.args = {
  navFooterProps: {
    avatarSrc: ProfilePicture,
    avatarAlt: "profile picture",
    avatarSx: {
      width: "36px",
      height: "36px",
    },
    userName: DEFAULT_USERNAME,
    userNameVariant: "body1",
    email: DEFAULT_EMAIL,
    emailVariant: "caption2",
    emailSx: { color: "grey" },
    iconSrc: IconPicture,
    iconAlt: "logout",
    iconStyle: {
      width: "18px",
      height: "18px",
      cursor: "pointer",
    },
  },
  navLists: NAV_LISTS,
};
