"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const POPUPS = [
  {
    id: "popup1",
    storageKey: "popup_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/aefca81a9e2d9.png",
    alt: "공지 팝업 1",
    expiresAt: null as Date | null,
    replaceSrc: null as string | null,
    replaceAlt: null as string | null,
    replaceStorageKey: null as string | null,
    replaceExpiresAt: null as Date | null,
  },
  {
    id: "popup2",
    storageKey: "popup2_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/630c213e9a057.png",
    alt: "공지 팝업 2",
    expiresAt: null as Date | null,
    replaceSrc: null as string | null,
    replaceAlt: null as string | null,
    replaceStorageKey: null as string | null,
    replaceExpiresAt: null as Date | null,
  },
  {
    id: "popup3",
    storageKey: "popup3_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/50fe2f3ed37ae.png",
    alt: "5월 진료안내",
    // 5월 25일 00시 이후 replaceSrc로 자동 전환
    expiresAt: new Date("2026-05-26T00:00:00"),
    replaceSrc: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/78331d920565c.png",
    replaceAlt: "공지 팝업 3",
    replaceStorageKey: "popup3_replace_hidden_date",
    replaceExpiresAt: new Date("2026-07-01T00:00:00"),
  },
  {
    id: "popup4",
    storageKey: "popup4_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/44d347578ef5a.jpeg",
    alt: "공지 팝업 4",
    expiresAt: null as Date | null,
    replaceSrc: null as string | null,
    replaceAlt: null as string | null,
    replaceStorageKey: null as string | null,
    replaceExpiresAt: null as Date | null,
  },
  {
    id: "popup5",
    storageKey: "popup5_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/51fface91f166.jpeg",
    alt: "공지 팝업 5",
    expiresAt: null as Date | null,
    replaceSrc: null as string | null,
    replaceAlt: null as string | null,
    replaceStorageKey: null as string | null,
    replaceExpiresAt: null as Date | null,
  },
  {
    id: "popup6",
    storageKey: "popup6_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/a2b32db280c0b.jpeg",
    alt: "공지 팝업 6",
    expiresAt: null as Date | null,
    replaceSrc: null as string | null,
    replaceAlt: null as string | null,
    replaceStorageKey: null as string | null,
    replaceExpiresAt: null as Date | null,
  },
  {
    id: "popup7",
    storageKey: "popup7_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/804ef6411d31c.jpeg",
    alt: "공지 팝업 7",
    expiresAt: null as Date | null,
    replaceSrc: null as string | null,
    replaceAlt: null as string | null,
    replaceStorageKey: null as string | null,
    replaceExpiresAt: null as Date | null,
  },
];

type ActivePopup = {
  id: string;
  activeSrc: string;
  activeAlt: string;
  activeStorageKey: string;
};

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
  const [activePopups, setActivePopups] = useState<ActivePopup[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const now = new Date();
    const newMap: Record<string, boolean> = {};
    const resolved: ActivePopup[] = [];

    for (const popup of POPUPS) {
      const isExpired = popup.expiresAt && now >= popup.expiresAt;

      if (isExpired && popup.replaceSrc) {
        // 만료 후 대체 이미지로 자동 전환
        const replaceExpired = popup.replaceExpiresAt && now >= popup.replaceExpiresAt;
        if (replaceExpired) {
          newMap[popup.id] = false;
          continue;
        }
        const hiddenDate = localStorage.getItem(popup.replaceStorageKey!);
        newMap[popup.id] = hiddenDate !== today;
        resolved.push({
          id: popup.id,
          activeSrc: popup.replaceSrc,
          activeAlt: popup.replaceAlt ?? popup.alt,
          activeStorageKey: popup.replaceStorageKey!,
        });
      } else if (isExpired) {
        newMap[popup.id] = false;
      } else {
        const hiddenDate = localStorage.getItem(popup.storageKey);
        newMap[popup.id] = hiddenDate !== today;
        resolved.push({
          id: popup.id,
          activeSrc: popup.src,
          activeAlt: popup.alt,
          activeStorageKey: popup.storageKey,
        });
      }
    }

    setActivePopups(resolved);
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

  const visiblePopups = activePopups.filter((p) => visibleMap[p.id]);
  if (visiblePopups.length === 0) return null;

  const renderCard = (popup: ActivePopup, className: string) => (
    <div key={popup.id} className={`relative shadow-xl rounded-lg overflow-hidden flex-shrink-0 ${className}`}>
      <button
        onClick={() => handleClose(popup.id)}
        className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
        aria-label="닫기"
      >
        <CloseIcon />
      </button>

      <div className="relative w-full">
        <Image
          src={popup.activeSrc}
          alt={popup.activeAlt}
          width={480}
          height={0}
          className="w-full h-auto"
          sizes="(max-width: 640px) 90vw, 480px"
          priority
        />
      </div>

      <div className="flex items-center justify-between bg-white px-4 py-3 text-sm text-gray-700">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            onChange={() => handleHideToday(popup.activeStorageKey, popup.id)}
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
  );

  return (
    <>
      {/* PC: 가로 배열, 화면 중앙 */}
      <div className="hidden sm:flex fixed inset-0 z-[9999] items-center justify-center pointer-events-none">
        <div className="pointer-events-auto flex flex-row gap-3">
          {visiblePopups.map((popup) => renderCard(popup, "w-[480px]"))}
        </div>
      </div>

      {/* 모바일: 가로 스와이프 (scroll-snap) */}
      <div className="sm:hidden fixed inset-0 z-[9999] flex items-center pointer-events-none">
        <div
          className="pointer-events-auto flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory w-full px-[5vw] scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {visiblePopups.map((popup) => renderCard(popup, "snap-center w-[90vw]"))}
          {/* 마지막 카드 오른쪽 여백 */}
          <div className="flex-shrink-0 w-[5vw]" />
        </div>
      </div>
    </>
  );
}
