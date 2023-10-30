import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material";
import theme from "../../../theme/theme";
import Typography from "../../atoms/TypographyAtom";
import { Navlink } from "../../atoms/Navlink";
import CustomChip from "../../atoms/Chip";
import { COURT_SECTION, dateDisplay } from "../../../constants";
import "./styles.css";
export interface RowData {
  id: number;
  search: string;
  status: string;
  date: string;
}

export interface PropsType {
  rowsData?: RowData[];
}

const StyledCell = styled(TableCell)({
  height: theme.spacing(12),
  padding: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(
    0
  )} ${theme.spacing(3)}`,
});

const StyledTableHeaderCell = styled(TableCell)({
  textAlign: "left",
  backgroundColor: `${theme.palette.structural.white}`,
  height: theme.spacing(14),
  padding: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(
    0
  )} ${theme.spacing(3)}`,
});

const StyledTableDataCell = styled(TableCell)({
  top: 57,
  backgroundColor: theme.palette.primaryColor[100],
  height: theme.spacing(10.5),
  padding: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(
    0
  )} ${theme.spacing(3)}`,
});

export default function CourtSearches({ rowsData }: PropsType) {
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ borderRadius: theme.spacing(1.5) }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableHeaderCell align="center" colSpan={5}>
                <Typography variant="subtitle1">
                  {COURT_SECTION.tableHeader}
                </Typography>
              </StyledTableHeaderCell>
            </TableRow>
            <TableRow>
              {COURT_SECTION.columnsData.map((column) => (
                <StyledTableDataCell
                  colSpan={0}
                  key={column.id}
                  align={
                    column.name !== COURT_SECTION.isDate ? "left" : "right"
                  }
                >
                  <Typography
                    variant="caption2"
                    sx={{ color: theme.palette.textColor.medemp }}
                  >
                    {column.name}
                  </Typography>
                </StyledTableDataCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData?.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                <StyledCell align="left" className="search-cell">
                  <Navlink>{row.search}</Navlink>
                </StyledCell>

                <StyledCell align="left" className="status-cell">
                  <CustomChip variant="filled" label={row.status} />
                </StyledCell>
                <StyledCell align="right" className="date-cell">
                  {dateDisplay(row.date)}
                </StyledCell>
                <StyledCell align="left" className="dummy-cell"></StyledCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
