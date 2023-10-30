import { StoryFn, Meta } from "@storybook/react";
import SuccessModalBox, { SuccessModalProps } from ".";
import Gif from "../../../../public/assets/images/CheckGif.gif";
import { GIF_HEADING } from "../../../constants";

export default {
  title: "molecules/SuccessModalBox",
  component: SuccessModalBox,
} as Meta<typeof SuccessModalBox>;

const Template: StoryFn<SuccessModalProps> = (args) => (
  <SuccessModalBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: GIF_HEADING,
  gifSrc: Gif,
  isOpen: true,
};
