import { create } from "zustand";

export const usePosts = create((set) => ({
  posts: [],
  push: (post) => set((state) => ({ posts: [...state.posts, post] })),
  deletePost: (postId) =>
    set((state) => ({
      posts: [...state.posts.filter((post) => post.postID !== postId)],
    })),
  editPost: (postId, newText) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.postID == postId) {
          post.postText = newText;
        }
        return post;
      }),
    })),
}));
