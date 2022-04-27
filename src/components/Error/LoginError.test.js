import LoginError from "./LoginError.js";
import { screen, render } from "@testing-library/react";

describe("Error component", () => {
  test("renders non-existed email ID", () => {
    render(<LoginError />);
    const wrEmail = screen.getByText("Email ID does not exist.", {
      exact: false,
    });
    expect(wrEmail).toBeInTheDocument();
  });
});
