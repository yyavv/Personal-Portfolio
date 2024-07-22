import React, { useState } from "react";

const Contact = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    if (uploadedFile) {
      setFileURL(URL.createObjectURL(uploadedFile));
    }
  };

  const handleFileDownload = () => {
    if (fileURL) {
      const link = document.createElement("a");
      link.href = fileURL;
      link.download = file.name;
      link.click();
    }
  };

  return (
    <section id="contact" className="bg-white text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:border-indigo-500"
              type="text"
              id="name"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:border-indigo-500"
              type="email"
              id="email"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:border-indigo-500"
              id="message"
            ></textarea>
          </div>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
            Send
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-center">
            Leave a Comment
          </h3>
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:border-indigo-500"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your comment here"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
              type="submit"
            >
              Submit Comment
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-center">Comments</h3>
          <div className="space-y-4">
            {comments.map((cmt, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded shadow">
                {cmt}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-4">File Upload</h3>
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4 mx-auto"
          />
          {file && (
            <div>
              <p>File Uploaded: {file.name}</p>
              <button
                onClick={handleFileDownload}
                className="bg-indigo-500 text-white rounded-full py-2 px-4 hover:bg-indigo-600 transition duration-300 ease-in-out mt-4 mx-auto"
              >
                Download File
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
