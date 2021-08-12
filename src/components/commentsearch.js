import React, { useState } from "react";
import axios from "axios";

function CommentSearch() {
  const URL = "https://jsonplaceholder.typicode.com/comments";
  //axios(URL).then((res) => console.log(res.data)); // log data

  const [postID, setPostID] = useState("");
  const [comments, setComments] = useState("");

  function handleChange(event) {
    setPostID(event.target.value);
  }

  function submitHandler() {
    axios(`${URL}?postId=${postID}`).then((res) => {
      console.log(res.data);
      setComments(res.data);
    });
    // log data
  }

  return (
    <div>
      <input
        type="text"
        label="postid"
        value={postID}
        onChange={handleChange}
      ></input>
      <button onClick={submitHandler}>Submit</button>
      <div>Id:{comments.map((comment) => comment.id)}</div>
      <div>Name:{comments.map((comment) => comment.name)}</div>
      <div>Body:{comments.map((comment) => comment.body)}</div>
      <div>Email:{comments.map((comment) => comment.email)}</div>
    </div>
  );
}
export default CommentSearch;
