import { StoryFn, Meta } from "@storybook/react";
import PaginationMolecule, { PaginationMoleculeProps } from ".";

export default {
  title: "molecules/PaginationMolecule",
  component: PaginationMolecule,
} as Meta<typeof PaginationMolecule>;

const Template: StoryFn<PaginationMoleculeProps> = (args) => (
  <PaginationMolecule {...args} />
);

export const Default = Template.bind({});
Default.args = {
  boundaryCount: 1,
  count: 3,
  defaultPage: 1,
  disable: false,
  hideNextButton: false,
  hidePrevButton: false,
  onChange: (event, page) => console.log(event, page),
  page: 10,
  shape: "rounded",
  siblingCount: 1,
  size: "medium",
  variant: "text",
  label: 84,
  labelColor: "#696A6E",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  ...Default.args,
  size: "small",
};
