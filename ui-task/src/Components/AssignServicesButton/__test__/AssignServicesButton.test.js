import React from "react";
import AssignServicesButton from "../AssignServicesButton";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";

describe("Tests for Assign Service Button", () => {
  const mockClick = jest.fn();
  const mockCancel = jest.fn();

  test("matches snapshot", () => {
    const wrapper = shallow(
      <AssignServicesButton
        open
        handleClick={mockClick}
        handleClose={mockCancel}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("matches snapshot", () => {
    const wrapper = shallow(
      <AssignServicesButton handleClick={mockClick} handleClose={mockCancel} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
