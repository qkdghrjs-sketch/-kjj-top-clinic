export function handleReservation() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = "tel:02-6798-8880";
  } else {
    window.open("https://naver.me/5g4zutmA", "_blank");
  }
}
