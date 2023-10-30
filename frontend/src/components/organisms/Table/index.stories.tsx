import { StoryFn, Meta } from "@storybook/react";
import DataTable from ".";
import { TABLE_DATA } from "../../../constants";
import { candidates_page_columns } from "../../pages/CandidatesPage";

export default {
  title: "organisms/Data-Table",
  component: DataTable,
} as Meta<typeof DataTable>;

const Template: StoryFn<typeof DataTable> = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: candidates_page_columns,
  rowsData: TABLE_DATA,
};
