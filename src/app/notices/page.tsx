"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

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

const categoryStyle: Record<string, string> = {
  진료안내: "bg-sky-100 text-sky-700 border-sky-200",
  예방접종: "bg-emerald-50 text-emerald-700 border-emerald-200",
  검진안내: "bg-violet-50 text-violet-700 border-violet-200",
  공지: "bg-navy-50 text-navy-700 border-navy-200",
};

export default function NoticesPage() {
  return (
    <>
      <PageHeader
        title="공지사항"
        subtitle="병원의 주요 소식과 안내사항을 확인하세요."
      />

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {notices.map((notice, i) => (
              <ScrollReveal key={notice.id} delay={i * 80}>
                <article
                  className={`border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default ${
                    notice.pinned
                      ? "border-gold-200 bg-gradient-to-r from-gold-100/30 to-white shadow-md"
                      : "border-gray-100 bg-white hover:border-navy-200"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {notice.pinned && (
                      <span className="bg-gradient-to-r from-gold-400 to-gold-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                        중요
                      </span>
                    )}
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-md border ${
                        categoryStyle[notice.category] || categoryStyle["공지"]
                      }`}
                    >
                      {notice.category}
                    </span>
                    <span className="text-xs text-gray-400 ml-auto">
                      {notice.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {notice.content}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="mt-14 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-xl bg-navy-800 text-white font-medium text-sm shadow-md">
                1
              </button>
              <button className="w-10 h-10 rounded-xl bg-gray-100 text-gray-500 hover:bg-navy-100 hover:text-navy-700 font-medium text-sm transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-xl bg-gray-100 text-gray-500 hover:bg-navy-100 hover:text-navy-700 font-medium text-sm transition-colors">
                3
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
