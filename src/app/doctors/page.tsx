import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진 소개 | 김정재탑내과의원",
};

const doctors = [
  {
    name: "김정재",
    role: "대표원장",
    specialty: "내과 전문의 · 소화기내과",
    image: null,
    bio: "서울대학교 의과대학 졸업 후 서울대학교병원에서 내과 전공의 수련을 마쳤습니다. 소화기내과 분과 전문의로서 위·대장 내시경 및 소화기 질환 치료에 풍부한 경험을 보유하고 있습니다.",
    career: [
      "서울대학교 의과대학 졸업",
      "서울대학교병원 내과 전공의 수료",
      "서울대학교병원 소화기내과 전임의",
      "대한내과학회 정회원",
      "대한소화기학회 정회원",
      "대한소화기내시경학회 정회원",
      "현) 김정재탑내과의원 대표원장",
    ],
  },
  {
    name: "이수진",
    role: "진료원장",
    specialty: "내과 전문의 · 순환기내과",
    image: null,
    bio: "순환기내과 전문의로서 고혈압, 고지혈증, 심장질환 등 심혈관 질환의 진단과 치료를 담당하고 있습니다. 만성질환 관리와 예방의학에 깊은 관심을 갖고 환자 맞춤형 진료를 제공합니다.",
    career: [
      "연세대학교 의과대학 졸업",
      "세브란스병원 내과 전공의 수료",
      "세브란스병원 순환기내과 전임의",
      "대한내과학회 정회원",
      "대한순환기학회 정회원",
      "현) 김정재탑내과의원 진료원장",
    ],
  },
];

export default function DoctorsPage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">의료진 소개</h1>
          <p className="text-primary-200">
            전문성과 따뜻함을 겸비한 의료진을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="grid md:grid-cols-[240px_1fr] gap-8 items-start"
            >
              {/* 프로필 이미지 영역 */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-300 mb-4">
                  <svg
                    className="w-20 h-20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{doc.name}</h3>
                <p className="text-primary-600 font-medium">{doc.role}</p>
                <p className="text-sm text-gray-500">{doc.specialty}</p>
              </div>

              {/* 소개 */}
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">{doc.bio}</p>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  학력 및 경력
                </h4>
                <ul className="space-y-2">
                  {doc.career.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
