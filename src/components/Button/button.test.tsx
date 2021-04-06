import { render, screen } from "@testing-library/react";

import Button from "./index";

describe("Testing button behaviour", () => {
  it("Verify if children was rendering", async () => {
    render(<Button>Click me</Button>);
    await screen.findByText("Click me");
  });

  it("Verify if button render loading text when props 'isLoading' is true", async () => {
    render(<Button isLoading>Loading</Button>);
    await screen.findByTestId("loading");
  });
});
