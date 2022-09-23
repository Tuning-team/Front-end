import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import SlideupModal from "./SlideupModal";
import icon_backspace_black from "../../../shared/svg/icon_backspace_black.svg";
import { useNavigate } from "react-router-dom";
import icon_setting from "../../../shared/svg/icon_setting.svg";
import { useEffect, useState } from "react";
import Modal from "../../common/Modal";
import { getCookie, removeCookie } from "../../../shared/cookie";
import {
  getMyCategory,
  getUserInterest,
  postUserInterest,
} from "../../../redux/modules/userSlice";
import { getCategory } from "../../../redux/modules/collectionSlice";

const UserInfo = () => {
  const dispatch = useDispatch();
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [interestedModal, setInterestedModal] = useState(false);

  const saves = useSelector(
    (state) => state.userSlice.userInterested.data.kept_collections
  );
  const likes = useSelector((state) => state.userSlice.userNum.likes);
  const comments = useSelector((state) => state.userSlice.userNum.comments);
  const userCategory = useSelector(
    (state) => state.userSlice.userInterest.userCategory
  );
  const logoutHandler = () => {
    setModal(false);
    setLoginModal(true);
  };
  const interestedHandler = () => {
    setModal(false);
    setInterestedModal(true);
  };
  useEffect(() => {
    dispatch(getUserInterest());
    dispatch(getCategory());
  }, []);

  //!관심사
  // 유저가 담은 관심사
  const categoriesArr = useSelector(
    (state) => state.categorySlice.category.data
  );
  const categories = useSelector((state) => state.categorySlice.category.data);
  const [interests, setInterests] = useState([]);
  const onChecked = (e) => {
    if (e.target.checked) {
      setInterests([...interests, e.target.value]);
    } else if (!e.target.checked) {
      setInterests(interests.filter((elem) => elem !== e.target.value));
    }
  };
  const onSubmit = () => {
    if (interests.length === 4) {
      dispatch(postUserInterest(interests.join(",")));
    } else {
      alert("관심사 4개를 선택해주세요");
    }
  };

  return (
    <Wrap>
      <Header>
        {modal && (
          <SlideupModal setModal={setModal}>
            <div onClick={interestedHandler}>나의 관심사설정</div>
            <div onClick={logoutHandler}>
              {" "}
              <img src={icon_setting} alt="icon_setting" />
              계정관리
            </div>
          </SlideupModal>
        )}
        {loginModal && (
          <Modal setModal={setLoginModal} modal={loginModal}>
            <Profile>
              <ProfileImg src={info.profilePicUrl} alt="priofile_img" />
              <UserName>{info.displayName}</UserName>
            </Profile>
            <div>구글 로그인됨</div>
            <div
              onClick={() => {
                removeCookie("token");
                localStorage.removeItem("userInfo");
                if (getCookie("token") === undefined) {
                  alert("로그아웃 되었습니다");
                  nav("/");
                } else window.reload();
              }}
            >
              로그아웃
            </div>
          </Modal>
        )}
        {/* //!여기부터 */}
        {interestedModal && (
          <Modal setModal={setInterestedModal} modal={interestedModal}>
            <ModalContents>
              <h1>관심사 수정하기</h1>
              <div>
                나의 관심사
                {userCategory.map((x, idx) => (
                  <div key={idx}>{x}</div>
                ))}
              </div>
              <p>선택된 관심사 {interests.length}개</p>
              <div>
                {categories?.map((elem) => {
                  return (
                    <label key={elem._id}>
                      <input
                        type="checkbox"
                        onChange={onChecked}
                        value={elem._id}
                      />
                      {elem.categoryName}
                    </label>
                  );
                })}
              </div>
              <button onClick={onSubmit}>확인</button>
            </ModalContents>
          </Modal>
        )}
        <img
          src={icon_backspace_black}
          alt="icon_backspace_black"
          onClick={() => nav(-1)}
        />
        <Profile>
          <ProfileImg src={info.profilePicUrl} alt="priofile_img" />
          <UserName>{info.displayName}</UserName>
        </Profile>
        <img
          src={icon_setting}
          alt="icon_setting"
          onClick={() => setModal(!modal)}
        />
      </Header>
      <Info>
        <InfoWrap>
          <div>{likes}</div>
          <div>likes</div>
        </InfoWrap>
        <InfoWrap>
          <div>{comments}</div>
          <div>comments</div>
        </InfoWrap>
        <InfoWrap>
          {saves && <div>{saves.length}</div>}
          <div>saves</div>
        </InfoWrap>
      </Info>
    </Wrap>
  );
};
export default UserInfo;
const Wrap = styled.div`
  width: 360px;
`;
const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Profile = styled.div``;
const ProfileImg = styled.img`
  border-radius: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const UserName = styled.p``;
const Info = styled.section`
  display: flex;
  justify-content: space-around;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-height: 50vh;
  & h1 {
    margin-top: 0;
  }
  & label {
    margin: 0.5rem 0;
    display: block;
  }
  & > div {
    overflow-y: scroll;
    width: 100%;
    text-align: left;
  }
`;
