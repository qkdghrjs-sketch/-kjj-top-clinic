"use client";

import { useEffect, useRef } from "react";

export default function KakaoMap() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (wrapper.querySelector("iframe")) return;

    const containerWidth = wrapper.clientWidth || 640;
    const containerHeight = Math.max(wrapper.clientHeight, 360);

    const iframe = document.createElement("iframe");
    iframe.style.cssText = "width:100%;height:100%;position:absolute;top:0;left:0;border:none;";
    iframe.srcdoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body, html { width: 100%; height: 100%; overflow: hidden; }
  .root_daum_roughmap { width: 100% !important; height: 100% !important; }
  .root_daum_roughmap .wrap_map { width: 100% !important; height: 100% !important; }
  .root_daum_roughmap .wrap_map img { max-width: none !important; }
  .root_daum_roughmap iframe { width: 100% !important; height: 100% !important; }
  .root_daum_roughmap .wrap_controllers { display: none !important; }
  #daumRoughmapContainer1774243833905 { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
</style>
</head>
<body>
<div id="daumRoughmapContainer1774243833905" class="root_daum_roughmap root_daum_roughmap_landing"></div>
<script charset="UTF-8" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"><\/script>
<script charset="UTF-8">
  new daum.roughmap.Lander({
    "timestamp" : "1774243833905",
    "key" : "jtgajuersbb",
    "mapWidth" : "${containerWidth}",
    "mapHeight" : "${containerHeight}"
  }).render();
<\/script>
</body>
</html>`;

    wrapper.appendChild(iframe);

    return () => {
      const existingIframe = wrapper.querySelector("iframe");
      if (existingIframe) existingIframe.remove();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ width: "100%", height: "100%", minHeight: "360px", position: "relative" }}
    />
  );
}
