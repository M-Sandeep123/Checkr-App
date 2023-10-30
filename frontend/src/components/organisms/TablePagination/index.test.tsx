import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme";
import PaginatedItems from ".";
import { TABLE_DATA } from "../../../constants";

describe("PaginatedItems", () => {
  const tableData = TABLE_DATA;
  const mockColumns = [
    {
      id: 3,
      key: "pre_notice_date",
      name: "PRE NOTICE DATE",
      width: "15.66vw",
    },
  ];
  it("renders the component with correct data", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <PaginatedItems
            tableData={tableData}
            columns={mockColumns}
            showCandidatesFilter={false}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  it("changes the items per page correctly", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <PaginatedItems
            tableData={tableData}
            columns={mockColumns}
            showCandidatesFilter={false}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const ele = screen.getByTestId("drop-down");
    fireEvent.click(ele);
    const textEle = screen.getByText("5 per page");
    fireEvent.change(textEle);
    expect(tableData).toHaveLength(10);
    const dropdowns = screen.getAllByRole("button");
    expect(dropdowns).toHaveLength(5);
    fireEvent.click(dropdowns[3]);
    fireEvent.mouseDown(dropdowns[0]);
    const options = screen.getAllByRole("option");
    fireEvent.click(options[1]);
  });
  it("seraching something in search bar",()=>{
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <PaginatedItems
            tableData={tableData}
            columns={mockColumns}
            showCandidatesFilter={false}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const dropdowns = screen.getAllByRole("button");
    fireEvent.mouseDown(dropdowns[0]);
    const options = screen.getAllByRole("option");
    fireEvent.click(options[1]);
    const inputfield = screen.getByPlaceholderText("Search any candidate");
    fireEvent.change(inputfield, { target: { value: "j" } });
    fireEvent.change(inputfield, { target: { value: "o" } });
  })
});