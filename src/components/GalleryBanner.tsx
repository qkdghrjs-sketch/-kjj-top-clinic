"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const images = [
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/d36aaa6da323b.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/12fd7fd5f3758.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/736bdcc8f452e.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/f30a84c5f3632.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/7177f30f1e803.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/dc8ba4f37a3b4.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/04141eb65a3e3.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/546cc6649d3f4.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/622a7db2ffb2d.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/96aa33562e0fe.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5da41f91c965b.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/f2f6fd0cebb54.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/6841ee8c7370a.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/282c39ba53b14.jpeg",
  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/735a32fbfa1c4.jpeg",
];

const leftImages = images.slice(0, 8);
const rightImages = images.slice(7);

export default function GalleryBanner() {
  const [leftIdx, setLeftIdx] = useState(0);
  const [rightIdx, setRightIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLeftIdx((prev) => (prev + 1) % leftImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRightIdx((prev) => (prev + 1) % rightImages.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[300px] sm:h-[420px] overflow-hidden">
      {/* Left panel */}
      <div className="absolute inset-y-0 left-0 w-1/2">
        {leftImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${img}')`,
              opacity: i === leftIdx ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Right panel */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        {rightImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${img}')`,
              opacity: i === rightIdx ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Center text box */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="px-6 sm:px-10 md:px-16 py-6 sm:py-10 md:py-12 text-center"
          style={{ backgroundColor: "rgba(11,35,72,0.88)" }}
        >
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            편안하고 안전한 검진,
          </p>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
            치료의 시작입니다
          </p>
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
            김정재탑내과{" "}
            <strong className="font-bold">병원 둘러보기</strong>
          </p>
          <Link
            href="/doctors"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/60 text-white hover:bg-white hover:text-navy-900 transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <p className="text-white/60 text-xs mt-2">보러가기</p>
        </div>
      </div>
    </section>
  );
}
