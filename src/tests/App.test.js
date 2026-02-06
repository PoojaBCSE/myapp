import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders heading", () => {
  render(<App />);
  const text = screen.getByText("Hello DevOps");
  expect(text).toBeInTheDocument();
});
