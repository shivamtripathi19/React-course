import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hello from "./Hello";
describe("Hello Test Case", () => {
  test("render hello tags", () => {
    // step 1. Arrange
    render(<Hello />);
    // step 2. act
    // step 3. assert
    const helloTagsHandler = screen.getByText("Hello World", { exact: false });
    expect(helloTagsHandler).toBeInTheDocument();
  });
  test("render when button is not clicked", () => {
    render(<Hello />);
    const result = screen.getByText("you can see me.", { exact: false });
    expect(result).toBeInTheDocument();
  });
  test("render when button is clicked", () => {
    render(<Hello />);
    const btn = screen.getByRole("button");
    userEvent.click(btn);

    const result = screen.getByText("well I'm not sure...");
    expect(result).toBeInTheDocument();
  });
});
