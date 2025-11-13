import { useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

function IndividualPostPage() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);

  return (
    <div className="post-page">
      <h2>Blog Post #{id}</h2>
      <p>
        This Shows the content of the blog comment section. 
      </p>
      <button onClick={handleLike}>👍 Like ({likes})</button>

      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((c, index) => (
          <p key={index}>
            <strong>{c.name}:</strong> {c.text}
          </p>
        ))
      )}

      <CommentForm comments={comments} setComments={setComments} />
    </div>
  );
}

export default IndividualPostPage;
