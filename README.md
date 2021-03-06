# 🍅 Fresh Tomatoes

## 요구사항

### 필수 요구사항

- [x] 검색어를 입력해 영화를 검색할 수 있어야 합니다.
- [x] 검색된 결과(영화 목록)을 출력해야 합니다.
- [x] 프론트엔드 프레임워크 없이 바닐라 자바스크립트만으로 개발해야 합니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### 선택 요구사항

- [ ] Webpack 프로젝트로 구성해보세요.
- [ ] 클라이언트에서 API Key가 노출되지 않도록 만들어보세요.
- [x] 무한 스크롤을 위한 'Intersection Observer'를 활용해보세요.
- [ ] 최초 API 요청(Request)에 대한 로딩 애니메이션을 추가해보세요.
- [x] SCSS, Bootstrap 등을 구성해 프로젝트를 최대한 예쁘게(?) 만들어보세요.
- [ ] 영화 포스터 주소에 포함된 `SX300`를 `SX700`과 같이 더 큰 숫자로 수정해 요청하세요.
- [ ] 실시간으로 이미지의 크기를 다르게 요청하는 것이 어떤 원리로 가능한지 조사해보세요.
- [ ] 요청 주소에 HTTP가 아닌 HTTPS 프로토콜을 사용해야 하는 이유를 조사해보세요.

## 사이트 링크

### [Fresh Tomatoes 웹사이트 방문하기 ✨](https://freshtomatoes.netlify.app/)

### 메인 페이지
![1](https://user-images.githubusercontent.com/83247825/169261007-dfcdaa17-cdc5-4245-a6da-2253ef619a15.png)

### 영화 검색 페이지
![2](https://user-images.githubusercontent.com/83247825/169261018-35826ae0-5120-4211-b06c-fd0692353d9b.png)

### 영화 상세 페이지
![3](https://user-images.githubusercontent.com/83247825/169261033-964429b1-1d8e-493a-8336-0026f1a9988d.png)

### 더이상 로딩시킬 영화가 없을때
![4](https://user-images.githubusercontent.com/83247825/169261038-2a0d7918-ae7b-4bef-bda1-d8c1c3003a73.png)

### 존재하지 않는 영화를 검색했을때
![5](https://user-images.githubusercontent.com/83247825/169261053-fe5bd00d-bedc-47f2-8e6d-77c2e0f9517d.png)

### input에 값을 입력하지 않았을때
![5](https://user-images.githubusercontent.com/83247825/169261049-839c6401-c376-43d9-9fb8-3315f390e3ae.png)

## 질문

**main.js 파일에서 126, 147, 236 줄에서 질문 있습니다**

147번째줄 코드

```js
tomatoImg.src = '../img/frown-tomato.png';
```

사용자가 input에 아무것도 입력하지 않았을때 또는 검색한 영화정보가 나타나지 않았을 경우에 새로운 이미지를 삽입해주는 코드입니다. 위에 있는 코드가 작동하지 않아 이미지를 깃허브에 올려주고 해당 링크를 사용해주었습니다. 위에 있는 코드는 왜 작동이 되지 않는건가요? 확인해봤을때는 이미지의 src가 변환되었지만 해당 이미지가 문서에 출력되지는 않았습니다. 경로문제일까 싶어서 <code>'./img/frown-tomato.png'</code> <code>'../img/frown-tomato.png'</code> <code>'img/frown-tomato.png'</code> 이런식으로 경로를 바꿔주면서 테스트해보았지만 작동이 되지 않았습니다. 혹시 문제점을 아신다면 조언해주시면 감사하겠습니다!

## 해야할일

- [ ] environment variable을 사용해서 API Key 숨기는 기능 추가하기
- [ ] SNS API 사용해 영화 공유하기 기능 추가하기
- [ ] input에 영어 이외의 다른 언어 입력 방지시키는 기능 추가하기
- [ ] Sass, js 파일 리팩토링하기
- [ ] utils.scss 만들어준 후 Scss에서 만든 variable 따로 관리해주기
- [ ] meta 태그 추가해서 SNS에 공유시 나오는 이미지, 제목, 설명글 커스터마이즈해주기
- [ ] media query 적용해 반응형으로 만들어주기
- [ ] nav 요소를 항상 위에 고정시켜주기
- [ ] 영화 이미지를 img의 src가 아닌 background로 바꿔줘 이미지의 비율을 유지시킨채 모두 같은 높이와 너비값을 가지게 하기
- [ ] 에러 핸들링 if문이 아닌 try catch문으로 바꿔주기
- [ ] scroll to top 기능 구현하기
- [ ] 000개의 영화정보를 찾았습니다 문구 추가해주기
- [ ] 영화 상세페이지에 별점 추가해주기

## 느낀점
과제는 미리 하자...