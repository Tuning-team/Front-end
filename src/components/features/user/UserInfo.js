import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import SlideUpModal from "../../common/SlideUpModal";
import icon_back from "../../../shared/svg/icon_back_enabled.svg";
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
import icon_star from "../../../shared/svg/icon_star.svg";
import SetUserInterestForm from "../myCollection/SetUserInterestForm";

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

  //! 유저가 선택한 카테고리
  const userCategory = useSelector(
    (state) => state.userSlice.userInterest.userCategory
  );
  //! 카테고리배열
  const categories = useSelector((state) => state.categorySlice.category.data);

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

  return (
    <Wrap>
      {modal && (
        <SlideUpModal setModal={setModal}>
          <ButtonWrap>
            <ModalBtn onClick={interestedHandler}>
              <ModalIcon src={icon_star} alt="icon_setting" />
              나의 관심사설정
            </ModalBtn>
            <Line />
            <ModalBtn onClick={logoutHandler}>
              <ModalIcon src={icon_setting} alt="icon_setting" />
              계정관리
            </ModalBtn>
          </ButtonWrap>
        </SlideUpModal>
      )}
      {loginModal && (
        <Modal setModal={setLoginModal} modal={loginModal}>
          <ProfileLayout>
            <Profile>
              <ProfileImg src={info.profilePicUrl} alt="priofile_img" />
              <UserName>{info.displayName}</UserName>

              <LoginInfo>구글계정으로 로그인됨</LoginInfo>
            </Profile>
            <Logout
              onClick={() => {
                removeCookie("token");
                localStorage.removeItem("userInfo");
                if (getCookie("token") === undefined) {
                  alert("로그아웃 되었습니다");
                  nav("/");
                } else {
                  alert("로그아웃 되었습니다");
                  nav("/");
                  removeCookie("token");
                  localStorage.removeItem("userInfo");
                }
              }}
            >
              로그아웃
            </Logout>
          </ProfileLayout>
        </Modal>
      )}
      {/* //!여기부터 */}
      {interestedModal && (
        <SetUserInterestForm
          setModal={setInterestedModal}
          modal={interestedModal}
          categories={categories}
        />
      )}
      {/* //!모달끝 */}
      <Header>
        <HeaderIcon
          src={icon_back}
          alt="icon_backspace_black"
          onClick={() => nav(-1)}
        />
        <Profile>
          <ProfileImg src={info.profilePicUrl} alt="priofile_img" />
          <UserName>{info.displayName}</UserName>
        </Profile>
        <SettingIcon
          src={icon_setting}
          alt="icon_setting"
          onClick={() => setModal(!modal)}
        />
      </Header>
      <Info>
        <InfoWrap>
          <InfoNum>{likes}</InfoNum>
          <InfoText>likes</InfoText>
        </InfoWrap>
        <InfoWrap>
          <InfoNum>{comments}</InfoNum>
          <InfoText>comments</InfoText>
        </InfoWrap>
        <InfoWrap>
          {saves && <InfoNum>{saves.length}</InfoNum>}
          <InfoText>saves</InfoText>
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
  padding: 0.25rem 0.75rem 0 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 9rem;
`;
const HeaderIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;
const SettingIcon = styled(HeaderIcon)`
  padding: 0.3rem;
`;
const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileImg = styled.img`
  border-radius: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin: 0.5rem 0;
`;
const UserName = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 auto;
`;
const LoginInfo = styled.span`
  font-size: 0.813rem;
  color: var(--color-disabled);
`;
const Logout = styled.div`
  font-size: 0.813rem;
  color: var(--color-primary);
  cursor: pointer;
`;
const Info = styled.section`
  display: flex;
  justify-content: space-around;
  height: 4rem;
  align-items: center;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoNum = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  height: 1.7rem;
  margin: 0 auto;
`;
const InfoText = styled.div`
  font-size: 0.875rem;
  color: #505050;
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;
const ModalBtn = styled.div`
  align-items: center;
  display: flex;
  height: 2.313rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.7px;
  text-align: left;
`;
const ModalIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 3px;
`;
const Line = styled.hr`
  width: 19.688rem;
  border: 0.5px solid #eee;
  margin: 0 auto;
`;
