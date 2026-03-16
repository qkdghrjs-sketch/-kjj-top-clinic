import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "공지사항 | 김정재탑내과의원",
};

const notices = [
  {
    id: 1,
    title: "2026년 설 연휴 진료 안내",
    date: "2026-01-20",
    category: "진료안내",
    pinned: true,
    content:
      "설 연휴 기간(1/28~1/30) 동안 휴진합니다. 1/31(토)부터 정상 진료합니다. 응급 상황 시 응급실을 이용해 주세요.",
  },
  {
    id: 2,
    title: "독감 예방접종 시작 안내",
    date: "2025-10-01",
    category: "예방접종",
    pinned: false,
    content:
      "2025-2026 시즌 독감 예방접종이 시작되었습니다. 65세 이상 어르신은 무료접종 대상이며, 일반 접종 비용은 35,000원입니다.",
  },
  {
    id: 3,
    title: "건강검진 사전 예약 안내",
    date: "2025-09-15",
    category: "검진안내",
    pinned: false,
    content:
      "국가건강검진 대상자분들의 원활한 검진을 위해 사전 전화 예약을 권장합니다. 내시경 검사 시 금식 등 준비사항이 있으니 예약 시 안내받으시기 바랍니다.",
  },
  {
    id: 4,
    title: "토요일 진료시간 변경 안내",
    date: "2025-08-01",
    category: "진료안내",
    pinned: false,
    content:
      "2025년 8월부터 토요일 진료시간이 09:00~13:00으로 변경됩니다. 점심시간 없이 진료하오니 참고 부탁드립니다.",
  },
  {
    id: 5,
    title: "비급여 진료비 고지 안내",
    date: "2025-07-10",
    category: "공지",
    pinned: false,
    content:
      "의료법에 따라 비급여 진료비를 홈페이지에 공개합니다. 자세한 내용은 진료안내 페이지를 참고해 주세요.",
  },
  {
    id: 6,
    title: "대상포진 예방접종 안내",
    date: "2025-06-20",
    category: "예방접종",
    pinned: false,
    content:
      "50세 이상 성인에게 대상포진 예방접종을 권장합니다. 접종 비용 및 자세한 사항은 병원으로 문의해 주세요.",
  },
];

const categoryColor: Record<string, string> = {
  진료안내: "bg-blue-100 text-blue-700",
  예방접종: "bg-green-100 text-green-700",
  검진안내: "bg-purple-100 text-purple-700",
  공지: "bg-gray-100 text-gray-700",
};

export default function NoticesPage() {
  return (
    <>
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">공지사항</h1>
          <p className="text-primary-200">
            병원의 주요 소식과 안내사항을 확인하세요.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {notices.map((notice) => (
              <article
                key={notice.id}
                className={`border rounded-xl p-5 hover:shadow-md transition-shadow ${
                  notice.pinned
                    ? "border-primary-300 bg-primary-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {notice.pinned && (
                    <span className="bg-primary-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                      중요
                    </span>
                  )}
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded ${
                      categoryColor[notice.category] || categoryColor["공지"]
                    }`}
                  >
                    {notice.category}
                  </span>
                  <span className="text-xs text-gray-400">{notice.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {notice.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {notice.content}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-2">
            <button className="w-9 h-9 rounded-lg bg-primary-600 text-white font-medium text-sm">
              1
            </button>
            <button className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium text-sm">
              2
            </button>
            <button className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium text-sm">
              3
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
