
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Typography, styled } from '@mui/material';
import dayjs from 'dayjs';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import theme from '../../../theme/theme';

export interface PropsType {
    label?: string;
    dateFormat?: string;
    onChange?: (e: unknown) => void;
    minDate?: dayjs.Dayjs;
}

const WraperBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexFlow: "column",
    gap: theme.spacing(2),
    width: theme.spacing(81.25),
    height: theme.spacing(16)
}));

const CustomCalendarIcon = styled(CalendarTodayOutlinedIcon)(({ theme }) => ({
    color: theme.palette.primaryColor[400]
}));

const CustomDatePicker = styled(DatePicker)(({ theme }) => ({

    "& .MuiOutlinedInput-root": {
        width: theme.spacing(81.25),
        height: theme.spacing(9),
        "& fieldset": {
            borderColor: theme.palette.structural.stroke,
            borderRadious: theme.spacing(1)
        },
        "&:hover fieldset": {
            borderColor: theme.palette.structural.stroke,
            borderRadious: theme.spacing(1)
        },
    },

}));

export default function CustomeDatePicker({ label, dateFormat, onChange, minDate }: PropsType) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <WraperBox >
                <Typography variant='body2' sx={{ color: theme.palette.textColor.medemp }}>{label}</Typography>
                <CustomDatePicker
                    format={dateFormat}
                    slots={{
                        openPickerIcon: CustomCalendarIcon
                    }}
                    showDaysOutsideCurrentMonth
                    onChange={onChange}
                    minDate={minDate}
                />
            </WraperBox>
        </LocalizationProvider>
    )
}
