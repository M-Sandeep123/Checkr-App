
import { Meta, StoryFn } from '@storybook/react';
import GifTypography from '.';
import { OTP_SUCCESS_MSG, DOWNLOAD_EXPORT_MSG } from '../../../constants';
import gifImage from "../../../../public/assets/images/CheckGif.gif";

export default {
    title: 'Molecules/GifTypography',
    component: GifTypography,
} as Meta<typeof GifTypography>;

const Template: StoryFn<typeof GifTypography> = (args) => <GifTypography {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const OTPSuccess = Template.bind({});
OTPSuccess.args = {
    gifSrc: gifImage,
    gifTypographyLabel: `${OTP_SUCCESS_MSG}`,
};

export const LinkSendSuccess = Template.bind({});
LinkSendSuccess.args = {
    gifSrc: gifImage,
    gifTypographyLabel: `${DOWNLOAD_EXPORT_MSG}`
};
