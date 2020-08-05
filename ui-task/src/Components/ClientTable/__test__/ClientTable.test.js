import React from "react";
import ReactDOM from "react-dom";
import ClientTable from "../ClientTable";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { TableRow } from "@material-ui/core";
import ClientData from "../../../Data/ClientData.json";
import { StyledTableCell } from "../ClientTable";

afterEach(cleanup);
test("renders  without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ClientTable />, div);
});

test("table has correct rows and columns", () => {
  const wrapper = shallow(<ClientTable />);
  const rows = wrapper.find(TableRow);
  expect(rows).toHaveLength(2);

  const dataEntries = wrapper.find(StyledTableCell);
  const columns = 2;
  expect(dataEntries.length / rows.length).toEqual(columns);
});

test("matches snapshot", () => {
  const tree = renderer.create(<ClientTable />).toJSON();
  expect(tree).toMatchSnapshot();
});
