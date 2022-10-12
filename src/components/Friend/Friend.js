import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    return (
        <div className='friends-container'>
            <div>
            <h5>Username: <Link to={`/friend/${friend.id}`} >{friend.username}</Link> </h5>
            <p>Email: {friend.email}</p>
            </div>
        </div>
    );
};

export default Friend;