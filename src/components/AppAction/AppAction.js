import { useEffect, useState } from "react";
import { usePosts } from "../../store/usePosts";
import Container from "../Container/Container";
import Post from "../Post/Post";
import style from "./AppAction.module.css";

export default function AppAction() {
  const [userName, setUserName] = useState("");
  const [postText, setPostText] = useState("");

  const { push, posts } = usePosts();

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const userNameHandleChange = (e) => {
    setUserName(e.target.value);
  };

  const postTextHandleChange = (e) => {
    setPostText(e.target.value);
  };

  const createPost = () => {
    push({
      postID: Math.random(),
      creator: userName,
      publishTime: new Date().toDateString(),
      postText: postText,
    });
    setUserName("");
    setPostText("");
  };

  return (
    <>
      <Container>
        <input
          value={userName}
          onChange={userNameHandleChange}
          placeholder="Your name"
        />
        <input
          value={postText}
          onChange={postTextHandleChange}
          placeholder="Share your thoughts"
        />
        <button disabled={!userName || !postText} onClick={createPost}>
          Add
        </button>
      </Container>
      {posts.map((post) => {
        return (
          <Post
            key={post.postID}
            postText={post.postText}
            creator={post.creator}
            publishTime={post.publishTime}
            postID={post.postID}
          />
        );
      })}
    </>
  );
}
