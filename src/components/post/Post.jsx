import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
        magnam amet nesciunt modi quam in assumenda soluta possimus sit
        doloribus porro, magni, vitae aliquid. Illo quibusdam iste voluptatum
        magnam culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eveniet, magnam amet nesciunt modi quam in assumenda soluta possimus sit
        doloribus porro, magni, vitae aliquid. Illo quibusdam iste voluptatum
        magnam culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eveniet, magnam amet nesciunt modi quam in assumenda soluta possimus sit
        doloribus porro, magni, vitae aliquid. Illo quibusdam iste voluptatum
        magnam culpa.
      </p>
    </div>
  );
};

export default Post;
