import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm/LoginForm";
import Error from "./Error.js";

describe("Error Unit Test", () => {
  const wrapper = render(<LoginForm></LoginForm>);
  wrapper.debug();

  it("confirm Error Component truthy", () => {
    const errComp = render(<Error />);

    expect(errComp).toBeTruthy;
  });
  it("normally should NOT render error component", () => {
    expect(wrapper.queryByRole("Error")).not.toBeInTheDocument();
  });

  it("Error Comp should have container class", () => {
    // const errProps = {
    //   onClick: jest.fn(),
    // };
    const errComp = render(<Error />).container.firstChild;
    expect(errComp).toHaveClass("error-message__container");
  });
  it("Error Comp should have default error Icon ", () => {
    const errIcon = render(<Error />).getByTestId("errIcon");
    expect(errIcon).toBeInTheDocument();
  });
  it("should show relavent error message with 'errmes' prop", () => {
    const errText = render(<Error errmes="error" />).getByText("error");
    expect(errText).toBeInTheDocument();
  });
});
