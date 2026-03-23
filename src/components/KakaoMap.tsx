export default function KakaoMap() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "360px", position: "relative" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.5!2d126.8468!3d37.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e00a78c510d%3A0x4e0b1b2c7e8d9f0a!2z7ISc7Jq4IOqwleyEnOq1rCDtmZTqs6DroZwgMTM1!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
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
