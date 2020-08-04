import React from "react";
import ReactDOM from "react-dom";
import AssignServicesButton from "../AssignServicesButton";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);
test("renders  without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AssignServicesButton></AssignServicesButton>, div);
});

test("renderes button correctly", () => {
  const { getByTestId } = render(<AssignServicesButton></AssignServicesButton>);
  expect(getByTestId("assignServiceDiv")).toHaveTextContent("Assign Services");
});

test("matches snapshot", () => {
  const tree = renderer.create(<AssignServicesButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
