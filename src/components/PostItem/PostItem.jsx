// import { userState } from "react";
import styles from './PostItem.module.scss';

function PostItem(props) {
    const {postItem} = styles;
    const {id, title, userId, body} = props;
    return (
        <div className={postItem}>
            <small>{id}</small>
            <h2>{title}</h2>
            <h3>{userId}</h3>
            <p>{body}</p>
        </div>
    )
}

export default PostItem;