import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ClientData from "../../Data/ClientData.json";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  body: {
    color: theme.palette.common.black,
  },
}))(TableCell);

export { StyledTableCell };

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper elevation={0}>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {ClientData.map((row) => (
              <TableRow key={row.cleintId}>
                <StyledTableCell component="th" scope="row">
                  <strong>Client Name</strong>
                </StyledTableCell>
                <StyledTableCell align="left">{row.clientName}</StyledTableCell>
              </TableRow>
            ))}
            {ClientData.map((row) => (
              <TableRow key={row.cleintId}>
                <StyledTableCell component="th" scope="row">
                  <strong>Client Id</strong>
                </StyledTableCell>
                <StyledTableCell align="left">{row.clientId}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
