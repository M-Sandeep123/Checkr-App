import { Meta, StoryFn } from "@storybook/react";
import SignInTemplate from "../SignIn/index";
import Privacy_Policy from "../../../../public/assets/images/Privacy policy-pana (1) 2.svg";
import { SignUp } from "../../organisms/SignUp";

export default {
  title: "templates/SignInTemplate",
  component: SignInTemplate,
} as Meta<typeof SignInTemplate>;

const Template: StoryFn<typeof SignInTemplate> = (args) => (
    <SignInTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Pagelook = Template.bind({})
Pagelook.args={
 image: Privacy_Policy,
 children: <SignUp/>
}
