import Error from "./Error.js";
import { screen, render } from "@testing-library/react";

describe("Error component", () => {
  test("renders non-existed email ID", () => {
    render(<Error />);
    const wrEmail = screen.getByText("Email ID does not exist.", {
      exact: false,
    });
    expect(wrEmail).toBeInTheDocument();
  });
});
