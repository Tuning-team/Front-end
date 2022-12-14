import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CollectionList from "../common/CollectionList";

// test("테스트", () => {
//   render(<CollectionList />);
//   const { getByText } = render(<CollectionList />);
//   const count = screen.queryByText("내 컬랙션");
//   expect(count).toBeVisible();
// });


describe("<CollectionList />", () => {
  it("컬렉션리스트가 잘불러와지는지 확인", () => {
    const { getByText } = render(<CollectionList />);
    getByText("웃긴영상 모음집");
    getByText("좋아요 5");
    getByText("댓글 21"); // button이 있는지 확인
  });
});
