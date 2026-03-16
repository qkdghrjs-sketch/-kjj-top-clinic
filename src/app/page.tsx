import Link from "next/link";

const departments = [
  {
    icon: "🫀",
    title: "순환기 내과",
    desc: "고혈압, 고지혈증, 심장질환 등 심혈관 질환을 전문적으로 진료합니다.",
  },
  {
    icon: "🫁",
    title: "호흡기 내과",
    desc: "감기, 기관지염, 천식, 폐렴 등 호흡기 질환을 진료합니다.",
  },
  {
    icon: "🔬",
    title: "소화기 내과",
    desc: "위내시경, 대장내시경 및 소화기 질환 전반을 진료합니다.",
  },
  {
    icon: "💉",
    title: "건강검진",
    desc: "국가건강검진, 일반건강검진, 채용검진을 실시합니다.",
  },
  {
    icon: "🩺",
    title: "만성질환 관리",
    desc: "당뇨, 고혈압, 고지혈증 등 만성질환을 체계적으로 관리합니다.",
  },
  {
    icon: "💊",
    title: "예방접종",
    desc: "독감, 폐렴, 대상포진 등 각종 예방접종을 실시합니다.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            환자 중심의
            <br />
            따뜻한 진료를 약속합니다
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl">
            내과 전문의 김정재 원장이 직접 진료하며, 정확한 진단과 맞춤형
            치료로 건강을 지켜드립니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/medical-info"
              className="bg-white text-primary-700 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              진료안내 보기
            </Link>
            <a
              href="tel:02-1234-5678"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              전화 예약: 02-1234-5678
            </a>
          </div>
        </div>
      </section>

      {/* 병원 소개 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              김정재탑내과의원을 소개합니다
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              김정재탑내과의원은 내과 전문의가 운영하는 1차 의료기관으로,
              환자 한 분 한 분께 정성을 다해 진료합니다. 최신 의료 장비와
              풍부한 임상 경험을 바탕으로 정확한 진단과 치료를 제공합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-primary-50">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                15년+
              </div>
              <div className="text-gray-600">임상 경험</div>
            </div>
            <div className="p-6 rounded-xl bg-primary-50">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                50,000+
              </div>
              <div className="text-gray-600">누적 진료 환자</div>
            </div>
            <div className="p-6 rounded-xl bg-primary-50">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                365일
              </div>
              <div className="text-gray-600">건강 관리 파트너</div>
            </div>
          </div>
        </div>
      </section>

      {/* 진료과목 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              진료과목
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-3xl mb-3">{dept.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {dept.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              오시는 길
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-100 rounded-xl overflow-hidden h-80 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-3 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm">지도 영역 (카카오맵/네이버맵 연동)</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <span className="text-primary-600 font-bold text-sm">주소</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    서울특별시 강남구 테헤란로 123 탑빌딩 3층
                  </p>
                  <p className="text-sm text-gray-500">
                    강남역 2번 출구에서 도보 5분
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <span className="text-primary-600 font-bold text-sm">전화</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">02-1234-5678</p>
                  <p className="text-sm text-gray-500">팩스: 02-1234-5679</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <span className="text-primary-600 font-bold text-sm">주차</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">건물 내 지하주차장 이용 가능</p>
                  <p className="text-sm text-gray-500">진료 환자 2시간 무료 주차</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <span className="text-primary-600 font-bold text-sm">교통</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">지하철 2호선 강남역</p>
                  <p className="text-sm text-gray-500">버스: 140, 144, 145, 341</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
