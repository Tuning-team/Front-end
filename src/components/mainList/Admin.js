import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  keywordSaver,
  postSetWeather,
} from "../../redux/modules/setWeatherSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState("");
  const onChangeHandler = (e) => {
    setWeather(e.target.value);
  };
  console.log(weather);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postSetWeather(weather));
    // dispatch(keywordSaver(weather));
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>오늘의 날씨 선택하기</label>
        <select onChange={onChangeHandler}>
          <option></option>
          <option>비오는</option>
          <option>맑은</option>
          <option>흐린</option>
        </select>
        <button>전송</button>
      </form>
    </>
  );
};

export default Admin;
