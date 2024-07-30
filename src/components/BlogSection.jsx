import React, { useState } from 'react';
import { FaUser, FaCalendar } from 'react-icons/fa';
import blogFormImage from '../assets/images/blog1.jpg'; // Replace with actual image path

const BlogPost = ({ title, author, date, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <div className="flex items-center text-gray-500 text-sm mb-4">
      <FaUser className="mr-2" /> {author}
      <FaCalendar className="ml-4 mr-2" /> {date}
    </div>
    <p>{content}</p>
  </div>
);

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "The Importance of Clean Water",
      author: "Jane Doe",
      date: "July 19, 2024",
      content: "Clean water is essential for life, health, and dignity..."
    },
    {
      title: "Tips for Water Conservation",
      author: "John Smith",
      date: "July 18, 2024",
      content: "Water conservation is crucial for ensuring sustainable water supplies..."
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    author: '',
    date: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogPosts([...blogPosts, newPost]);
    setNewPost({
      title: '',
      author: '',
      date: '',
      content: ''
    });
  };

  return (
    <div className="container mx-auto my-12 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-600">
        Blog Section
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md mb-12 lg:w-1/2 lg:mr-6"
        >
          <h2 className="text-2xl font-bold mb-4">Post a New Blog</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-teal-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={newPost.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-teal-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={newPost.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-teal-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Content</label>
            <textarea
              name="content"
              value={newPost.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-teal-300"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-600 transition-colors"
          >
            Post Blog
          </button>
        </form>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <img
            src={blogFormImage}
            alt="Blog Form"
            className="rounded-lg shadow-md w-full lg:w-[100%] h-auto max-h-[82vh]"
          />
        </div>
      </div>

      {blogPosts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default BlogSection;
