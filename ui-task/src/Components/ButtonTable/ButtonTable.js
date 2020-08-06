import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import CancelButton from "../CancelButton/CancelButton";
import SubmitButton from "../AssignServicesButton/AssignServicesButton";

// Default function that returns a table with 1 row and 2 columns, 1 for each of the buttons
// made to be able to easily layout the buttons (AssignServicesButton && CancelButton)
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
