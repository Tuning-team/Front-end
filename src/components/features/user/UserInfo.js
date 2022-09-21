import styled from "styled-components";
import { useSelector } from "react-redux";
import SlideupModal from "./SlideupModal";
import icon_backspace_black from "../../../shared/svg/icon_backspace_black.svg";
import { useNavigate } from "react-router-dom";
import icon_setting from "../../../shared/svg/icon_setting.svg";
import { useState } from "react";
import Modal from "../../common/Modal";
import { getCookie, removeCookie } from "../../../shared/cookie";

const UserInfo = () => {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const saves = useSelector(
    (state) => state.userSlice.userInterested.data.kept_collections
  );
  const likes = useSelector(
    (state) => state.myCollectionSlice.myCollection.likes
  );
  const comments = useSelector(
    (state) => state.myCollectionSlice.myCollection.comments
  );

  const logoutHandler = () => {
    setModal(false);
    setLoginModal(true);
  };

  return (
    <Wrap>
      <Header>
        {modal && (
          <SlideupModal setModal={setModal}>
            <div>나의 관심사설정</div>
            <div onClick={logoutHandler}>
              {" "}
              <img src={icon_setting} alt="icon_setting" />
              계정관리
            </div>
          </SlideupModal>
        )}
        {loginModal && (
          <Modal setModal={setLoginModal} modal={loginModal}>
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
              {" "}
              로그아웃
            </div>
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
