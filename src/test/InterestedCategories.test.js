import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InterestedCategories from "../components/features/mainList/InterestedCategories";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { getCookie } from "../shared/util/cookie";
import { categoryList } from "../components/features/mainList/categoryData";

// export const useSelector = jest.fn();
// export const useDispatch = jest.fn();
const isLoggedIn = jest.fn(getCookie("token"));
describe("main/InterestedCategories테스트", () => {
  test("컴포넌트랜더링", async () => {
    const { queryByText } = render(
      <Provider store={configureStore}>
        <MemoryRouter>
          <InterestedCategories />
        </MemoryRouter>
      </Provider>
    );
    const header = screen.queryByText(/관심있는 카테고리/);
    const loggedout = screen.queryByText(/로그인이 필요한 기능/);

    expect(header).not.toBeNull();
    expect(loggedout).not.toBeNull();
    // const goToInterestSetting = queryByText(/설정하러가기/);
  });
});
