import "./App.css";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const contentRef = useRef();

  const handleInsert = () => {
    // e.preventDefault();
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("욕설을 입력하세요!!!");
      contentRef.current.focus();
      return false;
    } else {
      alert("욕해주셔서 감사합니다!!");
    }

    axios
      .post("http://localhost:8008/insert", {
        content: contentRef.current.value,
      })
      .then((res) => {
        console.log("✅ SUCCESS");
        contentRef.current.value = "";
      })
      .catch((e) => {
        console.error(e);
      });
    console.log(contentRef.current.value);
  };

  return (
    <div>
      <div class="text-bg">욕 감사합니다</div>
      <div class="focuson">
        <div className="viewbox"></div>
        <div className="inputbox">
          <input
            ref={contentRef}
            className="input_area"
            placeholder="욕설문장을 입력해주세요"
          ></input>
          <button className="sub_btn" onClick={handleInsert}>
            확인
          </button>
        </div>
      </div>
      <div class="cont">
        참여 감사합니다 <br /> 당신의 욕설 소중하게 사용할게요
      </div>
    </div>
  );
};

export default App;
