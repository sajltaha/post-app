import { useState } from "react";
import { usePosts } from "../../store/usePosts";

export default function Post({ postText, creator, publishTime, postID }) {
  const [editedText, setEditedText] = useState(postText);
  const [editBool, setEditBool] = useState(false);
  const { editPost, deletePost } = usePosts();

  const editText = (e) => {
    setEditedText(e.target.value);
  };

  const changeEditBool = () => {
    if (editBool == true) {
      editPost(postID, editedText);
    }
    setEditBool(!editBool);
  };

  const deletePostHandle = () => {
    deletePost(postID)
  }

  return (
    <div>
      <p>{creator}</p>
      <p>{publishTime}</p>
      <input readOnly={!editBool} onChange={editText} value={editedText} />
      <button disabled={!editedText} onClick={changeEditBool}>
        {editBool ? "Save" : "Edit"}
      </button>
      <button onClick={deletePostHandle}>Delete</button>
    </div>
  );
}