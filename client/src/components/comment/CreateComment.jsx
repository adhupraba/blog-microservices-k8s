import { useState } from "react";
import axios from "axios";

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, { content });
    setContent("");
  };

  return (
    <div className="mt-3">
      <form onSubmit={submitForm}>
        <div className="form-group mb-3">
          <label className="form-label">Add Comment</label>
          <input type="text" className="form-control" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
