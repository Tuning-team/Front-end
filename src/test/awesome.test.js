import { render, screen } from "@testing-library/react";
import Awesome from "./awesomecounter";
test("테스트", () => {
  render(<Awesome></Awesome>);
  const text = screen.getByText("awesome");
  expect(text).toBeInTheDocument();
});
