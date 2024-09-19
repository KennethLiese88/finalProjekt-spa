import React, { useState } from 'react';
import styles from "./CommentCard.module.css";

export default function CommentCard({comment}) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    // ToDo: likes/dislikes müssen auch in den local storage nach aktualisierung

    function handleClick() {
        // ToDo: remove
    }

    // ToDo: ganze localStorage system nochmal checken

    // ToDo: checken ob was aus Comments komponente ausgelagert werden sollte
    //       vllt einen useReducerContext erstellen

    // browser minimierung rätsel lösen !!!

  return (
    <article>
        <div className={styles.article_content}>
            <div className={styles.user_area}>
                <img src={comment.avatar} alt="user avatar" />
                <p>{comment.username}</p>
            </div>
            <div className={styles.comment_area}>
                <h4>{comment.topic}</h4>
                <button onClick={handleClick}><i className="fa-solid fa-circle-xmark"></i></button>
                <span><i>{comment.dateTimePosted.toLocaleTimeString()}</i></span>
                <span><i>{comment.dateTimePosted.toLocaleDateString()}</i></span>
                <p>{comment.comment}</p>
            </div>
        </div>
        <div className={styles.icon_area}>
            <div><i className="fa-solid fa-reply"></i><span>Reply</span></div>
            <div><i className="fa-solid fa-share-nodes"></i><span>Share</span></div>
            <div onClick={()=>setLikes(likes +1)}><i className="fa-solid fa-thumbs-up"></i><span>{likes}</span></div>
            <div onClick={()=>setDislikes(dislikes +1)}><i className="fa-solid fa-thumbs-down"></i><span>{dislikes}</span></div>
        </div>
    </article>
  )
}
