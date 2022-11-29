import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Viewbox from "./viewbox";

const App = () => {
  const contentRef = useRef();
  const numRef = useRef();

  const [hate, setHate] = useState({
    // hate_sentence: "",
  });

  // const onChange = (e) => {
  //   setHate({
  //     ...hate,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // useEffect(() => {
  //   // setTimeout(() => {
  //   axios
  //     .post("http://localhost:8008/import", {})

  //     .then((res) => {
  //       const { data } = res;
  //       if (res.data.Length > 0) {
  //         setHate({
  //           ...hate,
  //           hate_sentence: data.hate_sentence,
  //         });
  //       }
  //       // setHate(res.data);
  //       console.log(data);
  //       setHate(data);
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // }, [hate]);
  // // }, 4000);

  const [inputData, setInputData] = useState("");
  const handleInsert = () => {
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

    // console.log(this.state.hate_sentence);

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
    setInputData(contentRef.current.value);
  };

  return (
    <div>
      <div class="text-bg">욕 감사합니다</div>
      <div class="focuson">
        <Viewbox input={inputData} />
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

export default React.memo(App);
