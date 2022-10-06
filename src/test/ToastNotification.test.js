import { render, screen } from "@testing-library/react";
import ToastNotification from "../components/common/ToastNotification";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test("토스트alert초기상태", () => {
  //arrange
  render(<ToastNotification />);
  const content = screen.getByTestId("content");
  //assert
  expect(content).not.toBeNull();
});

test("토스트alert텍스트props로 넘어왔을때", async () => {
  const children = "안녕!";
  //arrange
  render(<ToastNotification>{children}</ToastNotification>);
  //assert

  await wait(() => screen.findByTestId(children), { timeout: 2000 });
  expect(screen.queryByTestId(children)).toBeNull();
});
