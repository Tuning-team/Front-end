import {
  render,
  screen,
  renderHook,
  getByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import useInputs from "../hooks/useInput";

test("유즈인풋이 잘 돌아가는지 확인하기", () => {
  const { result } = renderHook(() =>
    useInputs({
      title: "",
      description: "",
    })
  );
  //     act(() => {
  //     result
  // })
  expect(result.current.count).toBe;
});
