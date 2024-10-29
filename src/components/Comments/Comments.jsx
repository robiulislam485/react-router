import { useLoaderData } from "react-router-dom";
import Comment from '../Comment/Comment'
import './comments.css'


const Comments = () => {
    const comments = useLoaderData();
    return (
        <div>
            <h2>Comments: {comments.length}</h2>
            <div className="comments">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;