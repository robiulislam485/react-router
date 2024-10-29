import './user.css'
const User = ({ user }) => {
    const { name, email, phone } = user;

    return (
        <div className='user'>
    <h3>Name: {name}</h3>
    <p>Email: {email}</p>
    <p>Contact: {phone}</p>
        </div>
    );
};

export default User;