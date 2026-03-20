"use client";

import { useEffect, useRef } from "react";

export default function KakaoMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove existing scripts if any
    document.querySelectorAll('script[src*="roughmapLoader"]').forEach((s) => s.remove());
    document.querySelectorAll('script[data-roughmap-init]').forEach((s) => s.remove());

    // Load roughmap loader
    const loaderScript = document.createElement("script");
    loaderScript.src = "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
    loaderScript.charset = "UTF-8";
    loaderScript.onload = () => {
      const initScript = document.createElement("script");
      initScript.setAttribute("data-roughmap-init", "true");
      initScript.textContent = `
        new daum.roughmap.Lander({
          "timestamp": "1773906723535",
          "key": "jjppkw4fa54",
          "mapWidth": "360",
          "mapHeight": "640"
        }).render();
      `;
      document.body.appendChild(initScript);
    };
    document.body.appendChild(loaderScript);

    return () => {
      document.querySelectorAll('script[src*="roughmapLoader"]').forEach((s) => s.remove());
      document.querySelectorAll('script[data-roughmap-init]').forEach((s) => s.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="daumRoughmapContainer1773906723535"
      className="root_daum_roughmap root_daum_roughmap_landing"
      style={{ width: "100%", minHeight: "400px" }}
    />
  );
}
