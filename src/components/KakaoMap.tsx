export default function KakaoMap() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "360px", position: "relative" }}>
      <iframe
        src="https://www.google.com/maps?q=김정재탑내과의원+서울+강서구+화곡로+135&output=embed&hl=ko"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
