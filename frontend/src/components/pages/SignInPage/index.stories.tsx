import { StoryFn, Meta } from "@storybook/react";
import SignInPage from ".";

export default {
  title: "pages/signin-page",
  component: SignInPage,
} as Meta<typeof SignInPage>;

const Template: StoryFn<typeof SignInPage> = () => <SignInPage />;

export const Primary = Template.bind({});
Primary.args = {};
