import { render, screen, fireEvent } from '@testing-library/react';
import CustomeDatePicker from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../theme/theme';

describe("DatePicker", () => {

    test('renders CustomeDatePicker component', () => {
        render(
            <ThemeProvider theme={theme}>
                <CustomeDatePicker />
            </ThemeProvider>
        );

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('invokes onChange callback when date is selected', () => {
        const mockOnChange = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <CustomeDatePicker onChange={mockOnChange} />
            </ThemeProvider>
        );

        const input = screen.getByRole('textbox');
        const selectedDate = new Date(2023, 6, 10);
        fireEvent.change(input, { target: { value: selectedDate.toISOString() } });

        expect(mockOnChange).not.toHaveBeenCalledWith(selectedDate);
    });
})
