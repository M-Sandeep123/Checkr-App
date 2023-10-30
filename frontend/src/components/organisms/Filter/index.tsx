import React from "react";
import {
  Checkbox,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
  styled,
} from "@mui/material";
import theme from "../../../theme/theme";
import {
  ADVERSE_ACTION_FILTER_DATA,
  ADVERSE_ACTION_FILTER_LABEL_DATA,
  CANDIDATES_FILTER_LABEL_DATA,
} from "../../../constants";

interface FilterProps {
  isCandidatesFilter: boolean;
  showAll?: boolean;
  showAdjAll?: boolean;
  filterStatusLabelData?: string[];
  filterAdjLabelData?: string[];
  handleCandidatesFilterClick?: () => void;
  handleAdverseActionFilterClick?: () => void;
  handleShowAllChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterStatusChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleShowAdjAllChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterAdjudicationChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isCandidateFilterOpen: boolean;
  isAdverseActionFilterOpen: boolean;
}

const StyledDialog = styled(Dialog)({
  height: "95%",
  left: "73%",
  top: "158px",
  ".css-hz1bth-MuiDialog-container": {
    alignItems: "flex-start",
  },
  ".css-ypiqx9-MuiDialogContent-root": {
    padding: "16px",
  },
  ".css-bdhsul-MuiTypography-root-MuiDialogTitle-root": {
    padding: "12px 0px 12px 16px",
  },
  ".css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label": {
    fontSize: "12px",
    lineHeight: "18px",
    color: `${theme.palette.textColor.highemp}`,
  },
  ".css-j204z7-MuiFormControlLabel-root": {
    marginRight: "0px",
  },
  ".css-dmmspl-MuiFormGroup-root": {
    gap: "12px",
  },
  ".css-ekeie0":{
    alignItems:"flex-start",
  }
});
const StyledFormControlLabel = styled(FormControlLabel)({
  ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
    padding: "2px 11px 2px 10px",
    color: theme.palette.greyColor.stroke
  },
});
export const Filter = (props: FilterProps) => {
  return (
    <Box>
      {props.isCandidatesFilter ? (
        <StyledDialog
          data-testid="candidateFilter"
          open={props.isCandidateFilterOpen}
          onClose={props.handleCandidatesFilterClick}
          PaperProps={{
            style: {
              boxShadow: "0 4px 16px 0 rgba(3, 3, 3, 0.04)",
              width: "285px",
              margin: 0,
              borderRadius: "6px",
            },
          }}
        >
          <DialogTitle>
            <Typography
              variant="body2"
              color={theme.palette.textColor.highemp}
            >
              {CANDIDATES_FILTER_LABEL_DATA.title}
            </Typography>
          </DialogTitle>
          <Divider />
          <DialogContent>
            {" "}
            <FormGroup>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.textColor.medemp,
                }}
              >
                {CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.title}
              </Typography>
              <StyledFormControlLabel
                control={
                  <Checkbox
                    onChange={props.handleShowAllChange}
                    value={
                      CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                        .values[0]
                    }
                    checked={props.showAll}
                    size="small"
                    color="primary"
                  />
                }
                label={
                  CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                    .label[0]
                }
              />
              <StyledFormControlLabel
                control={
                  <Checkbox
                    value={
                      CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                        .values[1]
                    }
                    checked={props.filterStatusLabelData?.includes(
                      CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                        .values[1]
                    )}
                    onChange={props.handleFilterStatusChange}
                    size="small"
                    color="primary"
                  />
                }
                label={
                  CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                    .label[1]
                }
              />
              <StyledFormControlLabel
                control={
                  <Checkbox
                    value={
                      CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                        .values[2]
                    }
                    checked={props.filterStatusLabelData?.includes(
                      CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                        .values[2]
                    )}
                    onChange={props.handleFilterStatusChange}
                    size="small"
                    color="primary"
                  />
                }
                label={
                  CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                    .label[2]
                }
              />

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.textColor.lowemp,
                  marginTop: "8px",
                }}
              >
                {CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.title}
              </Typography>
              <StyledFormControlLabel
                control={
                  <Checkbox
                    size="small"
                    value={
                      CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions
                        .values[0]
                    }
                    checked={props.showAdjAll}
                    onChange={props.handleShowAdjAllChange}
                    color="primary"
                  />
                }
                label={
                  CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions
                    .label[0]
                }
              />
              <StyledFormControlLabel
                control={
                  <Checkbox
                    size="small"
                    value={
                      CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions
                        .values[1]
                    }
                    checked={props.filterAdjLabelData?.includes(
                      CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions
                        .values[1]
                    )}
                    onChange={props.handleFilterAdjudicationChange}
                    color="primary"
                  />
                }
                label={
                  CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions
                    .label[1]
                }
              />
              <StyledFormControlLabel
                control={
                  <Checkbox
                    size="small"
                    value={
                      CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions
                        .values[2]
                    }
                    checked={props.filterAdjLabelData?.includes(
                      CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions
                        .values[2]
                    )}
                    onChange={props.handleFilterAdjudicationChange}
                    color="primary"
                  />
                }
                label={
                  CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions
                    .label[2]
                }
              />
            </FormGroup>
          </DialogContent>
        </StyledDialog>
      ) : (
        <StyledDialog
          data-testid="adverseActionFilter"
          open={props.isAdverseActionFilterOpen}
          onClose={props.handleAdverseActionFilterClick}
          PaperProps={{
            style: {
              boxShadow: "0 4px 16px 0 rgba(3, 3, 3, 0.04)",
              width: "285px",
              margin: 0,
              borderRadius: "6px",
            },
          }}
        >
          <DialogTitle>
            <Typography
              variant="body1"
              color={theme.palette.textColor.highemp}
            >
              {ADVERSE_ACTION_FILTER_DATA.title}
            </Typography>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <FormGroup>
              <Typography
                variant="body1"
                color={theme.palette.textColor.lowemp}
              >
                {ADVERSE_ACTION_FILTER_DATA.subTitle}
              </Typography>
              <StyledFormControlLabel
                control={<Checkbox onChange={props.handleShowAllChange} checked={props.showAll} value="ALL" size="small" />}
                label={ADVERSE_ACTION_FILTER_DATA.defaultCheckboxLabel}
              />
              {ADVERSE_ACTION_FILTER_LABEL_DATA.map((filterOption) => {
                return (
                  <StyledFormControlLabel
                    key={filterOption.label}
                    control={
                      <Checkbox
                        defaultChecked={false}
                        value={filterOption.label}
                        size="small"
                        onChange={props.handleFilterStatusChange}
                      />
                    }
                    label={filterOption.label}
                  />
                );
              })}
            </FormGroup>
          </DialogContent>
        </StyledDialog>
      )}
    </Box>
  );
};
