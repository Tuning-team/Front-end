import { getByTestId } from "@testing-library/react";
import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddCollectionForm from "../components/addCollection/AddCollectionForm";

test("input2개, textarea, button2가 있는지 확인  ", () => {
  render(<AddCollectionForm />);
  expect(screen.getByPlaceholderText("컬랙션 제목을 입력하세요")).toBeVisible();
  expect(screen.getByPlaceholderText("컬랙션 설명을 넣어주세요")).toBeVisible();
  expect(screen.getByRole("button", { name: "추가하기" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "취소하기" })).toBeInTheDocument();
});

test("모든 인풋이 필수인지 확인", () => {
  render(<AddCollectionForm />);
  expect(
    screen.getByPlaceholderText("컬랙션 제목을 입력하세요")
  ).toBeRequired();
  expect(
    screen.getByPlaceholderText("컬랙션 설명을 넣어주세요")
  ).toBeRequired();
});

test("인풋이 공백일때 버튼은 disabled true, 모두 채워지면 disabled false", () => {
  const { getByTestId } = render(<AddCollectionForm />);
  expect(screen.getByRole("button", { name: "추가하기" })).toBeDisabled();

  userEvent.change(getByTestId("title-input"), {
    target: { value: "컬렉션제목" },
  });
  expect(getByTestId("title-input").value).toBe("컬렉션 제목");
});
