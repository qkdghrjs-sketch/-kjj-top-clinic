"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 text-left min-h-[48px]"
            >
              <span className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-sky-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  Q
                </span>
                <span className="text-navy-900 font-semibold text-sm md:text-base">
                  {item.q}
                </span>
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isOpen ? "200px" : "0",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="px-4 pb-4 pl-12 sm:px-6 sm:pb-5 sm:pl-16">
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
