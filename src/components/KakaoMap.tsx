export default function KakaoMap() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "360px", position: "relative" }}>
      <iframe
        src="/kakaomap.html"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, border: "none" }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
