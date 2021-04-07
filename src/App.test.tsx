import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import App from "./App";
import { phoneMask } from "./utils/masks";

describe("Test App behaviour", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("Verify input values on submit form", () => {
    const form = screen.getByTestId("form");
    const inputPhoneNumber = screen.getByTestId(
      "input-phone-number"
    ) as HTMLInputElement;
    const inputPassword = screen.getByTestId(
      "input-password"
    ) as HTMLInputElement;
    const button = screen.getByTestId("button");

    fireEvent.change(inputPhoneNumber, {
      target: { value: phoneMask("99999999999") },
    });
    fireEvent.change(inputPassword, { target: { value: "111111" } });

    form.onsubmit = (e) => {
      e.preventDefault();
      expect(inputPassword.value).toBe("111111");
      expect(inputPhoneNumber.value).toBe("(99) 99999-9999");
    };

    fireEvent.click(button);
  });

  it("Verify failed authentication", async () => {
    const inputPhoneNumber = screen.getByTestId("input-phone-number");
    const inputPassword = screen.getByTestId("input-password");
    const button = screen.getByTestId("button");

    fireEvent.change(inputPhoneNumber, {
      target: { value: phoneMask("99999999999") },
    });
    fireEvent.change(inputPassword, { target: { value: "111111" } });
    fireEvent.click(button);

    await waitFor(() => screen.findByTestId("form-error"), {
      timeout: 3000,
    });
  });
});
