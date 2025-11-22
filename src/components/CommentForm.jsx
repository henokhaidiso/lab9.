import { useState } from "react";

function CommentForm({ comments, setComments }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setComments([...comments, { name, text }]);
    setName("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={localStorage.getItem("loggedInUser") || "Guest"}
        readOnly
      />
      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
