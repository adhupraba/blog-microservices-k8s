import { useEffect, useState } from "react";
import axios from "axios";
import CreateComment from "../comment/CreateComment";
import CommentList from "../comment/CommentList";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:7003/posts");
    setPostList(Object.values(data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="mb-3">Posts</h1>
      <div className="row row-cols-auto">
        {postList.map((post, idx) => (
          <div key={idx} className="col mb-3" style={{ width: "30%" }}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{post.title}</h4>
                <CommentList comments={post.comments} />
                <CreateComment postId={post.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
