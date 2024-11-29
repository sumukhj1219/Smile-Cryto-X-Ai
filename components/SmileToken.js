'use client'
import { ethers } from "ethers";
import React, { useEffect, useState, useRef } from "react";
import ImageUpload from "@/components/ImageUpload";
import axios from "axios";

const SmileToken = () => {
  const contractAddress = "0x7bd5567ee26d51ff63f92ab0c03308aaa0c907f4";

  const contractABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_imageurl",
          type: "string",
        },
      ],
      name: "capture",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ];

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [status, setStatus] = useState("");
  const [imageURL, setImageURL] = useState(null); // To store the captured image
  const videoRef = useRef(null); // To access the video element
  const canvasRef = useRef(null); // To access the canvas element

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setProvider(provider);
        setSigner(signer);
        const accountAddress = await signer.getAddress();
        setAccount(accountAddress);

        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contract);
      } catch (error) {
        console.log("Error in connecting to wallet", error);
      }
    };
    connectWallet();
  }, []);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const capturedImageURL = canvas.toDataURL("image/png");
      setImageURL(capturedImageURL);
    }
  };

  const uploadToCloudinary = async (base64Image) => {
    const cloudName = "dijepfvkc";
    const uploadPreset = "f1zlx3rb";
    const folderName = "smile"; // Specify the target folder
  
    try {
      const formData = new FormData();
      formData.append("file", base64Image);
      formData.append("upload_preset", uploadPreset);
      formData.append("folder", folderName); // Add the folder name to the request
  
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
      if (response.ok) {
        console.log("Image uploaded successfully:", data.secure_url);
        return data.secure_url;
      } else {
        throw new Error(data.error.message || "Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
    }
  };
  

  const handleCapture = async () => {
    if (!imageURL) {
      alert("Please capture an image first!");
      return;
    }
    try {
      setStatus("Uploading image...");
      const uploadedImageURL = await uploadToCloudinary(imageURL);
      console.log("Uploaded Image URL:", uploadedImageURL);
      // await handleImageRating(uploadedImageURL)
      setStatus("Sending transaction...");
      const transaction = await contract.capture(uploadedImageURL, {
        value: ethers.utils.parseEther("1"), 
      });
      setStatus("Transaction in progress...");
      await transaction.wait();
      setStatus("Image captured and transaction successful!");
    } catch (error) {
      console.error("Error capturing image:", error);
      setStatus("Capture failed. Please try again.");
    }
  };

  // const handleImageRating = async (imageUrl) => {
  //   try {
  //     const response = await axios.post("/api/rate-images", {
  //       imageUrl,
  //     });
  //   } catch (error) {
  //     console.error("Error in rating image:", error);
  //     throw error;
  //   }
  // };
  

  return (
    <>
    <div className="flex items-center justify-center -rotate-3">
      <div className="p-6 bg-green-600 border-4 border-black w-96 items-center flex justify-center mt-10 font-extrabold text-3xl text-black">EtherJoy</div>
    </div>
    <ImageUpload account={account} videoRef={videoRef} startWebcam={startWebcam} captureImage={captureImage} imageURL={imageURL} canvasRef={canvasRef} handleCapture={handleCapture} status={status} />

    </>
  );
};

export default SmileToken;
