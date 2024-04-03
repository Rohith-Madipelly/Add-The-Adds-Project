import React, { useState } from 'react';
import { MdThumbUp } from 'react-icons/md';

const LikeButton = ({ initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="like-container">
      <button className="like-button" onClick={toggleLike}>
        {liked ? <MdThumbUp color="blue" /> : <MdThumbUp />}
      </button>
      <p className='ms-2'>{likes} Likes</p>
    </div>
  );
};

export default LikeButton;
