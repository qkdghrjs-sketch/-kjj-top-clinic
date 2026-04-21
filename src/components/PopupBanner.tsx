"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const POPUPS = [
  {
    id: "popup1",
    storageKey: "popup_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/e1268e10989ac.png",
    alt: "공지 팝업 1",
    expiresAt: null as Date | null,
  },
  {
    id: "popup2",
    storageKey: "popup2_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/630c213e9a057.png",
    alt: "공지 팝업 2",
    expiresAt: null as Date | null,
  },
  {
    id: "popup3",
    storageKey: "popup3_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/50fe2f3ed37ae.png",
    alt: "공지 팝업 3",
    expiresAt: new Date("2026-06-01T00:00:00"),
  },
];

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function PopupBanner() {
  const [visibleMap, setVisibleMap] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const now = new Date();
    const newMap: Record<string, boolean> = {};

    for (const popup of POPUPS) {
      if (popup.expiresAt && now >= popup.expiresAt) {
        newMap[popup.id] = false;
        continue;
      }
      const hiddenDate = localStorage.getItem(popup.storageKey);
      newMap[popup.id] = hiddenDate !== today;
    }

    setVisibleMap(newMap);
    setMounted(true);
  }, []);

  const handleClose = (id: string) => {
    setVisibleMap((prev) => ({ ...prev, [id]: false }));
  };

  const handleHideToday = (storageKey: string, id: string) => {
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem(storageKey, today);
    setVisibleMap((prev) => ({ ...prev, [id]: false }));
  };

  if (!mounted) return null;

  const visiblePopups = POPUPS.filter((p) => visibleMap[p.id]);
  if (visiblePopups.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-auto py-4 px-2 pointer-events-none">
      <div className="pointer-events-auto flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto sm:justify-center">
        {visiblePopups.map((popup) => (
          <div
            key={popup.id}
            className="relative w-full sm:w-[320px] max-w-[320px] mx-auto sm:mx-0 shadow-xl rounded-lg overflow-hidden flex-shrink-0"
          >
            <button
              onClick={() => handleClose(popup.id)}
              className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
              aria-label="닫기"
            >
              <CloseIcon />
            </button>

            <div className="relative w-full">
              <Image
                src={popup.src}
                alt={popup.alt}
                width={320}
                height={0}
                className="w-full h-auto"
                sizes="320px"
                priority
              />
            </div>

            <div className="flex items-center justify-between bg-white px-4 py-3 text-sm text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  onChange={() => handleHideToday(popup.storageKey, popup.id)}
                  className="w-4 h-4 accent-gray-600"
                />
                오늘 하루 보지 않기
              </label>
              <button
                onClick={() => handleClose(popup.id)}
                className="text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
