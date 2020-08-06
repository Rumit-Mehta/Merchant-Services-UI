import { useState } from "react";
import Functions from "../Functions";

jest.mock("react", () => {
  return {
    useState: jest.fn(),
  };
});

describe("Functions", () => {
  useState.mockImplementation((inital) => [inital, jest.fn()]);

  const {
    displayServices,
    handleClick,
    handleClose,
    open,
    setOpen,
    snackbarColor,
  } = Functions();

  it("should call displayServices", () => {
    expect(displayServices([])).toBe("No service selected");
  });

  it("should call handleClick", () => {
    expect(snackbarColor()).toBe("error");
  });
});
