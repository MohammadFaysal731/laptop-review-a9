import React from 'react';
import Comment from '../Comment/Comment';
import useComment from '../hooks/useComments';
import './Home.css';
const Home = () => {
    const [comments, setComments] = useComment([]);
    return (
        <div className="">
            <div className='home-container'>
                <div className="home-left">
                    <h3>HP ProBook 440 GB -Wolf Pro Security Edition</h3>
                    <p>Windows 10 pro( available through downgrade rights from Windows 11 pro).</p>
                    <p>11<sup>th</sup>Generation Intel<sup>&copy;</sup>Core i7 <sup>TM</sup>processor.</p>
                    <p>16 GB memory; 5112 GB SSD storage.</p>
                    <p>14<sup>"</sup>diagonal FHD display.</p>

                </div>
                <div className="home-right">
                    <img src="https://www.nicepng.com/png/detail/2-25536_hp-laptop-png-image-background-hp-probook-440.png" alt="" />
                </div>
            </div>
            <div className="home-reviews">
                <h2>Customer Reviews:({comments.length})</h2>
                <div className="reviews-container">
                    {
                        comments.map(comment => <Comment
                            comment={comment}
                            key={comment.id}
                        ></Comment>)
                    }
                </div>
                <button className='see-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;