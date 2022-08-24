import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("http://localhost:7001/posts", { title });
    setTitle("");
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={submitForm}>
        <div className="form-group mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
