
import { Meta, StoryFn } from '@storybook/react';
import CandidateInfoHeader from '.';

import exportIcon from "../../../../public/assets/images/export.svg";
import addBoxIcon from "../../../../public/assets/images/add_box.svg";
import backIcon from "../../../../public/assets/images/Back.svg";

export default {
    title: 'Molecules/CandidateInfoHeader',
    component: CandidateInfoHeader,
} as Meta<typeof CandidateInfoHeader>;

const Template: StoryFn<typeof CandidateInfoHeader> = (args) => <CandidateInfoHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithExportButton = Template.bind({});
WithExportButton.args = {
    headerLabel: "Candidate",
    secondaryButtonLabel: 'Export',
    secondaryButtonIconAltText: 'export-icon-button',
    secondaryButtonIconSrc: exportIcon,
    primaryButtonLabel: 'Manual Order',
    primaryButtonIconAltText: 'addbox-icon-button',
    primaryButtonIonSrc: addBoxIcon,
    backButtonIcon: backIcon
};
