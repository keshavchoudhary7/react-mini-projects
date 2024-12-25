import { deletePost, getPost } from "../api/PostApi";
import { useEffect, useState } from "react";
import AddData from "./AddData";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updatePost, setUpdatePost] = useState(null);

  // Fetch API posts
  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Delete a post
  const handleDeletePosts = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        setData((prevData) => prevData.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Edit/Update post
  const handleUpdatePost = (currEle) => setUpdatePost(currEle);

  return (
    <>
      {/* Input Card */}
      <AddData
        data={data}
        setData={setData}
        updatePost={updatePost}
        setUpdatePost={setUpdatePost}
      />
      {/* List of Posts */}
      <ol className="max-w-7xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((currEle, index) => {
          const { id, title, body } = currEle;
          return (
            <li
              key={id}
              className="bg-blue-900 text-white shadow-lg rounded-lg p-4 border border-gray-800 transition-transform transform hover:scale-105"
            >
              <div className="flex-1">
                <p className="text-lg font-semibold">{index + 1}. {title}</p>
                <p className="text-gray-300 mt-2">{body}</p>
              </div>
              <div className="flex space-x-2 mt-4">
                <button
                  className="bg-yellow-400 text-gray-800 py-1 px-3 rounded-lg hover:bg-yellow-500 transition duration-300"
                  onClick={() => handleUpdatePost(currEle)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
                  onClick={() => handleDeletePosts(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
};
