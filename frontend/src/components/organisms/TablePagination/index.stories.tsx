import { StoryFn, Meta } from "@storybook/react";
import PaginatedItems from ".";
import { TABLE_DATA } from "../../../constants";
import { candidates_page_columns } from "../../pages/CandidatesPage";

export default {
  title: "organisms/Table-Pagination",
  component: PaginatedItems,
} as Meta<typeof PaginatedItems>;

const Template: StoryFn<typeof PaginatedItems> = (args) => (
  <PaginatedItems {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tableData: TABLE_DATA,
  columns: candidates_page_columns,
};
