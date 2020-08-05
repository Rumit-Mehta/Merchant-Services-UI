import React from "react";
import ReactDOM from "react-dom";
import ServicesTable from "../ServicesTable";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { TableRow } from "@material-ui/core";
import ServicesData from "../../../Data/ServicesData.json";
import { StyledTableCell } from "../ServicesTable";

afterEach(cleanup);
test("renders  without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ServicesTable />, div);
});

test("table has correct rows and columns", () => {
  let maxServices = 0;

  ServicesData.map((element) => {
    maxServices++;
  });

  const wrapper = shallow(<ServicesTable />);
  const rows = wrapper.find(TableRow);
  expect(rows).toHaveLength(Number(maxServices));

  const dataEntries = wrapper.find(StyledTableCell);
  const columns = 2;
  expect(dataEntries.length / rows.length).toEqual(columns);
});

test("matches snapshot", () => {
  const tree = renderer.create(<ServicesTable />).toJSON();
  expect(tree).toMatchSnapshot();
});
