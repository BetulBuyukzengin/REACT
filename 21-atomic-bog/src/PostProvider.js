import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

// 1.aşama createContext
const PostContext = createContext();

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// 2.aşama create provider
function PostProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }
  // 3.aşama value propu verme
  return (
    <PostContext.Provider
      value={{
        posts,
        searchQuery,
        setSearchQuery,
        searchedPosts,
        handleAddPost,
        createRandomPost,
        handleClearPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
// 4.aşama create custom hook
function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
