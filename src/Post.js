import { format } from "date-fns";
import { Link } from "react-router-dom";
function Post({ _id, title, summary, content, cover, createdAt, author }) {
  return (
    <div className='post'>
      <div className='image child'>
        <Link to={`/post/${_id}`}>
          <img
            src={"http://localhost:4000/" + cover}
            alt='https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-1187380995.jpg?w=1390&crop=1'
          />
        </Link>
      </div>
      <div className='texts child'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className='info'>
          <a href='' className='author'>
            {author.username}
          </a>
          <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
}
export default Post;
