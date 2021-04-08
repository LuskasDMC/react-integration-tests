import React, { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";
import { phoneMask } from "./utils/masks";

interface IForm {
  phone: string;
  password: string;
}

function App(): JSX.Element {
  const [error, setError] = useState(false);
  const [form, setForm] = useState<IForm>({
    password: "",
    phone: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.password !== "123456" || form.phone.length !== 15) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? phoneMask(value) : value,
    }));
  };

  return (
    <div>
      <main>
        <form data-testid="form" onSubmit={handleSubmit}>
          <Input
            placeholder="Phone number"
            name="phone"
            value={form?.phone}
            data-testid="input-phone-number"
            onChange={handleChange}
            maxLength={15}
          />
          <Input
            placeholder="Password"
            name="password"
            data-testid="input-password"
            onChange={handleChange}
            type="password"
          />
          <Button type="submit" data-testid="button">
            Send
          </Button>
        </form>
        {error && <span data-testid="form-error">Invalid Credentials</span>}
      </main>
    </div>
  );
}

export default App;
