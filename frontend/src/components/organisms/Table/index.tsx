import { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  InputAdornment,
  Paper,
  TableCell,
  TextField,
} from "@mui/material";
import Table from "@mui/material/Table";
import SearchIcon from "@mui/icons-material/Search";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FilterIcon from "../../../../public/assets/images/Filter.svg";
import DotsButton from "../../../../public/assets/images/dots-Button.svg";
import Typography from "../../atoms/TypographyAtom";
import Icon from "../../atoms/Icon";
import { DATA_TABLE } from "../../../constants";
import { Filter } from "../Filter";
import { TableData } from "../TablePagination";
import "./styles.css";
import { useNavigate } from "react-router";

export interface TableColumn {
  id: number;
  key: string;
  name: string;
  align?: "left" | "right" | "center";
  width?: string;
  render?: (data: any) => React.JSX.Element | string | number;
}

interface DataTableProps {
  columns?: TableColumn[];
  rowsData: any[];
  showCandidatesFilter: boolean;
  getSearch: (data:number)=> void;
}
export default function DataTable({
  columns,
  rowsData,
  showCandidatesFilter,
  getSearch
}: DataTableProps) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOnClickFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleFilterStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked && !filterStatus.includes(value)) {
      setFilterStatus((prevStatus) => [...prevStatus, value]);
    } else {
      setFilterStatus((prevStatus) =>
        prevStatus.filter((status) => status !== value)
      );
    }
  };

  const isMatchingFilterStatus = (status: string) => {
    return (
      filterStatus.length === 0 ||
      filterStatus.some((filter) =>
        status.toUpperCase().includes(filter.toUpperCase())
      )
    );
  };

  const isMatchingSearchValue = (data: TableData) => {
    const searchValueNormalized = searchValue.trim().toUpperCase();
    return data.name?.toUpperCase().includes(searchValueNormalized);
  };

  const filteredData = rowsData.filter((data) => {
    return isMatchingFilterStatus(data.status) && isMatchingSearchValue(data);
  });

  useEffect(()=>{
    searchValue !== "" ? getSearch(filteredData.length) : getSearch(0)
  },[searchValue])

  return (
    <>
      {showCandidatesFilter ? (
        <Filter
          isAdverseActionFilterOpen={false}
          isCandidateFilterOpen={openFilter}
          isCandidatesFilter={true}
          handleCandidatesFilterClick={handleOnClickFilter}
          handleFilterStatusChange={handleFilterStatusChange}
          filterStatusLabelData={filterStatus}
          showAll={filterStatus.length === 0}
        />
      ) : (
        <>
          <Filter
            isCandidateFilterOpen={false}
            isCandidatesFilter={false}
            isAdverseActionFilterOpen={openFilter}
            handleAdverseActionFilterClick={handleOnClickFilter}
            handleFilterStatusChange={handleFilterStatusChange}
            filterStatusLabelData={filterStatus}
            showAll={filterStatus.length === 0}
          />
        </>
      )}

      <TableContainer
        className="data-table table-container"
        data-testid="data-table"
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className="table-heading-filter">
              <TableCell
                className="data-table tablecell-header-style"
                align="center"
                colSpan={6}
              >
                <Box className="data-table table-header">
                  <Typography
                    variant="subtitle1"
                    className="data-table typography-theader"
                  >
                    {DATA_TABLE.tableHeader}
                  </Typography>
                  <TextField
                    className="data-table styled-textfield"
                    placeholder={DATA_TABLE.searchPlaceholder}
                    onChange={handleOnChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    data-testid="search-field"
                  />
                  <Paper
                    className="data-table filter-style"
                    onClick={handleOnClickFilter}
                    data-testid="filter-button"
                  >
                    <Icon src={FilterIcon} alt={DATA_TABLE.altFilterIconText} />
                    <Typography
                      variant="body1"
                      className="data-table color-typography"
                    >
                      Filter
                    </Typography>
                  </Paper>
                  <Icon src={DotsButton} alt={DATA_TABLE.altMockIconText} />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow className="data-table table-head">
              {columns?.map((column) => (
                <TableCell
                  className="data-table table-columns"
                  colSpan={0}
                  key={column.id}
                  align={column.align ? column.align : "left"}
                >
                  <Typography
                    variant="caption2"
                    className={
                      column.align
                        ? "addPadding data-table color-typograph"
                        : "data-table color-typograph"
                    }
                  >
                    {column.name}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row: any) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={()=>navigate(`/candidates/${row.id}`)}>
                {columns?.map((column) => (
                  <TableCell
                    align={column.align ? column.align : "left"}
                    className={
                      column.align === "right"
                        ? "addPadding data-table table-data-cells"
                        : "data-table table-data-cells"
                    }
                    key={column.id}
                    style={{
                      width: column.width ? column.width : "auto",
                    }}
                  >
                    {column.render
                      ? column.render(row[column.key])
                      : row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
