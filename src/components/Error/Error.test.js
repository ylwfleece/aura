import Error from "./Error.js";
import React from "react";
import { render } from "@testing-library/react";

describe("LoginError", () => {
  it("should render default login error", () => {
    const errProps = {
      onClick: jest.fn(),
    };

    const wrapper = render(<Error {...errProps}></Error>);

    expect(wrapper.container.firstChild).toHaveClass(
      "error-message__container"
    );
  });
});