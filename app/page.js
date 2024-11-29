'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-yellow-100 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(255, 255, 0, 0.7)_0%,_rgba(255, 223, 0, 0.5)_50%,_rgba(255, 165, 0, 0)_100%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 lg:px-16 mt-20 max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-yellow-900 sm:text-6xl md:text-7xl">
          EtherJoy
        </h1>
        <p className="text-lg bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-red-600 to-red-500 via-purple-500">
          Crypto X AI
        </p>
        <p className="mt-6 text-xl text-center text-yellow-700 max-w-2xl">
          Our super cool solution will make your business thrive while bringing a smile to your face. 🎉
        </p>
        <div className="mt-8">
          <Link
            href={'/dashboard'}
            className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Lets Have Fun!
          </Link>
        </div>
        <div className="md:max-w-7xl items-center justify-center flex mx-auto m-4">
          <Image
            src={'/road.png'}
            width={1024}
            height={1024}
            alt="road"
            className="w-full"
          />
        </div>
        <div className="relative z-20 bg-transparent bg-opacity-80 rounded-xl shadow-lg mx-auto max-w-4xl mt-12 px-8 py-6">
        <h2 className="md:text-3xl text-xl flex items-center justify-center mx-auto font-bold text-yellow-800">How does this work ?</h2>
        <p className="mt-4 text-lg text-gray-700 text-center">
          EtherJoy is an innovative platform that combines AI and blockchain to spread happiness. Take a photo of your smile with our built-in camera feature, and our app evaluates your smile to reward you with cryptocurrency!
        </p>
        <ul className="mt-4 space-y-3 text-gray-600 text-center">
          <li>🎥 Capture your smile effortlessly using the camera.</li>
          <li>☁️ Cloudinary generates secure image URLs seamlessly.</li>
          <li>💰 Receive rewards directly via MetaMask integration.</li>
        </ul>
        <p className="mt-6 text-center text-yellow-900 font-semibold">
          Smile. Snap. Earn.
        </p>
      </div>
      </div>
      {/* Footer Section */}
      <footer className="relative z-20 mt-12 bg-transparent py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-800 font-semibold text-lg">© 2024 Sumukh Joshi</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://github.com/sumukhj1219" target="_blank" rel="noopener noreferrer">
              <span className="text-gray-900 hover:text-yellow-700 font-medium">GitHub</span>
            </Link>
            <Link href="https://x.com/SumukhJ224454" target="_blank" rel="noopener noreferrer">
              <span className="text-gray-900 hover:text-yellow-700 font-medium">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .bg-grid {
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 2px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 2px);
          background-size: 30px 30px;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
