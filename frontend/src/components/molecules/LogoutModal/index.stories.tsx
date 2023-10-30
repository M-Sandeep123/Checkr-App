import { StoryFn, Meta } from "@storybook/react";
import LogoutModalBox from ".";
import { CANCEL_BUTTON, LOGOUT_BUTTON } from "../../../constants";

export default {
  title: "molecules/LogoutModalBox",
  component: LogoutModalBox,
} as Meta<typeof LogoutModalBox>;

const Template: StoryFn<typeof LogoutModalBox> = (args) => (
  <LogoutModalBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  Cancelbuttonlabel: CANCEL_BUTTON,
  Logoutbuttonlabel: LOGOUT_BUTTON,
  isOpen: true,
};
