

import { Meta, StoryFn } from "@storybook/react";
import CustomImage from "./index";
import PolicyImg from "../../../../public/assets/images/Privacy policy-pana (1) 2.svg";

export default {
    title: "atoms/Image",
    component: CustomImage,
    argTypes: {
        src: {
            control: {
                type: "text"
            }
        },
        width: {
            control: {
                type: "number"
            }
        },
        height: {
            control: {
                type: "number"
            }
        }
    }
} as Meta<typeof CustomImage>;


const Template: StoryFn<typeof CustomImage> = (args) => <CustomImage {...args} />;

export const Image = Template.bind({});
Image.args = {
    src: PolicyImg,
    alt: "policy-image",
    width: "40px",
    height: "40px"
};


