import React from "react";
import AddPost from "../components/templates/AddPost";
import PostList from "../components/templates/PostList";

function DashboardPages() {
  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPages;
