import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CancelButton from "./CancelButton";
import SubmitButton from "./AssignServicesButton";

const StyledTableCell = withStyles((theme) => ({
  body: {
    color: "red",
  },
}))(TableCell);

export default function SimpleTable() {
  return (
    <TableContainer component={Paper}>
      <Table id="button.table" aria-label="simple table">
        <TableBody>
          <TableRow>
            <StyledTableCell align="center">
              <CancelButton />
            </StyledTableCell>
            <StyledTableCell align="center">
              <SubmitButton />
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
