import { fireEvent, render, screen } from "@testing-library/react";
import { AddTask } from "../components/AddTask/AddTask";
import "@testing-library/jest-dom";

describe("AddTask", () => {
  test("Should render a form", () => {
    render(<AddTask />);
    const form = screen.getByTestId("add-task-form");
    expect(form).toBeInvalid();
  });

  test("the form should render add button", () => {
    render(<AddTask />);
    const form = screen.getByTestId("add-task-form");
    expect(form).toHaveTextContent("Add");
  });

  test("expect input field in form to be required", () => {
    render(<AddTask />);
    const input = screen.getByTestId("task-form-input");
    expect(input).toBeRequired();
  });

  test("expect value to change", () => {
    render(<AddTask />);
    const input = screen.getByTestId("task-form-input");
    fireEvent.change(input, { target: { value: "Get bread" } });
    expect(input).toHaveValue("Get bread");
  });
});
