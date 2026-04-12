"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

type PriceItem = { name: string; price: string };
type SubGroup = { title: string; items: PriceItem[] };
type Category = { key: string; label: string; groups: SubGroup[] };

const categories: Category[] = [
  {
    key: "exam",
    label: "검사비용",
    groups: [
      {
        title: "종합검진",
        items: [
          { name: "탑50 건강검진", price: "550,000" },
          { name: "탑40 건강검진", price: "450,000" },
          { name: "탑30 건강검진", price: "300,000" },
          { name: "탑20 건강검진", price: "200,000" },
          { name: "혈액종합검사", price: "100,000" },
        ],
      },
      {
        title: "개인검진",
        items: [
          { name: "기본검진", price: "40,000" },
          { name: "입소용검진 (전염성질환 포함)", price: "30,000" },
          { name: "채용 - 공무원", price: "40,000" },
          { name: "채용 - 일반", price: "30,000" },
        ],
      },
      {
        title: "혈액검사",
        items: [
          { name: "ABO 혈액형", price: "5,000" },
          { name: "HIV 항체", price: "5,000" },
          { name: "HIV 항원/항체 (정밀)", price: "50,000" },
          { name: "NK세포활성도", price: "100,000" },
          { name: "T.SPOT.TB - 잠복결핵", price: "50,000" },
          { name: "마스토 (유방암)", price: "100,000" },
          { name: "매독반응", price: "5,000" },
          { name: "방사선종사자검사", price: "15,000" },
          { name: "베체트 유전자 검사", price: "60,000" },
          { name: "비타민 D 검사", price: "10,000" },
          { name: "수두/풍진/홍역 항체검사 (검사당)", price: "20,000" },
          { name: "수술전검사", price: "60,000" },
          { name: "알러지", price: "100,000" },
          { name: "알츠하이머 위험도", price: "100,000" },
          { name: "암유전자 검사 (5종)", price: "150,000" },
          { name: "암유전자 검사 (11종)", price: "300,000" },
          { name: "여성난소검사 (AMH수치)", price: "60,000" },
          { name: "음식물과민증검사", price: "400,000" },
          { name: "일반질환 유전자 검사 (27종)", price: "300,000" },
          { name: "종양표지자 (검사당)", price: "20,000" },
          { name: "호르몬검사 (검사당)", price: "20,000" },
        ],
      },
      {
        title: "소변검사",
        items: [
          { name: "소변 (요10종)", price: "5,000" },
          {
            name: "마약 간이검사 TBPE (헤로인/카페인/코데인/에페드린/암페타민)",
            price: "20,000",
          },
          { name: "마약 4종 (필로폰/대마/모르핀/코카인)", price: "40,000" },
          { name: "마약 6종 (마약4종 + 암페타민/엑스터시)", price: "60,000" },
          { name: "성매개감염", price: "70,000~80,000" },
          { name: "유기산검사", price: "400,000" },
        ],
      },
      {
        title: "분변검사",
        items: [{ name: "장내미생물검사", price: "150,000" }],
      },
      {
        title: "초음파",
        items: [
          { name: "상복부 (간/췌장/비장/담낭)", price: "40,000" },
          { name: "전문 상복부 (섬유화·지방간 측정 포함)", price: "60,000" },
          { name: "하복부 (신장/방광/부신)", price: "30,000" },
          { name: "전립선 (경복부)", price: "40,000" },
          {
            name: "하복부/전립선 (신장/방광/부신/전립선 경복부)",
            price: "50,000",
          },
          { name: "갑상선", price: "40,000" },
          { name: "경동맥", price: "40,000" },
          { name: "갑상선/경동맥", price: "60,000" },
          { name: "심장", price: "80,000" },
          { name: "전문 심장", price: "100,000" },
        ],
      },
      {
        title: "내시경",
        items: [
          { name: "위 (비수면)", price: "60,000" },
          { name: "위 (수면)", price: "110,000" },
          { name: "대장 (비수면)", price: "80,000" },
          { name: "대장 (수면)", price: "140,000" },
          { name: "위·대장 동시 (비수면)", price: "140,000" },
          { name: "위·대장 동시 (수면)", price: "230,000" },
          { name: "내시경 수면관리료 - 위", price: "50,000" },
          { name: "내시경 수면관리료 - 대장", price: "60,000" },
          { name: "내시경 수면관리료 - 위·대장 동시", price: "90,000" },
          {
            name: "결장경하 종양 수술 - 점막절제술 및 점막하종양절제술",
            price: "250,000",
          },
          { name: "결장경하 종양 수술 - 플립 절제술 (개당)", price: "200,000" },
          { name: "조직검사", price: "50,000" },
          { name: "헬리코박터균", price: "30,000" },
          { name: "장정결제", price: "30,000~40,000" },
        ],
      },
      {
        title: "기타 검사",
        items: [
          { name: "결핵 (흉부사진)", price: "20,000" },
          { name: "결핵 + 마약류 (TBPE)", price: "30,000" },
          { name: "결핵 + 잠복결핵", price: "60,000" },
          { name: "독감 (인플루엔자항원)", price: "25,000" },
          { name: "독감 신속항원 동시 검사", price: "30,000" },
          { name: "국가운전면허용 신체검사", price: "10,000" },
          { name: "보건증", price: "20,000" },
          {
            name: "장티푸스/파라티푸스 혈청응집검사 (혈액)",
            price: "5,000",
          },
          { name: "대변배양 검사", price: "5,077" },
          { name: "잠복결핵 IFN-γ (혈액)", price: "27,000" },
          { name: "STD 12종 (소변)", price: "30,000" },
          { name: "동맥경화도검사", price: "45,000" },
          { name: "연속혈당측정기", price: "120,000" },
          { name: "요소호기 (헬리코박터균)", price: "30,000" },
          { name: "인바디", price: "10,000" },
          { name: "자율신경계이상검사 (심박변이도)", price: "40,000" },
          { name: "코로나 - PCR", price: "80,000" },
          { name: "코로나 - 신속항원", price: "25,000" },
        ],
      },
    ],
  },
  {
    key: "vaccine",
    label: "예방접종",
    groups: [
      {
        title: "예방접종",
        items: [
          { name: "A형간염", price: "70,000" },
          { name: "B형간염", price: "30,000" },
          { name: "대상포진 - 스카이조스터주", price: "130,000" },
          { name: "대상포진 - 싱그릭스주", price: "230,000" },
          { name: "자궁경부암 (가다실9가)", price: "200,000" },
          { name: "파상풍/디프테리아", price: "30,000" },
          { name: "파상풍/디프테리아/백일해", price: "50,000" },
          { name: "폐렴구균 - 프리베나20주", price: "150,000" },
        ],
      },
    ],
  },
  {
    key: "iv",
    label: "수액 및 주사",
    groups: [
      {
        title: "수액 및 주사",
        items: [
          { name: "위너프페리주 (217ml)", price: "80,000" },
          { name: "오마프원리피드주 (100ml)", price: "40,000" },
          { name: "오마프원페리주 (362ml)", price: "90,000" },
          { name: "페라비르주 (60ml)", price: "70,000" },
          { name: "라보솔주", price: "50,000" },
          { name: "닥터라민주", price: "50,000" },
          { name: "뉴트리헥사", price: "50,000" },
          { name: "아르믹스주", price: "30,000" },
          { name: "코로나영양수액", price: "70,000" },
          { name: "독감수액", price: "70,000" },
          { name: "5% 포도당키트 110ml", price: "15,000" },
          { name: "5% 포도당키트 250ml", price: "40,000" },
          { name: "판비콤푸주", price: "10,000" },
          { name: "맥시블루5주", price: "20,000" },
          { name: "알부민주 (SK·녹십자)", price: "130,000" },
          { name: "빈혈주사", price: "40,000" },
          { name: "아모부로펜프리믹스주", price: "30,000" },
          { name: "파라몰주", price: "20,000" },
          { name: "아세트펜프리믹스주", price: "20,000" },
          { name: "하이코민주", price: "10,000" },
          { name: "지씨비타오주", price: "10,000" },
          { name: "메가비타식스주", price: "10,000" },
          { name: "메리트씨주", price: "20,000" },
          { name: "네오미노화겐씨주", price: "20,000" },
          { name: "리포토신주", price: "50,000" },
          { name: "디톡시온주", price: "30,000" },
          { name: "엔에스 110·250키트", price: "10,000~40,000" },
          { name: "히스토블린 (1회)", price: "70,000" },
          { name: "비타민D주사", price: "30,000" },
          { name: "태반주사 (라이넥)", price: "30,000" },
          { name: "면역주사 (이뮨알파원주)", price: "60,000" },
        ],
      },
    ],
  },
  {
    key: "procedure",
    label: "처치료",
    groups: [
      {
        title: "처치료",
        items: [{ name: "FNAB 시술 (마취·재료대)", price: "10,000" }],
      },
    ],
  },
  {
    key: "certificate",
    label: "제증명 및 기타",
    groups: [
      {
        title: "제증명 및 기타",
        items: [
          { name: "비보험 진료비", price: "15,000" },
          { name: "조직 세포 슬라이드", price: "5,000" },
          { name: "CD복사", price: "10,000~30,000" },
          { name: "소견서", price: "10,000" },
          { name: "소견서 (영문)", price: "20,000" },
          { name: "시술확인서", price: "10,000" },
          { name: "시술확인서 (영문)", price: "20,000" },
          { name: "의무기록복사 1장 (5매까지)", price: "1,000" },
          { name: "의무기록복사 1장 (6매 이상)", price: "100" },
          { name: "장애인증명서", price: "1,000" },
          { name: "진단서", price: "20,000" },
          { name: "진단서 (근로능력평가용)", price: "10,000" },
          { name: "진단서 (영문)", price: "30,000" },
          { name: "통원확인서 (질병코드 무)", price: "1,000" },
          { name: "통원확인서 (질병코드 유)", price: "3,000" },
        ],
      },
    ],
  },
];

export default function MedicalInfoPage() {
  const [activeKey, setActiveKey] = useState<string>(categories[0].key);
  const active = categories.find((c) => c.key === activeKey) ?? categories[0];

  return (
    <>
      <PageHeader title="비급여 안내" subtitle="비급여 항목 및 비용 고지입니다." />

      <section id="non-covered" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <span className="text-gold-400 font-semibold text-base uppercase tracking-widest">
              Non-Covered Items
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mt-2 mb-2">
              비급여 항목 안내
            </h2>
            <div className="w-12 h-0.5 bg-gold-400 mb-4"></div>
            <p className="text-gray-500 text-base mb-8">
              아래 비용은 변동될 수 있으며, 정확한 비용은 병원으로 문의해 주시기 바랍니다.
              <span className="block text-sm text-gray-400 mt-1">
                (2026.03.05 기준)
              </span>
            </p>
          </ScrollReveal>

          {/* 카테고리 탭 */}
          <ScrollReveal delay={80}>
            <div
              role="tablist"
              aria-label="비급여 항목 카테고리"
              className="flex flex-wrap gap-2 mb-6"
            >
              {categories.map((cat) => {
                const isActive = cat.key === activeKey;
                return (
                  <button
                    key={cat.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveKey(cat.key)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all border ${
                      isActive
                        ? "bg-navy-800 text-white border-navy-800 shadow"
                        : "bg-white text-navy-700 border-gray-200 hover:border-navy-300 hover:bg-navy-50"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* 카테고리 내용 - 서브그룹별 아코디언 */}
          <ScrollReveal delay={120}>
            <div className="space-y-4">
              {active.groups.map((group, idx) => (
                <GroupAccordion
                  key={`${active.key}-${group.title}`}
                  group={group}
                  defaultOpen={idx === 0}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-sm text-gray-400">
              * 상기 금액은 부가세 포함 금액이며, 환자의 상태 및 시술 범위에 따라 달라질 수 있습니다.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function GroupAccordion({
  group,
  defaultOpen = false,
}: {
  group: SubGroup;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <div className="rounded-2xl shadow-sm border border-gray-100 bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-4 bg-gradient-to-r from-navy-800 to-navy-700 text-white"
      >
        <span className="font-semibold text-base sm:text-lg">{group.title}</span>
        <span className="flex items-center gap-3">
          <span className="text-xs sm:text-sm text-white/70">
            {group.items.length}개 항목
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-navy-800">
                <th className="px-5 sm:px-6 py-3 text-left text-sm font-semibold">
                  항목
                </th>
                <th className="px-5 sm:px-6 py-3 text-right text-sm font-semibold w-44 sm:w-56">
                  비용 (원)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {group.items.map((item, i) => (
                <tr
                  key={item.name}
                  className={`hover:bg-navy-50/60 transition-colors ${
                    i % 2 === 1 ? "bg-gray-50/40" : ""
                  }`}
                >
                  <td className="px-5 sm:px-6 py-3 text-navy-800 text-sm sm:text-base">
                    {item.name}
                  </td>
                  <td className="px-5 sm:px-6 py-3 text-right font-semibold text-navy-700 text-sm sm:text-base whitespace-nowrap">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
