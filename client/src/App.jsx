import CreatePost from "./components/post/CreatePost";
import PostList from "./components/post/PostList";

const App = () => {
  return (
    <div className="container">
      <CreatePost />
      <hr />
      <PostList />
    </div>
  );
};

export default App;
