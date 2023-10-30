import { useState } from "react";
import ReactPaginate from "react-paginate";
import TableContainer from "@mui/material/TableContainer";
import { Box, FormControl, MenuItem, Paper, Select } from "@mui/material";
import LeftArrowIcon from "../../../../public/assets/images/Arrow left.svg";
import RightArrowIcon from "../../../../public/assets/images/Arrow right.svg";
import theme from "../../../theme/theme";
import { PAGINATION } from "../../../constants";
import Icon from "../../atoms/Icon";
import DataTable, { TableColumn } from "../Table";
import { IconComponent } from "./IconComponent";
import "./styles.css";
import Typography from "../../atoms/TypographyAtom";

export const StyledArrowPointer = {
  height: "24px",
  width: "24px",
};

export interface TableData {
  id: number;
  name?: string;
  adjudication?: string;
  status?: string;
  location?: string;
  date?: string;
  pre_notice_date?: string;
  post_notice_date?: string;
}

export interface PropsType {
  tableData: TableData[];
  columns: TableColumn[];
  showCandidatesFilter: boolean;
}

export default function PaginatedItems({
  tableData,
  columns,
  showCandidatesFilter,
}: PropsType) {
  const [isSearch, setIsSearch] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const endOffset = itemOffset + itemsPerPage;

  const onChangeDataPerPage = (e: any) => {
    setItemsPerPage(e.target.value);
  };
  const currentItems = tableData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tableData.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % tableData.length;
    setItemOffset(newOffset);
  };

  const handleIsSearch = (data:number)=>{
    if(data===0){
      setIsSearch("")
    }else{
      setIsSearch(data<10? "0"+data : data+"")
    }
  }

  return (
    <Paper className="styled-layout-container">
      <TableContainer>
        <DataTable
          rowsData={currentItems}
          columns={columns}
          showCandidatesFilter={showCandidatesFilter}
          getSearch = {handleIsSearch}
        />
        {isSearch === ""? <Box className="pagination-style-container">
          <Box className="info-container">
            <Typography
              variant="caption2"
              sx={{ color: theme.palette.textColor.medemp }}
            >
              <Typography
                variant="caption2"
                sx={{ color: theme.palette.textColor.highemp }}
              >
                {`${itemsPerPage} `}
              </Typography>
              {PAGINATION.pagesOutOf} {tableData.length} {PAGINATION.result}
            </Typography>
            <FormControl size="small">
              <Select
                className="select-items"
                value={itemsPerPage}
                onChange={onChangeDataPerPage}
                IconComponent={IconComponent}
                displayEmpty
                inputProps={{ Roboto: "Without label" }}
                data-testid="drop-down"
              >
                {PAGINATION.perPageItems.map((page) => {
                  return (
                    <MenuItem
                      data-testid="item"
                      value={page.value}
                      key={page.id}
                    >
                      <Typography
                        className="menu-items-text"
                        variant="caption2"
                      >
                        {page.page}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <ReactPaginate
            breakLabel={PAGINATION.pageBreakingLable}
            nextLabel={
              <Icon
                src={RightArrowIcon}
                alt={PAGINATION.arrowRightAltText}
                style={StyledArrowPointer}
              />
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <Icon
                src={LeftArrowIcon}
                alt={PAGINATION.arrowLeftAltText}
                style={StyledArrowPointer}
              />
            }
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousClassName="page-num"
            nextClassName="page-num"
            activeLinkClassName="active"
          />
        </Box>: 
          <Box className = "info-container">
            <Typography variant="caption2" color={theme.palette.textColor.highemp}>{isSearch}</Typography>
            <Typography variant="caption2" color={theme.palette.textColor.medemp}>{PAGINATION.numberOfResults}</Typography>
          </Box>
        }
      </TableContainer>
    </Paper> 
  );
}
