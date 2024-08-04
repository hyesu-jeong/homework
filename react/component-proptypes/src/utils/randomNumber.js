export function randomNumber(min = 0, max = 10) {
  if (min > max) throw new Error("max 보다 min 값이 큽니다.");
  return Math.round(Math.random() * (max - min) + min);
}

export function isTrueOrFalse() {
  return Math.random() > 0.5;
}

// 이미지 타입 배열
const IMAGE_TYPES = [
  "partly-cloudy",
  "sunny",
  "rainy",
  "lightning",
  "fine-dust",
];

// 랜덤 이미지 타입을 생성하는 함수
export const getRandomImageType = () => {
  const randomIndex = Math.floor(Math.random() * IMAGE_TYPES.length);
  return IMAGE_TYPES[randomIndex];
};
