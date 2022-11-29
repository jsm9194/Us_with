import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const Viewbox = (props) => {
  const [hate, setHate] = useState({
    hate_sentence: "",
  });

  useEffect(() => {
    // setTimeout(async () => {

    axios
      .post("http://localhost:8008/import", {})
      .then((res) => {
        console.log("Test");
        const { data } = res;
        if (res.data.Length > 0) {
          //   setHate({
          //     ...hate,
          //     hate_sentence: data.hate_sentence,
          //   });
        }
        console.log(data);
        setHate(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [props.input]);

  return (
    <div className="viewbox">
      <div>최근 욕설 근황</div>
      <br />
      <div>{hate[0]?.hate_sentence}</div>
      <div>{hate[1]?.hate_sentence}</div>
      <div>{hate[2]?.hate_sentence}</div>
      <div>{hate[3]?.hate_sentence}</div>
      <div>{hate[4]?.hate_sentence}</div>
      <div>{hate[5]?.hate_sentence}</div>
      <div>{hate[6]?.hate_sentence}</div>
      <div>{hate[7]?.hate_sentence}</div>
      <div>{hate[8]?.hate_sentence}</div>
      <div>{hate[9]?.hate_sentence}</div>
    </div>
  );
};

export default Viewbox;
