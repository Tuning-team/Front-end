import { render, screen } from "@testing-library/react";

// ? 시도1. collectionWrap을 가져와서 그 안의 컴포넌트들(collectionInformation, collectionVideoList)을 같이 읽는지 확인
import CollectionWrap from "../components/collection/CollectionWrap";

// ! role확인(https://www.w3.org/TR/wai-aria/#role_definitions)
// ! matcher메소드확인(https://github.com/testing-library/jest-dom)
// 타겟 우선순위(By Role->LabelText->PlaceholderText->Text->DisplayValue->AltText->Title->TestId)
// ? (기본)화면상에 기본 엘리먼트들이 렌더링 되는가
test("render collectionWrap component", () => {
  render(<CollectionWrap />);
  // <h1>확인
  const title = screen.getByRole("heading", { name: /보물단지/i }); // ! 다른 컴포넌트에 h엘리먼트가 있어서 오류가 남->name속성을 줘서 해결
  expect(title).toBeInTheDocument(); //element가 document에 나타나는지 아닌지

  // <p>확인 어쩔수없이 testid사용..
  const collectionDesc = screen.getByTestId("collection-description");
  expect(collectionDesc).toBeInTheDocument();

  const span1 = screen.getByTestId("countLikes");
  const span2 = screen.getByTestId("countComments");
  expect(span1).toBeInTheDocument();
  expect(span2).toBeInTheDocument();

  //  <button>확인
  const deleteButton = screen.getByRole("button", { name: "삭제" });
  const likeButton = screen.getByRole("button", { name: "좋아요" });
  const commentButton = screen.getByRole("button", { name: "댓글" });
  expect(deleteButton.textContent).toBe("삭제");
  expect(likeButton.textContent).toBe("좋아요");
  expect(commentButton.textContent).toBe("댓글");
});
