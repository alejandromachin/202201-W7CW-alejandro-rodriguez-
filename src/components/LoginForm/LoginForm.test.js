import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvents from "@testing-library/user-event";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 1 input for the username and a button", () => {
      render(<LoginForm />);

      const input = screen.getByRole("textbox", {
        name: /username/i,
      });

      const button = screen.getByRole("button", { text: /log in/i });

      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("when is clicked on the button", () => {
    test("Then it should call an action", () => {
      render(<LoginForm />);

      const button = screen.getByRole("button", { text: /log in/i });

      userEvents.click(button);

      //falta dispatch
    });
  });
});
