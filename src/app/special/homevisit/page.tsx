"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function HomeVisitPage() {
  return (
    <>
      <PageHeader
        title="방문진료"
        subtitle="거동이 불편한 환자를 위한 가정방문 진료 서비스"
      />
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="bg-navy-50 rounded-2xl p-12 text-center max-w-lg w-full">
                {/* Clock / Construction Icon */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <svg
                    className="w-10 h-10 text-navy-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  서비스 준비 중입니다
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  거동이 불편하신 환자분들을 위한 가정방문 진료 서비스를
                  준비하고 있습니다. 보다 나은 의료 서비스를 제공하기 위해
                  체계적으로 준비 중이며, 빠른 시일 내에 서비스를 개시할
                  예정입니다.
                </p>
                <p className="text-gray-500 text-sm mb-8">
                  방문진료 서비스에 대한 문의사항이 있으시면 아래 연락처로
                  편하게 연락해 주세요.
                </p>

                <div className="bg-white rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">문의 전화</p>
                  <p className="text-sky-500 text-xl font-bold">
                    ☎ 02-6798-8880
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    평일 09:00 ~ 18:00 | 토요일 09:00 ~ 13:00
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
