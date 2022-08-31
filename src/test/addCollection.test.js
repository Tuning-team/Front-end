import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("input2개, textarea, button이 있는지 확인  ", () => {
  render(<Awesome initialvalue={7}></Awesome>);
  const count = screen.queryByText(7);
  expect(count).toBeVisible();
});
