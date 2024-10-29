import { useLoaderData, useNavigate } from "react-router-dom";


const ShowCommentDetail = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    const { id, name, email, body } = details;
    const handleGoBack = () => {
    navigate(-1);
    }
    return (
        <div className="comment">
            <h2>Comment Id: {id}</h2>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ShowCommentDetail;