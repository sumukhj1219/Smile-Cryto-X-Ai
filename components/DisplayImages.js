"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayImages = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get("/api/display-images");
        const fetchedImages = response.data.resources || [];
        setImages(fetchedImages);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images. Please try again.");
      }
    }

    fetchImages();
  }, []);

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  if (images.length === 0) {
    return <p className="text-center mt-4 text-gray-600">Loading images...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Image Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.public_id}
              className="border-4 border-black bg-white p-2 rounded-md"
            >
              <img
                className="rounded-md object-cover w-full h-64"
                src={image.secure_url}
                alt={image.public_id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayImages;
