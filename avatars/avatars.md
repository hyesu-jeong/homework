# 아바타 과제 수행 설명

---

## 마크업 구조 및 레이아웃 설계

### 마크업 구조

> - main
>   - profile-wrapper
>     - profile
>       - state
>       - img

### 콘텐츠 가운데 정렬

> main {
> position: absolute;
> top: 50%;
> left: 50%;
> transform: translate(-50%, -50%);
> }

### 스타일이 다르게 적용되야 하는 경우 class 분기

> - 프로필 사진: women/men (그룹핑 배치 변경)
> - 프로필 상태: online/offline (상태별 색상 변경)

### 프로필 온/오프라인 상태 태그 이미지 위에 겹치게 적용:

> position: absolute;
> right: 0px;
> bottom: 0px;

---

## 그리드

### float

> - 아이템 요소인 'profile'에 float: left;를 적용하고 부모요소인 'profile-wrapper'에 display: flow-root;를 적용하여 높이값이 인식되도록 했습니다.
> - first-child, last-child 적용

    - 'profile-wrapper'에 margin-bottom: 20px을 공통 적용하고, 'last-child'에 margin-bottom: 0;을 적용해 가장 마지막 그룹 하단에는 여백이 없도록 했습니다.
    - 'profile'에 margin-left: 20px;을 공통 적용하고, 'first-child'에 margin-left:0;을 적용하여 가장 앞에 있는 아이템 요소는 왼쪽 여백이 없도록 했습니다.

> - 'women'묶음에 float:left; 'men'묶음에 float: right;를 적용하여 여자 프로필 그룹이 상단에, 남자 프로필 그룹이 하단에 위치하도록 했습니다.

### flex

> - @supports (display: flex)로 플렉스를 지원하는 환경에서 스타일이 다르게 적용될 수 있도록 했습니다.
> - 'profile-wrapper'의 부모요소인 'main'은 flex-direction: colum; / 'profile'의 부모요소인 'profile-wrapper'는 flex-flow: row nowrap;으로 각 콘텐츠 배치에 맞게 정렬했습니다.
> - float에서 적용했던 margin값을 0으로 적용하여 값을 삭제하고, gap을 사용하여 아이템 사이 여백을 적용했습니다.
> - order를 활용하여 'men'묶음을 상단에, 'women'묶음을 하단으로 배치했습니다.
