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

export default function buttonTable() {
  return (
    <div className="buttonDiv">
      <Table id="button.table">
        <TableBody>
          <TableRow>
            <TableCell align="left">
              <CancelButton />
            </TableCell>
            <TableCell align="right">
              <SubmitButton />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
