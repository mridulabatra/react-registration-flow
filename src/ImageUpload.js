//  Component for uploading images with a modal interface.

import React, { useState } from "react";
import Modal from "react-modal";
import "./ImageUpload.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImageUploadModal = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the modal open/close
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file
  const [uploadError, setUploadError] = useState(null); // State to store upload errors
  const navigate = useNavigate();

  // Function to open the modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedFile(null);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedFile({
          file: file,
          previewURL: e.target.result,
        });
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
    }
  };

  // Function to handle image upload
  const handleImageUpload = async () => {
    try {
      if (!selectedFile) {
        throw new Error("Please select an image to upload.");
      }

      const formData = new FormData();
      formData.append("image", selectedFile.previewURL);

      const response = await axios.post(
        "https://2978e456-03b7-460f-8382-55b05ba6736a.mock.pstmn.io/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Image uploaded successfully:", response.data);
      setUploadError(null);
      navigate("/success");
    } catch (error) {
      setUploadError(error.message);
      console.error("Image upload failed:", error.message);
    }
  };

  return (
    <div>
      <div className="upload-container">
        <div className="upload-content">
          <img
            src="https://i.ibb.co/MPjnKfQ/1478594-removebg-preview.png"
            alt="addImage"
            className="browse-image"
            border="0"
          />
          <h1>Upload Your Image</h1>
          <p>Browse and upload your image to complete your profile details</p>
          <button onClick={handleOpenModal} className="upload-button">
            Select Image
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Upload Photos</h2>
            <img
              src="https://i.ibb.co/fkW3DpV/360-F-565224180-QNRi-RQkf9-Fw0d-KRo-ZGw-Uknmmfk51-Su-SS-removebg-preview.png"
              alt="Upload"
              className="upload-image"
              border="0"
            />
            <div className="upload-container-content">
              <input type="file" accept="image/*" onChange={handleFileChange} />
              {selectedFile && (
                <div className="file-preview">
                  <img
                    src={selectedFile.previewURL}
                    className="uploadImage"
                    alt="Preview"
                  />
                  <p>{selectedFile.name}</p>
                </div>
              )}
              <p className="drag-drop">Click to upload or drag and drop</p>
              {selectedFile && <p>Selected File: {selectedFile.name}</p>}
              {uploadError && <p className="error">{uploadError}</p>}
              <p className="max-file-size">Max. File Size: 15MB</p>
            </div>
            <div className="button-container">
              <button onClick={handleCloseModal} className="cancel-btn">
                Cancel
              </button>
              <button onClick={handleImageUpload}>Upload</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageUploadModal;
