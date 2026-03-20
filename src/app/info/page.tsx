"use client";

import PageHeader from "@/components/PageHeader";
import LocationSection from "@/components/LocationSection";

export default function InfoPage() {
  return (
    <>
      <PageHeader
        title="진료시간 및 오시는 길"
        subtitle="김정재탑내과의원 방문 안내"
      />
      <LocationSection forceShow />
    </>
  );
}
