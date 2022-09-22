import React from "react";
import styled from "styled-components";
import icon_add from "../../../shared/svg/icon_add.svg";
import { deleteVideo } from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";

const FormVideo = ({ addVideoHandler, addVideoList }) => {
  const dispatch = useDispatch();
  return (
    <Wrap>
      <Label>
        영상추가<Required>*</Required>
      </Label>
      <AddVideoBox>
        <StVideo onClick={addVideoHandler}>
          <Icon src={icon_add} />
        </StVideo>
        {addVideoList?.map((x, idx) => {
          return (
            <div key={idx}>
              <VideoList>
                <Span>- </Span>
                {x.title}
              </VideoList>
              <button onClick={() => dispatch(deleteVideo(x.id))}>X</button>
            </div>
          );
        })}
      </AddVideoBox>
    </Wrap>
  );
};
export default FormVideo;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddVideoBox = styled.div`
  border-style: solid;
  width: 343px;
  height: 40px;
`;
const StVideo = styled.div`
  width: 21.438rem;
  height: 3.125rem;
  border: #b295e9 solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const VideoList = styled.div`
  margin-top: 1.5rem;
  width: 17rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Span = styled.span`
  color: #b295e9;
`;
const Label = styled.label`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 123.8%;
  margin-bottom: 12px;
`;

const Required = styled.p`
  color: #b295e9;
  margin-left: 5px;
`;
