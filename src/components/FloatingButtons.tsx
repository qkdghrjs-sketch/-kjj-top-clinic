"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* 블로그 바로가기 */}
      <a
        href="https://blog.naver.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="블로그 바로가기"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </a>

      {/* 전화예약 */}
      <a
        href="tel:02-6798-8880"
        className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="전화예약"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

      {/* 카카오톡 */}
      <a
        href="https://pf.kakao.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        style={{ backgroundColor: "#FEE500" }}
        aria-label="카카오톡 상담"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#191919">
          <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.72 1.8 5.108 4.508 6.453-.198.74-.716 2.68-.82 3.094-.13.518.19.51.399.371.164-.109 2.61-1.772 3.672-2.492.72.1 1.465.153 2.241.153 5.523 0 10-3.463 10-7.579C22 6.463 17.523 3 12 3z" />
        </svg>
      </a>
    </div>
  );
}
