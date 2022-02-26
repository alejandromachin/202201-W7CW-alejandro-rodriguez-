import { screen } from "@testing-library/react";
import renderWithProviders from "../setupTests";
import LoginPage from "./LoginPage";

describe("Given a LoginPage Component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'LOGIN'", () => {
      const expectedText = "LOGIN";

      renderWithProviders(<LoginPage />);
      const text = screen.getByRole("heading", { text: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
