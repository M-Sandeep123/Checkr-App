import { Box, Divider, Modal, Stack, styled } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import Typography from "../../atoms/TypographyAtom";
import Icon from "../../atoms/Icon";
import CrossIcon from "../../../../public/assets/images/cross-icon.svg";
import theme from "../../../theme/theme";
import ButtonAtom from "../../atoms/ButtonAtom";
import { DATE_PICKER, EXPORT_MODAL } from "../../../constants";
import CustomeDatePicker from "../../molecules/DatePicker";

interface PropsType {
    open: boolean;
    onClose: () => void;
    onSubmit:()=>void;
}

const ModalOutline = styled(Box)({
    maxWidth: theme.spacing(176.75),
    borderRadius: theme.spacing(1.5),
    backgroundColor: `${theme.palette.textColor.white}`,
});

export const LayOut = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const Body = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(6.25),
    padding: theme.spacing(4),
    marginBottom: theme.spacing(39.75),
}));

const ModalHeader = styled(Stack)({
    padding: `${theme.spacing(4)} ${theme.spacing(5.25)} ${theme.spacing(
        4
    )} ${theme.spacing(5)}`,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
});

const StyledCloseIcon = styled(Icon)(({ theme }) => ({
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
    cursor: "pointer",
}));

export const ExportModal = ({ open, onClose,onSubmit }: PropsType) => {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const getFromDate = (e: any) => {
        setFromDate(e.$d);
    };
    const getToDate = (e: any) => {
        setToDate(e.$d);
    };

    return (
        <LayOut open={open} data-testid="modal-box">
            <ModalOutline>
                <ModalHeader>
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.textColor.highemp}
                        data-testid="header-id"
                    >
                        {EXPORT_MODAL.modalHeader}
                    </Typography>
                    <StyledCloseIcon
                        src={CrossIcon}
                        alt={EXPORT_MODAL.iconMsg}
                        onclick={onClose}
                        data-testid="icon-id"
                    />
                </ModalHeader>
                <Divider />
                <Body>
                    <CustomeDatePicker
                        label={DATE_PICKER.fromLabel}
                        dateFormat={DATE_PICKER.dateFormate}
                        onChange={getFromDate}
                        data-testid="fromDate-id"
                    />
                    <CustomeDatePicker
                        label={DATE_PICKER.toLabel}
                        dateFormat={DATE_PICKER.dateFormate}
                        onChange={getToDate}
                        minDate={dayjs(fromDate)}
                        data-testid="toDate-id"
                    />
                </Body>
                <Divider />
                <ButtonAtom
                    buttonVariant="contained"
                    buttonText={EXPORT_MODAL.exportButton}
                    buttonColor={theme.palette.textColor.white}
                    buttonWidth={127}
                    buttonHeight={36}
                    backgroundColor={theme.palette.primaryColor[500]}
                    bordeRadius={6}
                    sx={{
                        m: `${theme.spacing(3)} ${theme.spacing(4)} ${theme.spacing(
                            3
                        )} ${theme.spacing(0)}`,
                        float: "right",
                    }}
                    disabled={!fromDate || !toDate}
                    data-testid="button-id"
                    onClick={onSubmit}
                />
            </ModalOutline>
        </LayOut>
    );
};
