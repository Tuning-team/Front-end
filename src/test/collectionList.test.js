import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CollectionList from "../common/CollectionList";

describe("<CollectionList />", () => {
  it("컬렉션리스트 ui테스트", () => {
    const { getByText } = render(<CollectionList />);
    getByText("웃긴영상 모음집");
    getByText("좋아요 5");
    getByText("댓글 21"); // button이 있는지 확인
  });
});
test("컬렉션리스트 ui테스트", () => {
  render(<CollectionList />);
  const state = [
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
  const { container } = render(<CollectionList state={state} />);
  expect(container).toHaveTextContent("우울할때 보는영상");
});
