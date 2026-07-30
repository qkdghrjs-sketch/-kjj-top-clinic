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
  {
    id: "popup8",
    storageKey: "popup8_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5c0c8ecade616.png",
    alt: "공지 팝업 8",
    expiresAt: null as Date | null,
    replaceSrc: null as string | null,
    replaceAlt: null as string | null,
    replaceStorageKey: null as string | null,
    replaceExpiresAt: null as Date | null,
  },
  {
    id: "popup9",
    storageKey: "popup9_hidden_date",
    src: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/ff2a150a6310e.png",
    alt: "공지 팝업 9",
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

/* ── PC 그리드 레이아웃 상수 ────────────────────────────────
   팝업 이미지 원본 비율이 정사각(1:1)과 A4 세로(1:1.41)로 섞여 있어
   폭만 고정하면 카드 높이가 들쭉날쭉해진다. 그래서 모든 카드를
   동일한 3:4 박스로 통일하고 이미지는 object-contain으로 넣는다.
   카드 폭은 "화면 높이"와 "화면 폭" 두 제약 중 작은 값으로 잡아
   뷰포트를 최대한 채운다. */
const GRID_GAP = 12; // 카드 사이 간격(px)
const CARD_FOOTER_H = 34; // 카드 하단 컨트롤 바 높이(px)
const CARD_MAX_W = 400; // 초대형 모니터에서 과확대 방지
const CARD_MIN_W = 290; // 화면이 낮아도 이 폭은 보장(대신 세로 스크롤 허용)
const MAX_COLS = 4;
// 격자 바깥 여백 합계: 상하 패딩(32) + 그리드~버튼 간격(12) + 일괄 버튼 높이(38)
const CHROME_H = 82;
const GRID_MAX_H = `calc(100vh - ${CHROME_H}px)`;

/** orphan 행(마지막 줄에 1개만 남는 형태)이 생기지 않게 행별 개수를 균등 분배 */
function balancedRowSizes(count: number): number[] {
  const rows = Math.ceil(count / MAX_COLS);
  const base = Math.floor(count / rows);
  const extra = count % rows;
  return Array.from({ length: rows }, (_, i) => base + (i < extra ? 1 : 0));
}

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

  const handleCloseAll = () => {
    setVisibleMap({});
  };

  const handleHideAllToday = () => {
    const today = new Date().toISOString().split("T")[0];
    for (const popup of activePopups) {
      localStorage.setItem(popup.activeStorageKey, today);
    }
    setVisibleMap({});
  };

  // Esc로 전체 닫기
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisibleMap({});
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!mounted) return null;

  const visiblePopups = activePopups.filter((p) => visibleMap[p.id]);
  if (visiblePopups.length === 0) return null;

  // PC: orphan 행 없이 균등 분배 (8개 -> 4+4, 9개 -> 3+3+3, 10개 -> 4+3+3)
  const rowSizes = balancedRowSizes(visiblePopups.length);
  const popupRows: ActivePopup[][] = [];
  let cursor = 0;
  for (const size of rowSizes) {
    popupRows.push(visiblePopups.slice(cursor, cursor + size));
    cursor += size;
  }

  const rowCount = rowSizes.length;
  const colCount = rowSizes[0];

  // 뷰포트 높이 제약과 폭 제약 중 작은 값 -> 화면을 최대한 채우는 카드 폭
  const limitByHeight = `(100vh - ${
    CHROME_H + (rowCount - 1) * GRID_GAP + rowCount * CARD_FOOTER_H
  }px) / ${rowCount} * 0.75`;
  const limitByWidth = `(94vw - ${(colCount - 1) * GRID_GAP}px) / ${colCount}`;
  // 폭 제약은 절대 넘지 않게 바깥에서 다시 clamp (좁은 창에서 가로 넘침 방지)
  const cardWidth = `min(${limitByWidth}, max(${CARD_MIN_W}px, min(${limitByHeight}, ${CARD_MAX_W}px)))`;

  const renderCard = (
    popup: ActivePopup,
    index: number,
    { className = "", width }: { className?: string; width?: string }
  ) => (
    <div
      key={popup.id}
      className={`relative bg-white shadow-2xl rounded-xl overflow-hidden flex-shrink-0 ${className}`}
      style={width ? { width } : undefined}
    >
      <button
        onClick={() => handleClose(popup.id)}
        className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/55 text-white hover:bg-black/75 transition-colors cursor-pointer"
        aria-label="닫기"
      >
        <CloseIcon />
      </button>

      {/* 3:4 고정 박스 + object-contain -> 원본 비율이 달라도 카드 크기가 통일된다 */}
      <div className="relative w-full aspect-[3/4] bg-white">
        <Image
          src={popup.activeSrc}
          alt={popup.activeAlt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 90vw, 400px"
          priority={index < 4}
        />
      </div>

      <div
        className="flex items-center justify-between bg-white border-t border-gray-100 px-3 text-xs text-gray-700 gap-2"
        style={{ height: CARD_FOOTER_H }}
      >
        <label className="flex items-center gap-1.5 cursor-pointer select-none whitespace-nowrap">
          <input
            type="checkbox"
            onChange={() => handleHideToday(popup.activeStorageKey, popup.id)}
            className="w-3.5 h-3.5 accent-gray-600 flex-shrink-0"
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

  const bulkActions = (
    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
      <button
        onClick={handleHideAllToday}
        className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-sm transition-colors cursor-pointer whitespace-nowrap"
      >
        오늘 하루 모두 보지 않기
      </button>
      <button
        onClick={handleCloseAll}
        className="px-4 py-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 font-semibold transition-colors cursor-pointer whitespace-nowrap"
      >
        전체 닫기
      </button>
    </div>
  );

  return (
    <>
      {/* PC: 균형 격자 (높이·폭 통일, 뷰포트에 맞춰 최대 크기) */}
      <div className="hidden sm:flex fixed inset-0 z-[9999] flex-col items-center justify-center gap-3 px-4 py-4">
        {/* 백드롭: 팝업이 페이지 콘텐츠와 섞이지 않게 분리 (클릭 시 전체 닫기) */}
        <div
          className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          onClick={handleCloseAll}
          aria-hidden="true"
        />

        <div
          className="relative flex flex-col gap-3 items-center max-w-[94vw] overflow-y-auto"
          style={{ maxHeight: GRID_MAX_H }}
        >
          {popupRows.map((row, ri) => (
            <div key={ri} className="flex flex-row gap-3 justify-center">
              {row.map((popup, ci) =>
                renderCard(popup, ri * colCount + ci, { width: cardWidth })
              )}
            </div>
          ))}
        </div>

        <div className="relative">{bulkActions}</div>
      </div>

      {/* 모바일: 가로 스와이프 (scroll-snap) */}
      <div className="sm:hidden fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4">
        <div
          className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          onClick={handleCloseAll}
          aria-hidden="true"
        />

        <div
          className="relative flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory w-full px-[5vw] scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {visiblePopups.map((popup, i) =>
            renderCard(popup, i, {
              className: "snap-center",
              // 화면이 낮은 기기에서 카드가 뷰포트를 넘지 않게 높이로도 제한
              width: "min(90vw, (100vh - 130px) * 0.75)",
            })
          )}
          {/* 마지막 카드 오른쪽 여백 */}
          <div className="flex-shrink-0 w-[5vw]" />
        </div>

        {visiblePopups.length > 1 && (
          <p className="relative text-white/70 text-xs">
            좌우로 넘겨서 {visiblePopups.length}개 안내 모두 보기
          </p>
        )}

        <div className="relative">{bulkActions}</div>
      </div>
    </>
  );
}
