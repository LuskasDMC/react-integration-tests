import { render, fireEvent, screen } from "@testing-library/react";

import App from "./App";
import { phoneMask } from "./utils/masks";

describe("Test App behaviour", () => {
  it("Submit form", () => {
    render(<App />);

    const form = screen.getByTestId("form");
    const inputPhoneNumber = screen.getByTestId("input-phone-number");
    const inputPassword = screen.getByTestId("input-password");
    const button = screen.getByTestId("button");

    fireEvent.change(inputPhoneNumber, {
      target: { value: phoneMask("99999999999") },
    });

    fireEvent.change(inputPassword, { target: { value: "111111" } });

    form.onsubmit = () => {
      expect(inputPassword.value).toBe("111111");
      expect(inputPhoneNumber.value).toBe("(99) 99999-9999");
    };

    fireEvent.click(button);
  });
});
