import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Awesome from "./awesomecounter";

test("7일때 ", () => {
  render(<Awesome initialvalue={7}></Awesome>);
  const count = screen.queryByText(7);
  expect(count).toBeVisible();
});

test("0일때 ", () => {
  render(<Awesome></Awesome>);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

test("클릭시", () => {
  render(<Awesome initialvalue={1}></Awesome>);
  const addButton = screen.getByText("add");
  userEvent.click(addButton);
  const count = screen.queryByText(2);
  expect(count).toBeVisible();
});

test("두번클릭시", () => {
  render(<Awesome initialvalue={1}></Awesome>);
  const addButton = screen.getByText("add");
  userEvent.click(addButton);
  userEvent.click(addButton);
  const count = screen.queryByText(3);
  expect(count).toBeVisible();
});

test("한번클릭시 숫자감소", () => {
  render(<Awesome initialvalue={5}></Awesome>);
  const removeButton = screen.getByText("remove");
  userEvent.click(removeButton);
  const count = screen.queryByText(4);
  expect(count).toBeVisible();
});

test("클릭시 리무브", () => {
  render(<Awesome initialvalue={2}></Awesome>);
  const removeButton = screen.getByText("remove");
  userEvent.click(removeButton);
  userEvent.click(removeButton);
  userEvent.click(removeButton);
  userEvent.click(removeButton);

  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});
