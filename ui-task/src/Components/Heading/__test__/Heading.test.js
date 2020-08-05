import React from "react";
import ReactDOM from "react-dom";
import Heading from "../Heading";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

test("renders  without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Heading></Heading>, div);
});

test("renderes Heading correctly", () => {
  const { getByTestId } = render(<Heading />);
  expect(getByTestId("headingId")).toHaveTextContent("Assign services");
});

test("renderes subheading correctly", () => {
  const { getByTestId } = render(<Heading />);
  expect(getByTestId("subheadingId")).toHaveTextContent("Set up client");
});

test("matches snapshot", () => {
  const tree = renderer.create(<Heading />).toJSON();
  expect(tree).toMatchSnapshot();
});
