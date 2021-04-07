import { render, screen, fireEvent } from "@testing-library/react";
import { phoneMask } from "../../utils/masks";

import Input from "./index";

describe("Testing input behaviour", () => {
  beforeEach(() => {
    render(<Input data-testid="input" />);
  });

  it("Verify value when use phone masks", async () => {
    const input = screen.getByTestId("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: phoneMask("27999999999") } });
    expect(input.value).toBe("(27) 99999-9999");
  });
});
