export default function GoogleMap() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "360px", position: "relative" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.4!2d126.8490!3d37.5503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e4b3f5c2a1d%3A0x8e5f3a2c1b4d6e8f!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDtlZzroZzroZwgMTM1!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          border: "none",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
