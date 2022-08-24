const CommentList = ({ comments }) => {
  return (
    <ul className="list-group">
      {comments.map((comment, idx) => {
        const isApproved = comment.status === "approved";
        const isPending = comment.status === "pending";
        const isRejected = comment.status === "rejected";

        const content = isApproved
          ? comment.content
          : isPending
          ? "This comment is awaiting moderation"
          : isRejected
          ? "This comment has been rejected"
          : "";

        const className = isPending ? "list-group-item-warning" : isRejected ? "list-group-item-danger" : "";

        return (
          <li className={`list-group-item ${className}`} key={idx}>
            {content}
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
