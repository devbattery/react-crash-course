import Post from "./Post.jsx";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author={"Wonjun"} body={"React.js is awesome!!"} />
      <Post author={"Anna"} body={"Next.js is also awesome!!"} />
    </ul>
  );
}

export default PostsList;
