# 마크업 구조

!(https://raw.githubusercontent.com/hyesu-jeong/homework/main/naver/markuplayout.jpg)

## 대체 이미지 관련

### [html] img태그 대체 이미지

```html
<img
  src="이미지 경로"
  alt="대체 텍스트"
  onerror="this.onerror=null; this.src='대체 이미지 경로'"
/>
```

[this.onerror=null을 하는 이유?](https://velog.io/@cnsrn1874/%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A1%9C%EB%94%A9-%EC%97%90%EB%9F%AC%EC%97%90-%EB%8C%80%EB%B9%84%ED%95%98%EB%8A%94-%EB%8C%80%EC%B2%B4-%EC%9D%B4%EB%AF%B8%EC%A7%80)

### [CSS] background 대체 이미지

```css
background: url("이미지 경로"), url("대체 이미지 경로");
```

## 접근성 관련

- 'sr-only' 적용으로 <legend> 제목 스타일 숨김처리
- IP 보안 `ON`, `OFF` 체크박스에 키보드 탭으로 접근 시 상태에 따라 텍스트 가로 길이가 달라져서 아래와 같이 적용함

```css
width: 100%;
width: -moz-available; /* WebKit-based browsers will ignore this. */
width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
width: fill-available;
```

[참고자료](https://stackoverflow.com/questions/68270468/what-is-the-usage-of-webkit-fill-available)
[Can I use 'fill-available'](https://caniuse.com/?search=fill-available)
