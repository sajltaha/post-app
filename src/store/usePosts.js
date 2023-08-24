import { create } from "zustand";

export const usePosts = create((set) => ({
  posts: [],
  push: (post) => set((state) => ({ posts: [...state.posts, post] })),
  deletePost: (postId) => set((state) => ({})),
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
