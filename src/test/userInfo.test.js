import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserInfo from "../components/features/myCollection/UserInfo";
import { useSelector } from "react-redux";

test("likes,saves,comments, profile 확인", () => {
  render(<UserInfo />);
  expect(screen.getByText("comments")).toBeVisible();
  expect(screen.getByText("likes")).toBeVisible();
  expect(screen.getByText("saves")).toBeVisible();
  expect(screen.getByAltText("profile_img")).toBeVisible();
});

test("user Num 확인", () => {
  jest.mock("react-redux");
  const saves = 3;
  const comments = 5;
  useSelector.mockImplementation((selector) => selector(saves, comments));
  render(<UserInfo />);
  expect(screen.getByText("comments")).toBeVisible();
  expect(getByText("Task-1")).not.toBeNull();
});
test("modal", () => {
  jest.mock("react-redux");
  const saves = 3;
  const comments = 5;
  useSelector.mockImplementation((selector) => selector(saves, comments));
  render(<UserInfo />);
  expect(screen.getByText("comments")).toBeVisible();
  expect(getByText("Task-1")).not.toBeNull();
});

const mockFn = jest.fn();
mockFn.mockReturnValue("3");
console.log(mockFn());
mockFn.mockImplementation((name) => `I am ${name}!`);
console.log(mockFn("Dale"));
