import { render, screen, fireEvent } from "@testing-library/react";
import { phoneMask } from "../../utils/masks";

import Input from "./index";

describe("Testing input behaviour", () => {
  it("Verify value when use phone masks", async () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: phoneMask("27999999999") } });
    expect(input.value).toBe("(27) 99999-9999");
  });
});
