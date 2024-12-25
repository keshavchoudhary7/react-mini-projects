import React, { useEffect, useState } from "react";
import { addPost, updatePost } from "../api/PostApi";

const AddData = ({ data, setData, updatePost: postToUpdate, setUpdatePost }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // Prefill form when a post is selected for update
  useEffect(() => {
    if (postToUpdate) {
      setFormData({
        title: postToUpdate.title || "",
        body: postToUpdate.body || "",
      });
    }
  }, [postToUpdate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (formData.title && formData.body) {
      try {
        if (postToUpdate) {
          // Update existing post
          const res = await updatePost(postToUpdate.id, formData);
          if (res.status === 200) {
            setData((prevData) =>
              prevData.map((post) =>
                post.id === postToUpdate.id ? res.data : post
              )
            );
          }
          setUpdatePost(null); // Clear the update state
        } else {
          // Add a new post
          const res = await addPost(formData);
          if (res.status === 201) {
            setData((prevData) => [...prevData, res.data]);
          }
        }
        setFormData({ title: "", body: "" }); // Clear the form
      } catch (error) {
        console.error("Error submitting post:", error);
      }
    } else {
      alert("Please fill out both fields before submitting.");
    }
  };

  return (
    <form
      className="bg-blue-900 border-gray-800 p-6 rounded-lg shadow-lg mx-auto my-4 w-full max-w-2xl mb-6"
      onSubmit={handleOnSubmit}
    >
      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        {postToUpdate ? "Update Post" : "Create a New Post"}
      </h2>
      <div className="inputCard flex flex-col space-y-3">
        <input
          type="text"
          name="title"
          placeholder="Add a Heading..."
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-900"
          value={formData.title}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="body"
          placeholder="Add a Paragraph..."
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-900"
          value={formData.body}
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {postToUpdate ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddData;
