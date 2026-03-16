"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function DementiaPage() {
  return (
    <>
      <PageHeader
        title="치매클리닉"
        subtitle="조기 발견과 체계적 관리로 치매를 예방합니다"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 치매 개요 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                치매, 조기 발견이 중요합니다
              </h2>
              <p className="text-gray-600 leading-relaxed">
                치매는 기억력, 사고력, 판단력 등 인지 기능이 점진적으로
                저하되어 일상생활에 지장을 초래하는 질환입니다. 단순한 노화에
                의한 건망증과 달리, 치매는 뇌의 구조적·기능적 변화로 인해
                발생하며 조기에 발견하여 적절한 치료와 관리를 시작하면 진행
                속도를 효과적으로 늦출 수 있습니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 치매 유형 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                치매의 주요 유형
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    알츠하이머병
                  </h3>
                  <p className="text-sky-500 text-sm font-medium mb-4">
                    전체 치매의 60~70%
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    뇌에 베타 아밀로이드 단백질과 타우 단백질이 비정상적으로
                    축적되어 뇌세포가 점차 손상되는 퇴행성 질환입니다.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "최근 기억력 저하가 가장 먼저 나타남",
                      "시간, 장소에 대한 지남력 장애",
                      "언어 능력 저하 (단어가 생각나지 않음)",
                      "서서히 진행되며 수년에 걸쳐 악화",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-sky-500 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    혈관성 치매
                  </h3>
                  <p className="text-sky-500 text-sm font-medium mb-4">
                    전체 치매의 약 20~30%
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    뇌혈관 질환(뇌졸중, 뇌경색 등)으로 인해 뇌 조직이
                    손상되어 발생하는 치매입니다. 고혈압, 당뇨, 고지혈증 등
                    혈관 위험 인자 관리가 중요합니다.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "갑자기 또는 계단식으로 증상 악화",
                      "실행 기능(계획, 판단) 저하가 두드러짐",
                      "보행 장애, 배뇨 장애 동반 가능",
                      "혈관 위험 인자 관리로 예방 가능",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-sky-500 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 초기 경고 징후 */}
          <ScrollReveal delay={200}>
            <div className="bg-navy-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                치매 초기 경고 징후
              </h2>
              <p className="text-gray-600 mb-6">
                다음 증상이 2가지 이상 해당되면 전문의 상담을 권장합니다.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    sign: "기억력 저하",
                    detail:
                      "최근 대화 내용이나 약속을 자주 잊고, 같은 질문을 반복합니다.",
                  },
                  {
                    sign: "익숙한 일 수행 어려움",
                    detail:
                      "평소 잘 하던 요리, 가전제품 사용 등이 어려워집니다.",
                  },
                  {
                    sign: "시간·장소 혼동",
                    detail:
                      "날짜, 요일, 계절을 혼동하거나 익숙한 장소에서 길을 잃습니다.",
                  },
                  {
                    sign: "판단력 저하",
                    detail:
                      "날씨에 맞지 않는 옷을 입거나, 금전 관리에 실수가 잦아집니다.",
                  },
                  {
                    sign: "언어 장애",
                    detail:
                      "적절한 단어를 찾지 못하거나, 대화를 따라가기 어려워합니다.",
                  },
                  {
                    sign: "성격·행동 변화",
                    detail:
                      "의욕 저하, 우울감, 의심이 많아지거나 사회활동을 꺼립니다.",
                  },
                  {
                    sign: "물건 위치 기억 못함",
                    detail:
                      "물건을 엉뚱한 곳에 두고 찾지 못하며, 도둑맞았다고 의심합니다.",
                  },
                  {
                    sign: "추상적 사고 어려움",
                    detail:
                      "숫자 개념, 금전 계산 등 추상적 사고가 어려워집니다.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5"
                  >
                    <p className="font-semibold text-navy-900">{item.sign}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 진단 검사 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                치매 진단 검사
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                정확한 진단을 위해 다양한 검사를 체계적으로 시행합니다.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "인지기능 선별검사 (MMSE / MoCA)",
                    desc: "기억력, 주의력, 언어 능력, 시공간 능력 등을 종합적으로 평가하는 표준화된 인지기능 검사입니다. 약 15~30분 소요됩니다.",
                  },
                  {
                    title: "정밀 신경심리검사 (SNSB)",
                    desc: "주의집중력, 언어, 시공간, 기억력, 전두엽 기능 등 세부 인지 영역을 정밀하게 평가합니다. 약 1~2시간 소요됩니다.",
                  },
                  {
                    title: "뇌 영상검사 (MRI / CT)",
                    desc: "뇌의 구조적 변화(뇌 위축, 뇌경색, 뇌출혈 등)를 확인합니다. 알츠하이머병에서는 해마 위축이 특징적으로 나타납니다.",
                  },
                  {
                    title: "혈액검사",
                    desc: "갑상선 기능, 비타민B12, 엽산, 간·신장 기능 등을 확인하여 치료 가능한 치매 원인을 감별합니다.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 border border-gray-200 rounded-xl p-5"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 치료 및 관리 */}
          <ScrollReveal delay={400}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                치료 및 관리
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "약물 치료",
                    desc: "콜린에스테라아제 억제제(도네페질, 리바스티그민 등)를 통해 인지 기능 저하 속도를 늦춥니다. 증상에 따라 메만틴을 병용할 수 있습니다.",
                  },
                  {
                    title: "인지 재활 프로그램",
                    desc: "기억력 훈련, 주의력 훈련, 일상생활 동작 훈련 등을 통해 남아 있는 인지 기능을 최대한 유지하고 향상시킵니다.",
                  },
                  {
                    title: "혈관 위험 인자 관리",
                    desc: "고혈압, 당뇨, 고지혈증 등을 적극적으로 관리하여 혈관성 치매의 진행을 예방하고 뇌 건강을 보호합니다.",
                  },
                  {
                    title: "생활습관 개선",
                    desc: "규칙적인 운동, 사회적 교류, 취미 활동, 균형 잡힌 식사 등 뇌 건강에 도움이 되는 생활습관을 안내합니다.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-navy-50 rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-bold text-navy-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 보호자 안내 */}
          <ScrollReveal delay={500}>
            <div className="bg-navy-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                보호자를 위한 안내
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                치매 환자의 돌봄은 보호자에게도 큰 부담이 됩니다.
                김정재탑내과에서는 환자뿐 아니라 보호자의 건강과 심리적 안정도
                함께 돌봅니다.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "치매 환자 대응법 교육",
                    desc: "환자와의 효과적인 의사소통 방법, 문제 행동 대처법을 안내합니다.",
                  },
                  {
                    title: "돌봄 스트레스 관리",
                    desc: "보호자 번아웃 예방을 위한 심리 상담 및 자기 관리 방법을 안내합니다.",
                  },
                  {
                    title: "사회적 지원 안내",
                    desc: "장기요양보험, 치매안심센터, 주간보호센터 등 이용 가능한 사회적 자원을 안내합니다.",
                  },
                  {
                    title: "안전 관리 가이드",
                    desc: "배회 방지, 낙상 예방, 화재 안전 등 가정 내 안전 관리 요령을 안내합니다.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5">
                    <p className="font-semibold text-navy-900">{item.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 상담 안내 */}
          <ScrollReveal delay={600}>
            <div className="text-center bg-navy-900 text-white rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-3">
                치매클리닉 상담 예약
              </h2>
              <p className="text-navy-300 mb-6">
                치매는 조기 발견과 꾸준한 관리가 핵심입니다. 인지기능이
                걱정되시면 언제든 상담하세요.
              </p>
              <p className="text-sky-400 text-2xl font-bold">
                ☎ 02-6798-8880
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
