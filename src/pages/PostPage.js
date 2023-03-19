import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../UserContext";
import { FiEdit } from "react-icons/fi";

function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) {
    return "";
  }
  return (
    <div className='post-page'>
      <div className='image'>
        <img src={`http://localhost:4000/${postInfo.cover}`} alt='' />
      </div>
      <h1>{postInfo.title}</h1>
      <p className='info'>
        <a href='' className='author'>
          @{postInfo.author.username}
        </a>
        <time>{format(new Date(postInfo.createdAt), "MMM d, yyyy HH:mm")}</time>
      </p>
      {userInfo.id === postInfo.author._id && (
        <div className='edit-row'>
          <Link to={`/edit/${postInfo._id}`} className='edit-btn'>
            <FiEdit className='icon' />
            Edit the post
          </Link>
        </div>
      )}
      <hr />
      <div
        className='content'
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
export default PostPage;
