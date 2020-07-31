import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import ServicesData from "../Data/ServicesData.json";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

let newSelected = [];
let maxServices = 0;

ServicesData.map((element) => {
  maxServices++;
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  body: {
    color: theme.palette.secondary.main,
  },
}))(TableCell);

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </StyledTableCell>
        <StyledTableCell align={"left"} padding={"default"}>
          Service
        </StyledTableCell>
        <StyledTableCell align={"left"} padding={"default"}>
          Description
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [selected, setSelected] = React.useState([]);
  const [page] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = ServicesData.map((service) => service.name);
      newSelected.length = maxServices;
      console.log("im here");
      setSelected(newSelecteds);
      return;
    } else {
      newSelected.length = 0;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    newSelected = [];
    const selectedIndex = selected.indexOf(name);
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    console.log(newSelected);
    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, ServicesData.length - page * rowsPerPage);

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
export { newSelected };
