import { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const { data } = await axios.get(`http://localhost:7002/posts/${postId}/comments`);
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <ul className="list-group">
      {comments.map((comment, idx) => (
        <li className="list-group-item" key={idx}>
          {comment.content}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
