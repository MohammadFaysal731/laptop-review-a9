import React from 'react';
import Comment from '../Comment/Comment';
import useComment from '../hooks/useComments';
import './Reviews.css'
const Reviews = () => {
    const [comments, setComments] = useComment([]);
    return (
        <div className='reviews-container'>
            {
                comments.map(comment => <Comment
                    comment={comment}
                    key={comment.id}
                ></Comment>)
            }


        </div>
    );
};

export default Reviews;