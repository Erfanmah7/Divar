import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPostList } from "../../services/user";
import styles from "./postList.module.css";
import Loader from "../module/Loader";
import { sp } from "../../utils/numbers";

function PostList() {
  const { data, isLoading } = useQuery(["my-post-list"], getPostList);
//   console.log(data);

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>آگهی های من</h3>
          {data.data.posts.map((post) => (
            <div key={post._id} className={styles.post}>
              <img src={`${import.meta.env.VITE_BASE_URI}${post.images[0]}`} />
              <div>
                <p>{post.options?.title}</p>
                <span>{post.options?.content}</span>
              </div>
              <div className={styles.price}>
                <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                <span>{sp(post.amount)} تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
