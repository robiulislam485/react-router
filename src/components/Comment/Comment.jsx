import './comment.css'
import { Link } from 'react-router-dom';

const Comment = ({ comment }) => {
    const { id, name, body } = comment;
    return (
        <div className="comment">
            <h4>Name: {name}</h4>
            <p><small>{body}</small></p>
            <Link to={`/comment/${id}`}><button>See details</button></Link>
        </div>
    );
};

export default Comment;