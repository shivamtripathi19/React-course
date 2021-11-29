import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("render fetch list", async () => {
    window.fetch = jest.fn(); // mock functions return objects
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Hits" }],
    });

    render(<Async />);
    
    const result = await screen.findAllByRole("listitem");
    expect(result).not.toHaveLength(0);
  });
});
