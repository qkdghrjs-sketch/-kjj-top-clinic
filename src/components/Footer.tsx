export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              김정재탑내과의원
            </h3>
            <p className="text-sm leading-relaxed">
              내과 전문의가 직접 진료하는 신뢰할 수 있는 병원입니다.
              <br />
              환자 한 분 한 분에게 최선의 진료를 약속드립니다.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">진료시간</h4>
            <ul className="text-sm space-y-1">
              <li>평일: 09:00 - 18:00</li>
              <li>토요일: 09:00 - 13:00</li>
              <li>점심시간: 13:00 - 14:00</li>
              <li>일요일 · 공휴일 휴진</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">오시는 길</h4>
            <p className="text-sm leading-relaxed">
              서울특별시 강남구 테헤란로 123
              <br />
              탑빌딩 3층
            </p>
            <p className="text-sm mt-2">
              <span className="text-white">전화:</span> 02-1234-5678
            </p>
            <p className="text-sm">
              <span className="text-white">팩스:</span> 02-1234-5679
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} 김정재탑내과의원. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
