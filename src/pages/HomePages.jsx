import React from "react";
import Sidebar from "../components/templates/Sidebar";
import Main from "../components/templates/Main";
import { useQuery } from "@tanstack/react-query";
import { getAllPostList } from "../services/user";
import { getCategory } from "../services/admin";
import Loader from "../components/module/Loader";

const style = { display: "flex" };

function HomePages() {
  const { data: category, isLoading: categoryLoading } = useQuery(
    ["category-api"],
    getCategory
  );
  const { data: posts, isLoading: postsLoading } = useQuery(
    ["get-all-post"],
    getAllPostList
  );

  return (
    <>
      {categoryLoading || postsLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar category={category} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePages;
