import React from "react";
import ReactDOM from "react-dom";
import ButtonTable from "../ButtonTable";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { TableRow, TableCell } from "@material-ui/core";

afterEach(cleanup);
test("renders  without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ButtonTable />, div);
});

test("table has correct rows and columns", () => {
  const wrapper = shallow(<ButtonTable />);
  const rows = wrapper.find(TableRow);
  const columns = wrapper.find(TableCell);
  expect(rows).toHaveLength(1);
  expect(columns).toHaveLength(2);
});

test("matches snapshot", () => {
  const tree = renderer.create(<ButtonTable />).toJSON();
  expect(tree).toMatchSnapshot();
});
