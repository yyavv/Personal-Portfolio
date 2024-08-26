import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { FiTrash2, FiDownload } from "react-icons/fi"; // Importing icons
import uploadImg from "../assets/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const onDragEnter = (e) => {
    e.preventDefault();
    wrapperRef.current.classList.add("dragover");
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    wrapperRef.current.classList.remove("dragover");
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    wrapperRef.current.classList.remove("dragover");

    const newFile = e.dataTransfer.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  const fileDownload = (file) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div
        ref={wrapperRef}
        className="drop-file-input border-2 border-dashed border-gray-600 p-6 rounded-lg cursor-pointer w-64 h-56 flex flex-col items-center justify-center bg-gray-800"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <img src={uploadImg} alt="upload" className="w-16 h-16 mb-4" />
        <p className="text-gray-300 text-center text-lg">
          Drag & Drop your files here
        </p>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={onFileDrop}
        />
      </div>
      {fileList.length > 0 && (
        <div className="drop-file-preview mt-4 bg-gray-900 p-4 rounded-lg w-64">
          <p className="drop-file-preview__title text-gray-400 mb-3">
            Ready to upload
          </p>
          {fileList.map((item, index) => (
            <div
              key={index}
              className="drop-file-preview__item flex items-center justify-between mb-3"
            >
              <div className="drop-file-preview__item__info text-gray-200">
                <p>{item.name}</p>
                <p className="text-sm">{item.size}B</p>
              </div>
              <div className="flex space-x-2">
                <FiDownload
                  className="text-blue-500 cursor-pointer"
                  onClick={() => fileDownload(item)}
                />
                <FiTrash2
                  className="text-red-500 cursor-pointer"
                  onClick={() => fileRemove(item)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
