# **우리가 지켜야할 코드 룰!!**

## **Components**

- Components 폴더 구조 : [ Components ] > [ "기능명"Components ] > UserStyled.jsx- "컴포넌트명".jsx
- import 순서 : 패키지 > 모듈 > hooks > 컴포넌트 > CSS
- components 내부 로직파트 코드 작성 순서 : useState > useRef > dispatch > navigate > useSelector > 추가설정
- 컴포넌트는 화살표함수로 시작
- import 제일 위에 import React…..
- use navigate = nav

## **CSS rule**

- 색상은 globalStyle에 정해진 생상만 사용

```js
:root {
--orange : #000000;
}
```

- CSS 코드 작성 순서

```js
import styled from 'styled-components';
import flex from './flex';
const Component = styled.div`
position : ###;
display : ###;
#{flex({direction: '###'})};
margin : ###;
padding : ###;
width : ###;
height : ###;
// etc...
```

## **Redux**

- 미들웨어 함수명 시작은 \_\_
- toolkit 사용
- axios 사용
- CRUD 순서로 작성
- builder방식 사용

<br>

# **Code convention**

- 폴더명 : camel case + 첫 시작은 소문자!
- 컴포넌트명 : camel case + 첫 시작은 항상 **대문자**로!!
- 함수명: click, change → onClickHandler

<br>

# **우리들의 커밋 룰쓰**

- **초기세팅 : init setting**
- **의미없는 주석 및 console.log 삭제 후 commit**
- **지정된 commit msg 사용**
  - [fix] . message : 예상치 못한 에러, 버그 수정
  - [edit] : 작성된 코드를 수정할 때
  - [add] . message : CSS, 컴포넌트 추가
  - [update] . message : 전반적인 build up
  - [delete] . message : 파일 삭제
  - [move] . message : 경로 이동
  - [merge] . message : 병합 메세지
  - [save] : 현재 작업중이지만 작업진행사항을 저장하고자 중간에 저장할 때

—> 예시 ) [fix] 설명 주저리
