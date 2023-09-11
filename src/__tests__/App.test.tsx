import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("renders title", () => {
  const app = render(<App />);
  const title = app.getByTestId("title");
  expect(title.textContent).toBe("Codify");
});
