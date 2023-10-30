import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { ExportModal } from ".";
import theme from "../../../theme/theme";

describe("ExportModal", () => {
    const onClose = jest.fn();

    it("renders the modal when open prop is true", () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <ExportModal open={true} onClose={onClose} onSubmit={()=>{}}/>
            </ThemeProvider>
        );
        const modalBox = getByTestId("modal-box");
        expect(modalBox).toBeInTheDocument();
    });

    it("does not render the modal when open prop is false", () => {
        const { queryByTestId } = render(
            <ThemeProvider theme={theme}>
                <ExportModal open={false} onClose={onClose} onSubmit={()=>{}}/>
            </ThemeProvider>
        );
        const modalBox = queryByTestId("modal-box");
        expect(modalBox).toBeNull();
    });

    it("test from date selection", () => {
        render(
            <ThemeProvider theme={theme}>
                <ExportModal open={true} onClose={onClose} onSubmit={()=>{}}/>
            </ThemeProvider>
        )
        const calendarIcons = screen.getAllByTestId("CalendarTodayOutlinedIcon");
        const firstIcon = calendarIcons[0];
        fireEvent.click(firstIcon);
        const button = screen.getByRole("gridcell", { name: "21" });
        fireEvent.click(button);
    })

    it("test to date selection", () => {
        render(
            <ThemeProvider theme={theme}>
                <ExportModal open={true} onClose={onClose} onSubmit={()=>{}}/>
            </ThemeProvider>
        );

        const calendarIcons = screen.getAllByTestId("CalendarTodayOutlinedIcon");
        const secondIcon = calendarIcons[1];
        fireEvent.click(secondIcon);

        const buttons = screen.getAllByRole("gridcell", { name: "29" });
        fireEvent.click(buttons[0]);
    });

    it("Icon should be render", () => {
        render(
            <ThemeProvider theme={theme}>
                <ExportModal open={true} onClose={onClose} onSubmit={()=>{}}/>
            </ThemeProvider>
        );
        const icon = screen.getByAltText("Close-icon");
        expect(icon).toBeInTheDocument();
    });
    it("submit btn works as expected",async()=>{
        render(
            <ThemeProvider theme={theme}>
                <ExportModal open={true} onClose={onClose} onSubmit={()=>{}}/>
            </ThemeProvider>
        )
        const calendarIcons = screen.getAllByTestId("CalendarTodayOutlinedIcon");
        const firstIcon = calendarIcons[0];
        fireEvent.click(firstIcon);
        const button = screen.getByRole("gridcell", { name: "21" });
        fireEvent.click(button);
        const secondIcon = calendarIcons[1];
        fireEvent.click(secondIcon);
        const buttons = screen.getAllByRole("gridcell", { name: "29" });
        fireEvent.click(buttons[0]);
        const allButtons = screen.getAllByRole("button");
        expect(allButtons).toHaveLength(9);
        const submitBtn = allButtons[8];
        expect(submitBtn).toBeInTheDocument();
        fireEvent.click(submitBtn);
    })
});
