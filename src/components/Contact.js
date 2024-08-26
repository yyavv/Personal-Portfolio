import React, { useState } from "react";
import DropFileInput from "./DropFileInput";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";

const ContactPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onFileChange = (files) => {
    setUploadedFiles(files);
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center header">
      <div className="container mx-auto p-8">
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-500 mb-4">
              Let's work together
            </h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nescient
              sit illo esse commodi.
            </p>
            <form className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
                />
              </div>

              <textarea
                placeholder="Type your message here."
                className="p-3 h-32 rounded bg-gray-700 border border-gray-600 text-white"
              ></textarea>
              <button
                type="submit"
                className="mt-4 p-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-3xl" />
              <div>
                <p className="text-lg font-semibold">Phone</p>
                <p>(+90) 123 456 7890 </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMailBulk className="text-3xl" />
              <div>
                <p className="text-lg font-semibold">Email</p>
                <p>email@email.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaHome className="text-3xl" />
              <div>
                <p className="text-lg font-semibold">Address</p>
                <p>İstanbul, Turkey</p>
              </div>
            </div>
          </div>
        </div>

        <DropFileInput onFileChange={onFileChange} />

        <div className="bg-gray-800 p-10 rounded-lg shadow-lg mt-10">
          <h3 className="text-2xl font-bold text-green-500 mb-6">Comments</h3>
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-3 h-24 rounded bg-gray-700 border border-gray-600 text-white"
            ></textarea>
            <button
              type="submit"
              className="mt-4 p-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
            >
              Post Comment
            </button>
          </form>

          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded">
                <p className="text-white">{comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
