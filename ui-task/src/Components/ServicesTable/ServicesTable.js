import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import ServicesData from "../../Data/ServicesData.json";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Functions from "./Functions";

// Overiding 'TableCell' style by making the font bold and changing the colour.
const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  body: {
    color: theme.palette.secondary.main,
  },
}))(TableCell);

// Function which creates the table headers. 3 columns: checkbox, Service, Description
function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox" className="column">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </StyledTableCell>
        <StyledTableCell align={"left"} padding={"default"} className="column">
          Service
        </StyledTableCell>
        <StyledTableCell align={"left"} padding={"default"} className="column">
          Description
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

// Default function which generates the body of the table as well handle to checkboxes
export default function EnhancedTable() {
  const {
    dense,
    emptyRows,
    handleClick,
    handleSelectAllClick,
    isSelected,
    selected,
  } = Functions();
  // This is the main body of the table, and goes through the json file to add each service onto the table
  return (
    <div>
      <Paper elevation={0} square={false}>
        <TableContainer>
          <Table
            className="ServiceTable"
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={ServicesData.length}
            />
            <TableBody>
              {ServicesData.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    key={row.id}
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    selected={isItemSelected}
                  >
                    <StyledTableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </StyledTableCell>
                    <StyledTableCell id={labelId} padding="default">
                      {row.name}
                    </StyledTableCell>
                    <TableCell align="left">{row.description}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
export { StyledTableCell };
