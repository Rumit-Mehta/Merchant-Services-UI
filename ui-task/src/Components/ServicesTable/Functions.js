import React from "react";
import ServicesData from "../../Data/ServicesData.json";

// Initialize variables
const maxServices = ServicesData.length;
let newSelected = [];

export default () => {
  // This code handles the selection of each checkbox
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

    setSelected(newSelected);
  };

  // function that deals with what happens when the "select all" checkbox is ticked
  // If not already selected: it changes length of selected service to max amount of services and selects all services.
  // If already selected: it changes length of selected service to 0 and un-selects the services
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = ServicesData.map((service) => service.name);
      newSelected.length = maxServices;
      setSelected(newSelecteds);
      return;
    } else {
      newSelected.length = 0;
    }
    setSelected([]);
  };

  const [selected, setSelected] = React.useState([]);
  const [page] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage] = React.useState(5);
  const isSelected = (name) => selected.indexOf(name) !== -1;

  // const to find the amount of empty rows in the table
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, ServicesData.length - page * rowsPerPage);

  return {
    newSelected,
    handleClick,
    emptyRows,
    handleSelectAllClick,
    selected,
    setSelected,
    page,
    dense,
    rowsPerPage,
    isSelected,
  };
};
export { newSelected };
