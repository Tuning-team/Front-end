import React from "react";
import styled from "styled-components";
import icon_add from "../../../shared/svg/icon_add.svg";
import { deleteVideo } from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const FormVideo = ({ addVideoHandler, addVideoList }) => {
  const dispatch = useDispatch();
  const [hasVideo, setVideo] = useState(true);

  return (
    <Wrap>
      <Label>영상추가</Label>
      <AddVideoBox>
        <StVideo hasVideo>
          {addVideoList?.map((x, idx) => {
            return (
              <VideoBox key={idx}>
                <VideoList>{x.title}</VideoList>
                <DeleteBtn onClick={() => dispatch(deleteVideo(x.id))}>
                  X
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
display: flex;
flex-direction: column;
align-items
width: 20.938rem;
height: 10.5rem;
margin:0 0 1.25rem 0
`;

const AddVideoBox = styled.div`
  border-style: solid;
  width: 343px;
  height: 40px;
`;
const StVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.938rem;
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
  width: 20.938rem;
  height: 2.844rem;
  border-radius: 8px;
  border: solid 1px #eee;
  justify-content: center;
  align-items: center;
`;
const DeleteBtn = styled.button`
  all: unset;
`;
const VideoList = styled.div`
  font-size: 0.8rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
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
