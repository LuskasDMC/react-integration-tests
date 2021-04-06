import React from "react";

import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <main>
        <form data-testid="form">
          <Input placeholder="Phone number" data-testid="input-phone-number" />
          <Input placeholder="Password" data-testid="input-password" />
          <Button type="submit" data-testid="button">
            Send
          </Button>
        </form>
      </main>
    </div>
  );
}

export default App;
