import React, { createContext, useReducer, useEffect } from "react";
import { avatarData } from "../assets/data/avatarData";

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
          id: Date.now(),
          avatar: avatarData[Math.floor(Math.random() * avatarData.length)],
          username: state.username,
          email: state.email,
          topic: state.topic,
          comment: state.comment,
          dateTimePosted: new Date(),
          likes: 0,
          dislikes: 0,
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
  
      case "removeComment":
        const filteredComments = state.comments.filter(comment => comment.id !== action.payload);
        localStorage.setItem("comments", JSON.stringify(filteredComments));
        return { ...state, comments: filteredComments };
  
      case "like":
        const updatedLikesComments = state.comments.map((comment) => {
          if (comment.id === action.payload) {
            return { ...comment, likes: (comment.likes || 0) + 1 };
          }
          return comment;
        });
        localStorage.setItem("comments", JSON.stringify(updatedLikesComments));
        return { ...state, comments: updatedLikesComments };
  
      case "dislike":
        const updatedDislikesComments = state.comments.map((comment) => {
          if (comment.id === action.payload) {
            return { ...comment, dislikes: (comment.dislikes || 0) + 1 };
          }
          return comment;
        });
        localStorage.setItem("comments", JSON.stringify(updatedDislikesComments));
        return { ...state, comments: updatedDislikesComments };
        
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

export const CommentContext = createContext();

export default function CommentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      const commentsWithDateTime = JSON.parse(storedComments).map(
        (comment) => ({
          ...comment,
          dateTimePosted: new Date(comment.dateTimePosted),
        })
      );
      dispatch({ type: "setComments", payload: commentsWithDateTime });
    }
  }, []);

  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
}
