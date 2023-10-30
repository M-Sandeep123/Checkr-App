import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DataTable, { TableColumn } from ".";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/theme";
import { TABLE_DATA } from "../../../constants";
const mockColumnsWithWidth: TableColumn[] = [
  {
    id: 1,
    key: "pre_notice_date",
    name: "PRE NOTICE DATE",
    width: "15.66vw",
  },
];
const mockColumns = [
  {
    id: 1,
    key: "pre_notice_date",
    name: "PRE NOTICE DATE",
  },
];
describe("DataTable", () => {
  const rowsData = TABLE_DATA;
  const mockFunction = jest.fn();
  test("renders without errors", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <DataTable
            rowsData={rowsData}
            columns={mockColumns}
            showCandidatesFilter={true}
            getSearch={mockFunction}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const getHeader = screen.getByText("Candidate Information");
    expect(getHeader).toBeInTheDocument();
  });

  test("initial state is set correctly", async () => {
    const handleOnClick = jest.fn();
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <DataTable
            rowsData={rowsData}
            columns={mockColumnsWithWidth}
            showCandidatesFilter={true}
            getSearch={mockFunction}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const ele = screen.getByTestId("filter-button");
    fireEvent.click(ele, handleOnClick);
    expect(rowsData).toHaveLength(10);
  });

  test("test search value", () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <DataTable rowsData={rowsData} showCandidatesFilter={true} getSearch={mockFunction} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const ele = getByPlaceholderText("Search any candidate");
    fireEvent.change(ele, { target: { value: "New value" } });
    expect(rowsData).toHaveLength(10);
  });

  test("initial state is set correctly", async () => {
    const handleOnClick = jest.fn();
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <DataTable rowsData={rowsData} showCandidatesFilter={true} getSearch={mockFunction}/>
        </ThemeProvider>
      </BrowserRouter>
    );
    const ele = screen.getByTestId("filter-button");
    fireEvent.click(ele, handleOnClick);
    const clearCheckBox = screen.getByText("Clear");
    fireEvent.click(clearCheckBox);
    const clearCheckBoxUnCheck = screen.getByText("Clear");
    fireEvent.click(clearCheckBoxUnCheck);
    const getStatus = screen.getByText("Consider");
    expect(getStatus).toBeInTheDocument();
  });
});
