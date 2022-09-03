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
  const title = screen.getByRole("heading");
  expect(title).toBeInTheDocument(); //element가 document에 나타나는지 아닌지

  // <p>확인 어쩔수없이 testid사용..
  const collectionDesc = screen.getByTestId("collection-description");
  expect(collectionDesc).toBeInTheDocument();

  // todo <span>확인 -> 통과못함 다시 해보기
  //   const span1 = screen.getByTestId("countLikes");
  //   const span2 = screen.getByTestId("countComments");
  //   const span = screen.getAllByTestId("count");
  //   expect(span).toBeInTheDocument();

  //  <button>확인
  const deleteButton = screen.getByRole("button", { name: "삭제" });
  const likeButton = screen.getByRole("button", { name: "좋아요" });
  const commentButton = screen.getByRole("button", { name: "댓글" });
  expect(deleteButton.textContent).toBe("삭제");
  expect(likeButton.textContent).toBe("좋아요");
  expect(commentButton.textContent).toBe("댓글");
});

// ? mockData를 잘 읽는가?
const mockData = [
  {
    collectionTitle: "우울할때 보는영상",
    id: 0,
    likes: 3,
    comments: 23,
    thumbnail: [
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
    ],
  },
  {
    collectionTitle: "배고플때 보는영상",
    id: 1,
    likes: 3,
    comments: 23,
    thumbnail: [
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
    ],
  },
  {
    collectionTitle: "웃긴영상 모음집",
    id: 2,
    likes: 5,
    comments: 21,
    thumbnail: [
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
    ],
  },
];
