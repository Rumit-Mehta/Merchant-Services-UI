import React from "react";
import ReactDOM from "react-dom";
import CancelButton from "../CancelButton";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Tests for Cancel Button", () => {
  test("renders  without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CancelButton></CancelButton>, div);
  });

  const mockClick = jest.fn();
  const mockCancel = jest.fn();
  test("matches snapshot", () => {
    const wrapper = shallow(
      <CancelButton handleClick={mockClick} handleClose={mockCancel} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("matches snapshot", () => {
    const wrapper = shallow(
      <CancelButton open handleClick={mockClick} handleClose={mockCancel} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
