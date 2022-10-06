import { render, screen, renderHook, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchWrap from "../components/features/search/SearchWrap";

test("input 테스트", () => {
  render(<SearchWrap />);
  const input = screen.getByPlaceholderText("컬렉션 제목을 입력하세요");
  expect(input.getByPlaceholderText("컬렉션 제목을 입력하세요")).toBeRequired();
  userEvent.change(input, {
    target: {
      value: "키워드",
    },
  });
  //!버튼클릭시 키워드가 보여진다.
  const button = screen.getByRole("button", { name: "" });
  userEvent.click(button);
  expect(getByText("키워드")).toBeVisible();
});
