import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="testko" body="testing body"></Post>
      <Post author="testko" body="testing 234body"></Post>
      <Post author="testko" body="testing b123ody"></Post>
      <Post author="testko" body="testing bo5656dy"></Post>
    </ul>
  );
}

export default PostsList;
