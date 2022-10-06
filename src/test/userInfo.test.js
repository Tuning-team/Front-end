import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserInfo from "../components/features/myCollection/UserInfo";
import { useSelector, Provider } from "react-redux";
import configStore from "../redux/configStore";

test("likes,saves,comments, profile 확인", () => {
  render(<UserInfo />);
  expect(screen.getByText("comments")).toBeVisible();
  expect(screen.getByText("likes")).toBeVisible();
  expect(screen.getByText("saves")).toBeVisible();
  expect(screen.getByAltText("profile_img")).toBeVisible();
});

test("userNum 확인", () => {
  jest.mock("react-redux");
  const saves = 3;
  const comments = 5;
  useSelector.mockImplementation((selector) => selector(saves, comments));
  render(
    <Provider store={configStore}>
      <UserInfo />
    </Provider>
  );

  expect(screen.getByText("comments")).toBeVisible();
  expect(screen.getByText("5")).not.toBeNull();
});
test("modal 확인", () => {
  render(
    <Provider store={configStore}>
      <UserInfo />
    </Provider>
  );
  const settingButton = screen.getByAltText("icon_setting");
  userEvent.click(settingButton);
  expect(screen.getByText("계정관리")).toBeVisible();
  expect(screen.getByText("나의 관심사설정")).toBeVisible();
});
