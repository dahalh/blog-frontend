import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = process.env.REACT_APP_IMAGE;
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(process.env.REACT_APP_API + "/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      if (window.confirm("Are you sure you want to delete?")) {
        await axios.delete(process.env.REACT_APP_API + `/posts/${post._id}`, {
          data: { username: user.username },
        });
      }
      // window.location.replace("/");
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      if (window.confirm("Are you sure you want to update?")) {
        await axios.put(process.env.REACT_APP_API + `/posts/${post._id}`, {
          username: user.username,
          title,
          desc,
        });
      }
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <>
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
            <button
              className="singleCancelButton"
              onClick={() => setUpdateMode(false)}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
