import { InputBase, InputBaseProps, styled } from "@mui/material";
import theme from "../../../theme/theme";
import { ChangeEvent } from "react";

export interface PropsType extends InputBaseProps {
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
    height?: string | number;
    width?: string | number;
    border?: string | number;
    bradius?: string | number;
    bcolor?: string;
    typographyVariant?: React.CSSProperties;
    bgcolor?: string;
}

const CustomTextField = ({
    placeholder,
    onChange,
    value,
    type,
    height,
    width,
    border,
    bradius,
    bcolor,
    typographyVariant,
    bgcolor,
    ...rest
}: PropsType) => {
    const StyledTextField = styled(InputBase)(({ theme }) => ({
        height,
        width,
        border: border,
        borderRadius: bradius || theme.shape.borderRadius,
        backgroundColor: bgcolor || theme.palette.background.paper,
        "& input": {
            padding: theme.spacing(3),
            color: theme.palette.textColor.highemp,
            "::placeholder": {
                color: theme.palette.textColor.medemp,
            },
            ...typographyVariant,
        },
    }));

    return (
        <StyledTextField
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={onChange}
            theme={theme}
            {...rest}
        />
    );
};

export default CustomTextField;
