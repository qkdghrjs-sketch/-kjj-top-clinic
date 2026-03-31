"use client";

import { useState, useMemo } from "react";
import PageHeader from "@/components/PageHeader";

interface Post {
  title: string;
  category: string;
  href: string;
}

const categories = ["전체", "위내시경", "대장내시경", "용종출혈", "만성질환기타"];

const categoryStyle: Record<string, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
  "위내시경": {
    bg: "bg-sky-50",
    text: "text-sky-600",
    border: "border-l-sky-500",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 12v-1a2 2 0 114 0v1" />
      </svg>
    ),
  },
  "대장내시경": {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-l-green-500",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  "용종출혈": {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-l-orange-500",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
  },
  "만성질환기타": {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-l-purple-500",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
};

const posts: Post[] = [
  // ── 위내시경 ──
  { title: "조기 식도암의 발견 2, 다행이다 일찍 발견해서", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223987022259" },
  { title: "40세 이상, 혈변, 복통, 체중감소!! 혹시 암???", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223986786950" },
  { title: "Biopsy 접근이 어려웠던 High grade dysplasia 병변", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223986765287" },
  { title: "식도 조기암의 발견", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223983467312" },
  { title: "Ulcer scar 궤양상처에서 발견된 선종", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223976752302" },
  { title: "평범해보이는 위점막이 전암성 병변?", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224071267278" },
  { title: "위궤양은 끈질기게 추적해야한다", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224071258773" },
  { title: "암은 교묘하게 모습을 감추고 한곳에만 있지 않는다", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224071176586" },
  { title: "위 조직검사는 많을수록 좋다", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224074649187" },
  { title: "소화기내과 의사가 제일 무서워 하는 ring은?", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224060323404" },
  { title: "평범해 보이는 위점막이었는데 전암성병변?", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224060286399" },
  { title: "저분화 선종이었지만 점막박리술후 조기위암으로 재 진단된 CASE", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224056853331" },
  { title: "Case 발견하기 어려운 조기위암", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224041022848" },
  { title: "Case 전형적인 조기위암 병변", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223992769845" },
  { title: "하찮게 보이는 병변도 놓치지 말자 위내시경", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223987066528" },
  { title: "결국 헬리코박터균이 문제다", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223987053118" },
  { title: "외부에서 의뢰된 위암 의심환자 3개월만의 급격한 진행", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224113132096" },
  { title: "H.pylori 감염으로 림프종이 생길수 있다", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224112827821" },
  { title: "Helicobacter 제균치료후 발생한 전암성 병변", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224090058087" },
  { title: "색이 다른 위점막에서 발견된 위암의심병변", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224216504021" },
  { title: "위선종 평범한 융기 병변인줄 알았으나 전암성 병변", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224199811894" },
  { title: "단순 미란의 위병변 조직검사결과 전암성병변 조기위암의 가능성", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224198414049" },
  { title: "위각에서 발견된 궤양 재검에서는 위암 진단", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224173160492" },
  { title: "대장내시경의 육안적인소견과 조직검사는 일치하지않는다", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/224214461399" },
  { title: "조기위암 진단 Early gastric cancer", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223973594853" },
  { title: "변화무쌍한 조기위암", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223897481799" },
  { title: "애매모호한 점막처럼 보이는 조기위암 case", category: "위내시경", href: "https://blog.naver.com/dr_gastroboom/223886521423" },

  // ── 대장내시경 ──
  { title: "40세 남성 건강검진에서 발견된 거대용종", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223976752302" },
  { title: "전암성 병변은 계속 재발한다", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224086510259" },
  { title: "끝까지 들어갈 수 없는 대장 내시경", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224074649187" },
  { title: "거대용종 내시경 Case", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224071267278" },
  { title: "야구공만한 거대용종들 설마 암?", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224060314053" },
  { title: "장정결이 안좋은 대장내시경이 불완전한 이유", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224060275417" },
  { title: "대장내시경 다발성 거대용종", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224053475577" },
  { title: "Colonic diverticulum 대장 게실 미로", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224042306155" },
  { title: "거대 용종 점막 박리술", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224041010632" },
  { title: "작은 대장용종도 무시할수없다", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224216504021" },
  { title: "크기가 큰 대장용종의 조직검사 결과가 다 나쁜건 아닌경우 과형성용종", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224196246243" },
  { title: "대장용종이 크면 안좋고 작으면 좋은 걸까요?", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224194111660" },
  { title: "대장 용종 제거 거대용종", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224191321191" },
  { title: "75세 여성의 다수의 대장 용종 제거", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224173145444" },
  { title: "목이 있는 거대용종 제거는 출혈위험이 높다", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224160348316" },
  { title: "대장용종과 위암의심 케이스", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224150649676" },
  { title: "대장 거대용종 제거", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224140737599" },
  { title: "대장의 거대용종절제술", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224127946121" },
  { title: "얇은 맹장에서 거대용종 절제술 천공될까 두렵다", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/224119735118" },
  { title: "대장내시경 거대 용종들 feat EMR 용종절제술 점막절제술 Clipping", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223973594853" },
  { title: "염증성장질환 2탄 크론 궤양성대장염의 risk factor와 protective factor", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223973537584" },
  { title: "대장내시경을 오랫동안 받지 않았을 때", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223931353144" },
  { title: "염증성 장질환 유병율 원인 증상 진료비지원", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223925645540" },
  { title: "Colonic redundancy 물장 흐물흐물장 이완장", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223900873045" },
  { title: "주름뒤에 숨어있는 대장 용종 2탄", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223900435277" },
  { title: "대장용종은 몇개까지 제거 할 수 있을까?", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223900435277" },
  { title: "주름에 숨어있는 용종 feat 닌자", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223897492313" },
  { title: "작은 polyp 도 맵다", category: "대장내시경", href: "https://blog.naver.com/dr_gastroboom/223886583768" },

  // ── 용종출혈 ──
  { title: "용종절제술후 출혈", category: "용종출혈", href: "https://blog.naver.com/dr_gastroboom/224053949787" },
  { title: "십이지장 궤양 출혈 지혈술", category: "용종출혈", href: "https://blog.naver.com/dr_gastroboom/224013615031" },
  { title: "상행결장에서의 용종제거는 출혈의 위험이 있습니다", category: "용종출혈", href: "https://blog.naver.com/dr_gastroboom/224128964768" },
  { title: "혈변이 있으면 왜 암을 의심해요?", category: "용종출혈", href: "https://blog.naver.com/dr_gastroboom/224128964768" },
  { title: "열이나고 반복되는 복통과 혈뇨 뭘까요?", category: "용종출혈", href: "https://blog.naver.com/dr_gastroboom/224149157107" },
  { title: "생애 첫 검진에서 발견된 위암과 대장용종들", category: "용종출혈", href: "https://blog.naver.com/dr_gastroboom/224142735721" },

  // ── 만성질환기타 ──
  { title: "연속혈당측정기 실시간 혈당기록기로 편하게 혈당관리하세요", category: "만성질환기타", href: "https://blog.naver.com/dr_gastroboom/224220585833" },
  { title: "불로장생의 약 SGLT-2 inhibitor 항암제 유발 심근염", category: "만성질환기타", href: "https://blog.naver.com/dr_gastroboom/224043983950" },
  { title: "HBV 보균자는 간세포암 고위험군", category: "만성질환기타", href: "https://blog.naver.com/dr_gastroboom/224144534642" },
  { title: "염증성 장질환과 유산균제제", category: "만성질환기타", href: "https://blog.naver.com/dr_gastroboom/224053949787" },
];

const PAGE_SIZE = 12;

export default function QnAPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory = activeCategory === "전체" || post.category === activeCategory;
      const matchSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <PageHeader
        title="많이 찾는 Q&A"
        subtitle="김정재 원장이 직접 작성한 의료 정보"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-white text-navy-600 border border-gray-200 hover:bg-navy-50 hover:border-navy-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative mb-10">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="궁금한 내용을 검색하세요"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Results count */}
          <p className="text-base text-gray-500 mb-6">
            총 <span className="font-bold text-navy-900">{filtered.length}</span>개의 글
          </p>

          {/* Cards Grid */}
          {visible.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((post, i) => {
                const style = categoryStyle[post.category];
                const globalIdx = filtered.indexOf(post) + 1;
                return (
                  <a
                    key={i}
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 border-l-4 ${style?.border || "border-l-gray-300"}`}
                  >
                    <div className="p-5">
                      {/* Top row: number + category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-navy-200 text-sm font-bold tracking-wider">
                          #{String(globalIdx).padStart(2, "0")}
                        </span>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${style?.bg || "bg-gray-50"} ${style?.text || "text-gray-500"}`}>
                          {style?.icon}
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-navy-900 font-bold text-sm sm:text-base leading-snug mb-4 line-clamp-3 sm:line-clamp-2 group-hover:text-sky-600 transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Bottom */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-gray-400 text-sm flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          김정재 원장
                        </span>
                        <span className="text-sky-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                          읽기
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-gray-400 text-lg">검색 결과가 없습니다</p>
              <p className="text-gray-300 text-base mt-1">다른 키워드로 검색해보세요</p>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy-900 text-white font-semibold text-sm hover:bg-navy-800 hover:-translate-y-0.5 transition-all duration-300 shadow-md cursor-pointer"
              >
                더보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
