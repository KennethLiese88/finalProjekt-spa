import React, { useEffect, useReducer } from "react";
import styles from "./Comments.module.css";
import CommentCard from "../../components/CommentCard/CommentCard";
import { avatarData } from "../../assets/data/avatarData";

function reducer(state, action) {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "topic":
      return { ...state, topic: action.payload };
    case "comment":
      return { ...state, comment: action.payload };
    case "setComments":
      return { ...state, comments: action.payload };
    case "addComment":
      const newComment = {
        avatar: avatarData[Math.floor(Math.random() * avatarData.length)],
        username: state.username,
        email: state.email,
        topic: state.topic,
        comment: state.comment,
        dateTimePosted: new Date(),
      };
      const updatedComments = [newComment, ...state.comments];
      localStorage.setItem("comments", JSON.stringify(updatedComments));

      return {
        ...state,
        comments: updatedComments,
        username: "",
        email: "",
        topic: "",
        comment: "",
      };
    default:
      return state;
  }
}

const initialState = {
  username: "",
  email: "",
  topic: "",
  comment: "",
  comments: [],
};

export default function Comments() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      const commentsWithDateObjects = JSON.parse(storedComments).map(comment => ({
        ...comment,
        dateTimePosted: new Date(comment.dateTimePosted) // Konvertiere zurück in ein Date-Objekt
      }));
      dispatch({ type: "setComments", payload: commentsWithDateObjects });
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "addComment" });
  }

  return (
    <section className={styles.comment_section}>
      <h2>Comment Section</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="topic">Topic</label>
          <input
            id="topic"
            type="text"
            value={state.topic}
            onChange={(e) =>
              dispatch({ type: "topic", payload: e.target.value })
            }
            required
          />
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={state.comment}
            onChange={(e) =>
              dispatch({ type: "comment", payload: e.target.value })
            }
            maxLength={500}
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={state.username}
            onChange={(e) =>
              dispatch({ type: "username", payload: e.target.value })
            }
            required
          />
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
          />
          <button>Comment</button>
        </fieldset>
      </form>
      {state.comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} />
      ))}
    </section>
  );
}