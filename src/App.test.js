import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  render(<App />);
  const text = screen.getByText("Hello DevOps");
  expect(text).toBeInTheDocument();
});

test("renders subheading", () => {
  render(<App />);
  const subText = screen.getByText("Welcome to Jenkins CI/CD!");
  expect(subText).toBeInTheDocument();
});
