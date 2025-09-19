import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author={"Wonjun"} body={"React.js is awesome!!"} />
        <Post author={"Anna"} body={"Next.js is also awesome!!"} />
      </ul>
    </>
  );
}

export default PostsList;
