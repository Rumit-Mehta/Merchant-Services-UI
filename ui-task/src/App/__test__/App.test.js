import React from "react";
import ReactDOM from "react-dom";
import App from "../App.js";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
afterEach(cleanup);

test("renders  without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
