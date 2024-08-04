# 컴포넌트 속성 검사 및 테스트

리액트로 구현한 아토믹 컴포넌트를 prop-types를 사용하여 속성 검사 진행

### 환경 구성

지난 과제에서 CRA 도구를 사용했었는데 이번엔 Vite 사용하여 환경 구성함

### 컴포넌트 타입 지정

![component](https://github.com/user-attachments/assets/6c78bdce-b281-48dd-9ea2-47d2209cfba5)

##### 타이틀, 에피소드, 썸네일 이미지

```javascript
import { string, number, exact } from "prop-types";

export const SlideItemType = exact({
  title: string,
  episode: number,
  photo: string,
});
```

##### 날씨 아이콘

이미지 타입에 따라 렌더링 여부 결정

```javascript
const IMAGE_TYPES = [
  "partly-cloudy",
  "sunny",
  "rainy",
  "lightning",
  "fine-dust",
];

let imagePath = "";
let weatherMessage = "";

switch (imageType.toLowerCase()) {
  default:
  case "partly-cloudy":
    imagePath = partlyCloudyImagePath;
    weatherMessage = "한때 흐림";
    break;
  case "sunny":
    imagePath = sunnyImagePath;
    weatherMessage = "맑음";
    break;
  case "rainy":
    imagePath = rainyImagePath;
    weatherMessage = "비";
    break;
  case "lightning":
    imagePath = lightningImagePath;
    weatherMessage = "뇌우";
    break;
  case "fine-dust":
    imagePath = fineDustImagePath;
    weatherMessage = "미세먼지";
    break;
}
```

### 컴포넌트 속성 검사

```javascript
SlideItem.propTypes = {
  slideItem: SlideItemType.isRequired,
  imageType: PropTypes.oneOf(IMAGE_TYPES),
};
```

### 랜덤 함수를 사용하여 날씨 아이콘 렌더링

```javascript
export const getRandomImageType = () => {
  const randomIndex = Math.floor(Math.random() * IMAGE_TYPES.length);
  return IMAGE_TYPES[randomIndex];
};
```

### 속성 검사 테스트

'number'타입에 'string'을 적용했을 때 나오는 경고 메시지 확인
<img width="620" alt="test" src="https://github.com/user-attachments/assets/a9334339-c30d-429e-90e6-e323df66dbe7">
