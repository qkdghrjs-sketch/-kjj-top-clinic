"use client";

import { useEffect, useRef } from "react";

export default function KakaoMap() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current || !wrapperRef.current) return;
    rendered.current = true;

    const wrapper = wrapperRef.current;
    const containerWidth = wrapper.clientWidth || 640;
    const containerHeight = wrapper.clientHeight || 400;

    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.border = "none";
    iframe.srcdoc = `
<!DOCTYPE html>
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
  #daumRoughmapContainer1773981124729 { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
</style>
</head>
<body>
<div id="daumRoughmapContainer1773981124729" class="root_daum_roughmap root_daum_roughmap_landing"></div>
<script charset="UTF-8" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"><\/script>
<script charset="UTF-8">
  new daum.roughmap.Lander({
    "timestamp" : "1773981124729",
    "key" : "jnpn8etexgw",
    "mapWidth" : "${containerWidth}",
    "mapHeight" : "${containerHeight}"
  }).render();
<\/script>
</body>
</html>`;

    wrapper.appendChild(iframe);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ width: "100%", height: "100%", minHeight: "360px", position: "relative" }}
    />
  );
}
