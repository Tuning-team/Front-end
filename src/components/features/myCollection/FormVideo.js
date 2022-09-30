import React from "react";
import styled from "styled-components";
import icon_add from "../../../shared/svg/plus.svg";
import { deleteVideo } from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import icon_trash from "../../../shared/svg/24_ena_delete.svg";

const FormVideo = ({ addVideoHandler, addVideoList }) => {
  const dispatch = useDispatch();
  return (
    <Wrap>
      <Label>영상추가</Label>
      <AddVideoBox>
        <StVideo>
          {addVideoList?.map((x, idx) => {
            return (
              <VideoBox key={idx}>
                <VideoList>{x.title}</VideoList>
                <DeleteBtn onClick={() => dispatch(deleteVideo(x.id))}>
                  <Img src={icon_trash} />
                </DeleteBtn>
              </VideoBox>
            );
          })}
          <Icon src={icon_add} onClick={addVideoHandler} />
        </StVideo>
      </AddVideoBox>
    </Wrap>
  );
};
export default FormVideo;
const Wrap = styled.div`
width:100%;
  display: flex;
  flex-direction: column;
  align-items
  height: 6rem;
  margin:0 0 1.25rem 0
`;

const AddVideoBox = styled.div`
  border-style: solid;
  width: 100%;
  height: 40px;
`;
const StVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  padding: 1rem;
  height: {hasVideo ? 0 : "8.75rem"};
  border-radius: 8px;
  border: ${(props) => (props.hasVideo ? "solid 1px #eee" : "unset")};
  flex-direction: column;
`;
const Icon = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  margin: 1.5rem 0 1.5rem 0;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  height: 2rem;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.9px;
  text-align: left;
`;
const VideoBox = styled.div`
  display: flex;
  width: 100%;
  height: 2.844rem;
  border-radius: 8px;
  border: solid 1px #eee;
  justify-content: center;
  align-items: center;
  // margin-bottom: 0.5rem;
`;
const DeleteBtn = styled.button`
  margin: 0 0px 0 2rem;
  border-radius: 8px;
  padding: 3px;
`;
const VideoList = styled.div`
  font-size: 0.8rem;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: left;
  color: #adadad;
  width: 17rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 10;
`;
const Img = styled.img`
  width: 23px;
`;
