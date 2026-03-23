export default function KakaoMap() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "360px", position: "relative" }}>
      <iframe
        src="https://maps.google.com/maps?q=서울+강서구+화곡로+135+상원빌딩&t=m&z=17&output=embed&iwloc=B&hl=ko"
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
