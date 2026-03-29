"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { handleReservation } from "@/utils/reservation";

interface SubMenu {
  label: string;
  href: string;
  disabled?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubMenu[];
}

const navItems: NavItem[] = [
  {
    label: "병원소개",
    href: "#",
    children: [
      { label: "의료진 소개", href: "/doctors" },
      { label: "비급여 안내", href: "/medical-info#non-covered" },
      { label: "진료시간", href: "/about/hours" },
      { label: "오시는 길", href: "/about/location" },
    ],
  },
  {
    label: "건강검진센터",
    href: "#",
    children: [
      { label: "5대암국가검진", href: "/checkup/cancer" },
      { label: "종합검진", href: "/checkup/comprehensive" },
      { label: "채용검진", href: "/checkup/employment" },
      { label: "기타", href: "/checkup/other" },
    ],
  },
  {
    label: "내시경센터",
    href: "#",
    children: [
      { label: "위내시경", href: "/endoscopy/stomach" },
      { label: "대장내시경", href: "/endoscopy/colon" },
      { label: "용종절제술", href: "/endoscopy/polypectomy" },
      { label: "수면내시경", href: "/endoscopy/sedation" },
    ],
  },
  {
    label: "진료과목",
    href: "#",
    children: [
      { label: "소화기센터", href: "/departments/sowhagi" },
      { label: "순환기센터", href: "/departments/soonhwangi" },
      { label: "호흡기·알레르기센터", href: "/departments/hoheupgi" },
      { label: "이비인후과", href: "/departments/ent" },
      { label: "만성질환센터", href: "/chronic/hypertension" },
    ],
  },
  {
    label: "특수클리닉",
    href: "#",
    children: [
      { label: "비만클리닉", href: "/special/obesity" },
      { label: "수액클리닉", href: "/special/iv-therapy" },
      { label: "방문진료 (준비 중)", href: "#", disabled: true },
      { label: "치매클리닉", href: "/special/dementia" },
    ],
  },
  {
    label: "예방접종",
    href: "/vaccination",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on resize + scroll detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMobileExpanded(null);
      }
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 bg-navy-900 ${
        scrolled
          ? "shadow-lg"
          : ""
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-3 md:px-6 flex items-center justify-center lg:justify-between relative h-20 sm:h-36 md:h-48">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/51e89d9bf2e45.png"
            alt="김정재탑내과의원"
            width={640}
            height={200}
            className="!w-auto !h-[60px] sm:!h-[107px] md:!h-[227px]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-0.5"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() =>
                item.children ? setActiveDropdown(idx) : setActiveDropdown(null)
              }
            >
              <Link
                href={item.href}
                onClick={(e) => {
                  if (item.href === "#") e.preventDefault();
                }}
                className={`px-3 xl:px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 whitespace-nowrap inline-block text-white/90 hover:text-white hover:bg-white/10 ${activeDropdown === idx ? "bg-white/10 text-white" : ""}`}
              >
                {item.label}
                {item.children && (
                  <svg
                    className={`inline-block w-3.5 h-3.5 ml-0.5 transition-transform duration-200 ${
                      activeDropdown === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && activeDropdown === idx && (
                <div className="absolute top-full left-0 pt-2 animate-slide-down">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px] overflow-hidden">
                    {item.children.map((sub, si) => (
                      <Link
                        key={si}
                        href={sub.disabled ? "#" : sub.href}
                        onClick={(e) => {
                          if (sub.disabled) e.preventDefault();
                          setActiveDropdown(null);
                        }}
                        className={`block px-5 py-2.5 text-lg transition-all duration-200 ${
                          sub.disabled
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-navy-700 hover:bg-gradient-to-r hover:from-navy-50 hover:to-sky-50 hover:text-navy-900 hover:pl-6"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden absolute right-3 p-3 rounded-lg transition-colors text-white"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMobileExpanded(null);
          }}
          aria-label="메뉴 열기"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-slide-down max-h-[80vh] overflow-y-auto">
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-50">
              {item.children ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-6 py-3.5 text-navy-700 hover:bg-navy-50 font-medium transition-colors"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === idx ? null : idx)
                    }
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        mobileExpanded === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileExpanded === idx && (
                    <div className="bg-navy-50/50 animate-slide-down">
                      {item.children.map((sub, si) => (
                        <Link
                          key={si}
                          href={sub.disabled ? "#" : sub.href}
                          onClick={(e) => {
                            if (sub.disabled) e.preventDefault();
                            else {
                              setMenuOpen(false);
                              setMobileExpanded(null);
                            }
                          }}
                          className={`block pl-10 pr-6 py-3 text-[15px] transition-colors ${
                            sub.disabled
                              ? "text-gray-300 cursor-not-allowed"
                              : "text-navy-600 hover:text-navy-900 hover:bg-navy-100/50"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-6 py-3.5 text-navy-700 hover:bg-navy-50 hover:text-navy-900 font-medium transition-colors"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileExpanded(null);
                  }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <button
            className="block w-full text-left px-6 py-3.5 text-gold-400 font-semibold hover:bg-gold-100 transition-colors cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              handleReservation();
            }}
          >
            전화 예약: 02-6798-8880
          </button>
        </nav>
      )}
    </header>
  );
}
