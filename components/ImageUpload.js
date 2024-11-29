import React from 'react'

const ImageUpload = ({account, videoRef, startWebcam, captureImage, imageURL, canvasRef, handleCapture, status}) => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow  border-4 border-black">
        {account && (
          <p className="text-center text-black font-extrabold flex items-center justify-center mb-4 p-4  bg-red-600 border-4 border-black ">
            <span className='text-ellipsis overflow-hidden'>
            {account}
            </span>
          </p>
        )}

        <div className="mb-4">
          <video ref={videoRef} className="w-full  rounded mb-2 border-4 border-dotted border-black" autoPlay />
          <div className='flex flex-col md:gap-y-4 gap-y-2'>
          <button
            onClick={startWebcam}
            className="bg-yellow-500 text-black font-extrabold border-4 border-black px-4 py-2 hover:bg-yellow-400 m-2"
          >
            Start Webcam 📷
          </button>
          <button
            onClick={captureImage}
            className="bg-red-500 text-black font-extrabold border-4 border-black px-4 py-2 hover:bg-red-400 m-2"
          >
            Capture Image ✨
          </button>
          </div>
         
        </div>

        {imageURL && (
          <div className="mb-4">
            <p className="font-semibold">Captured Image:</p>
            <img
              src={imageURL}
              alt="Captured"
              className="w-full border rounded"
            />
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />

        <div className="flex justify-between">
          <button
            onClick={handleCapture}
            className="bg-blue-500 text-black px-4 py-2 w-full font-extrabold border-4 border-black m-2 hover:bg-blue-400"
          >
            Send to Contract 💸
          </button>
          
        </div>
        {status && (
          <p className="text-center text-gray-700 mt-4 font-semibold">{status}</p>
        )}
      </div>
      <h1 className="flex items-center justify-center mx-auto p-3 mb-4 bg-yellow-600 md:w-1/2 mt-5 border-4 border-black">
          <span className='md:text-3xl text-xl font-extrabold'>Your precious smiles ⬇️ </span>
      </h1>
    </div>
  )
}

export default ImageUpload
