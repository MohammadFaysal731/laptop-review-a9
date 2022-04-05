import React from 'react';
import './Comment.css';
const Comment = ({ comment }) => {
    const { img, name, comments, rating } = comment;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <div className="review-detail">
                <h4>{name}</h4>
                <p>{comments}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default Comment;