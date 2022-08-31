import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Prac } from "./prac";

test("체크박스에 체크가 되어있는지 확인하기", () => {
  render(<Prac />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  userEvent.click(checkbox);
  expect(checkbox).toBeDisabled();
  userEvent.click(checkbox);
  expect(button).not.toBeEnabled();
});
