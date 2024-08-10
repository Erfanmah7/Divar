import React from "react";
import Sidebar from "../components/templates/Sidebar";
import Main from "../components/templates/Main";

const style = { display: "flex" };

function HomePages() {
  return (
    <div style={style}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default HomePages;
