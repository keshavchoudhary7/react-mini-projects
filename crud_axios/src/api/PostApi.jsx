import axios from 'axios';

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", 
});

// Fetching all posts
export const getPost = () => {
  return api.get("/posts"); 
};


// deleting posts 

export const deletePost = (id)=>{
    return api.delete(`/posts/${id}`); 
}


// post/add data 

export const addPost = (post) => {
  return api.post("/posts", post); 
};

// Updating a post
export const updatePost = (id, updatedPost) => {
    return api.put(`/posts/${id}`, updatedPost); 
  };
  