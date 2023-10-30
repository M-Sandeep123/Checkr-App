import React, { ChangeEvent, ReactNode } from "react";
import {
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
} from "@mui/material";
import Typography from "../../atoms/TypographyAtom";

export interface PaginationMoleculeProps {
  boundaryCount?: number;
  count?: number;
  defaultPage?: number;
  disable?: boolean;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  handleChange?: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  onChange2?: (event: ChangeEvent<unknown>, page: number) => void;
  page: number;
  shape?: "rounded" | "circular";
  showFirstButton?: boolean;
  showLastButton?: boolean;
  siblingCount?: number;
  size?: "small" | "medium" | "large";
  sx?: SxProps;
  variant?: "text" | "outlined";
  label?: number | string;
  labelColor?: string;
}

export default function PaginationMolecule({
  boundaryCount,
  count,
  defaultPage,
  disable,
  hideNextButton,
  hidePrevButton,
  handleChange,
  onChange2,
  page,
  shape,
  showFirstButton,
  showLastButton,
  siblingCount,
  size,
  sx,
  variant,
  label,
  labelColor,
}: PaginationMoleculeProps) {
  let age = ""

  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap="10px">
          <Typography color={labelColor}>
            {page} out of {label}
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ Roboto: "Without label" }}
              data-testid="dropDown"
            >
              <MenuItem data-testid="dropDownOptions" value="">
                10 per page
              </MenuItem>
              <MenuItem data-testid="dropDownOptions" value={20}>
                20 per page
              </MenuItem>
              <MenuItem data-testid="dropDownOptions" value={30}>
                30 per page
              </MenuItem>
              <MenuItem data-testid="dropDownOptions" value={40}>
                40 per page
              </MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Pagination
          boundaryCount={boundaryCount}
          count={count}
          defaultPage={defaultPage}
          disabled={disable}
          hideNextButton={hideNextButton}
          hidePrevButton={hidePrevButton}
          onChange={onChange2}
          page={page}
          shape={shape}
          showFirstButton={showFirstButton}
          showLastButton={showLastButton}
          siblingCount={siblingCount}
          size={size}
          sx={sx}
          variant={variant}
        />
      </Stack>
    </div>
  );
}
