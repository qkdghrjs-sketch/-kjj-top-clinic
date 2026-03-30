import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400"></div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-navy-600 to-sky-600 flex items-center justify-center text-white font-bold text-sm">
                탑
              </div>
              <h3 className="text-white font-bold text-lg">
                김정재탑내과의원
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              내과 전문의가 직접 진료하는 신뢰할 수 있는 병원입니다.
              <br />
              환자 한 분 한 분에게 최선의 진료를 약속드립니다.
            </p>
          </div>
          <div>
            <h4 className="text-gold-400 font-semibold mb-4 text-sm uppercase tracking-wider">
              진료시간
            </h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>평일</span>
                <span className="text-gray-300">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>토요일</span>
                <span className="text-gray-300">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>점심시간</span>
                <span className="text-gray-300">13:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-red-400">일요일</span>
                <span className="text-red-400">정기휴무</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold-400 font-semibold mb-4 text-sm uppercase tracking-wider">
              오시는 길
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              서울 강서구 화곡로 135
              <br />
              상원빌딩 3,4층
            </p>
            <div className="mt-3 space-y-1">
              <p className="text-sm">
                <span className="text-gold-400">T.</span>{" "}
                <a href="tel:02-2698-8880" className="text-gray-300 hover:text-white transition-colors">
                  02-2698-8880
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-navy-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} 김정재탑내과의원. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/medical-info" className="hover:text-gray-300 transition-colors">진료안내</Link>
            <Link href="/doctors" className="hover:text-gray-300 transition-colors">의료진</Link>
            <Link href="/notices" className="hover:text-gray-300 transition-colors">공지사항</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
