import React from "react";
import ReactDOM from "react-dom";
import CancelButton from "../CancelButton";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Tests for Cancel Button", () => {
  test("renders  without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CancelButton></CancelButton>, div);
  });

  test("renderes button correctly", () => {
    const { getByTestId } = render(<CancelButton></CancelButton>);
    expect(getByTestId("cancelButtonDiv")).toHaveTextContent("Cancel");
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<CancelButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
