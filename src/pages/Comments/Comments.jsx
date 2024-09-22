import React, { useContext } from "react";
import styles from "./Comments.module.css";
import CommentCard from "../../components/CommentCard/CommentCard";
import { CommentContext} from "../../context/CommentContext";


export default function Comments() {
  const { state, dispatch } = useContext(CommentContext);

  function handleRemoveComment(index) {
    dispatch({ type: "removeComment", payload: index });
  }

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
        <CommentCard key={index} comment={comment} removeComment={() => handleRemoveComment(index)}/>
      ))}
    </section>
  );
}