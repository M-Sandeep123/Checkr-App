import { StoryFn, Meta } from "@storybook/react";
import { ForgotPassword } from ".";

export default {
  title: "molecules/ForgotPassword",
  component: ForgotPassword,
} as Meta<typeof ForgotPassword>;

const Template: StoryFn<typeof ForgotPassword> = (args) => <ForgotPassword />;

export const ForgotPasswordScreen = Template.bind({});

ForgotPasswordScreen.args = {};
