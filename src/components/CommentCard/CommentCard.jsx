import React, { useContext } from 'react';
import styles from "./CommentCard.module.css";
import { CommentContext } from '../../context/CommentContext';

export default function CommentCard({comment, removeComment}) {
    const { dispatch } = useContext(CommentContext);

  return (
    <article>
        <div className={styles.article_content}>
            <div className={styles.user_area}>
                <img src={comment.avatar} alt="user avatar" />
                <p>{comment.username}</p>
            </div>
            <div className={styles.comment_area}>
                <h4>{comment.topic}</h4>
                <i className={`fa-solid fa-circle-xmark ${styles.removeIcon}`}  onClick={removeComment}></i>
                <span><i>{comment.dateTimePosted.toLocaleTimeString()}</i></span>
                <span><i>{comment.dateTimePosted.toLocaleDateString()}</i></span>
                <p>{comment.comment}</p>
            </div>
        </div>
        <div className={styles.icon_area}>
            <div><i className="fa-solid fa-reply"></i><span>Reply</span></div>
            <div><i className="fa-solid fa-share-nodes"></i><span>Share</span></div>
            <div onClick={()=>dispatch({type:"like", payload: comment.id})}><i className="fa-solid fa-thumbs-up"></i><span>{comment.likes || 0}</span></div>
            <div onClick={()=>dispatch({type:"dislike", payload: comment.id})}><i className="fa-solid fa-thumbs-down"></i><span>{comment.dislikes || 0}</span></div>
        </div>
    </article>
  )
}
