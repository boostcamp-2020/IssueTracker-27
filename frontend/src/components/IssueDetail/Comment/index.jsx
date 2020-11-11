import React from 'react';

const Comment = () => {
  return (
    <>
      <div>사용자 이미지</div>
      <section>
        <div>write</div>
        <div>
          <textarea placeholder='Leave a comment'></textarea>
          <button>close</button>
          <button>comment</button>
        </div>
      </section>
    </>
  );
};

export default Comment;
