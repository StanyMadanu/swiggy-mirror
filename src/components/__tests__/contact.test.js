import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load a button in contact component", () => {
  render(<Contact />);

  //Querying
  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load input placeholder name in the contact form", () => {
  //rendering component
  render(<Contact />);

  // querying
  const inputPlaceholder = screen.getByPlaceholderText("name");

  //   console.log(inputPlaceholder);

  // Assertion
  expect(inputPlaceholder).toBeInTheDocument();
});

test("should load 2 inputs in the form", () => {
  //render
  render(<Contact />);
  //querying
  const AllInputs = screen.getAllByRole("textbox");

  //assertion
  expect(AllInputs.length).toBe(2);
});
