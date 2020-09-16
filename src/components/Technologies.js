import React from "react";
import Icons from "../constants/Icons";
// import styled from "styled-components";

const Technologies = () => {
  return (
    <div>
      {Icons.map((item, index) => {
        return <div key={index}>
            <h3>{item.icon}</h3>
            {/* <p>{item.title}</p> */}
        </div>;
      })}
    </div>
  );
};
export default Technologies;
