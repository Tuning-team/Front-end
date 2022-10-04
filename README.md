![logo](https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Ff43a48d8-ad3a-4f3f-8e61-9cc772bf7736%252Fproject_cover_image.png%3Ftable%3Dblock%26id%3D154a5009-0fe5-4651-9c80-d130f5f775b7%26spaceId%3D25baf198-14f4-4c01-b098-e9973b36b6ee%26width%3D2000%26userId%3D%26cache%3Dv2)

# 유투브를 내맘대로 <Tuning!>

### 👉 [튜닝 사용해보기](https://www.tube-tuning.com/)

### 👉 [노션링크](https://www.notion.so/bohyeonkim/154a50090fe546519c80d130f5f775b7)

### 👉 소개영상 (준비중)

<br>

---

> ## 프로젝트 소개

  <br>
- ### 📆 프로젝트 기간

`2022.8.29 ~ 2022.10.07(6주)`

- ### 📢 프로젝트 개요

  내가 좋아하는 유투브 영상들로 나만의 컬렉션을 만들고 사람들과 공유하는 커뮤니티 웹앱

      - 보던 영상은 이제 질리고 새로운 영상이 보고싶을때가 있지 않으신가요?

      - 친구들한테 유투브 영상을  추천해달라고 한적 있지 않으신가요??

      - 또 내가 좋아하는 유투버를 친구들과 공유하면서 이야기를 나눈적 있지  않으신가요??

        이 세 개 중에 하나라도 공감하신 다면 지금 당장 tuning 하세요!
        나만의 영상컬렉션을 만들어 사람들과 공유하고, 다른 사람들의 컬렉션을 통해 재미있는 영상을 추천받으면
        유투브 더욱 풍요롭게 즐길 수 있을거 같다는 니즈에 의해 기획하게 되었습니다.

* ### 📲 서비스 주요 기능

    <details>
    <summary>페이지 구성 및 디자인</summary>
    <div markdown="1">

  ![페이지 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d53fa4d0-763d-49dd-bd0d-cdeae4f6cdf9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T115458Z&X-Amz-Expires=86400&X-Amz-Signature=f7d2f4776e661463c372322576fa0ea659ed911375d4c09dde2b82de76715d96&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

    </div>
    </details>
    <br>

        - 구글로그인: 유투브 계정과의 연동을 위해 구글 로그인만을 사용합니다.

        - 메인페이지: 서서비스에서 추천하는 다양한 튜닝들을 모아서 보여줍니다. 인기있는 튜닝, 검색창, 관심있는 카테고리, 바로 지금 추천하는 튜닝으로 이루어져 있습니다.

        - 검색페이지 : 유저들이 만든 튜닝들을 검색할 수 있고, 인기검색어를 통해 다양한 검색어를 접할 수 있습니다.

        - 튜닝 생성페이지 : 유투브 영상들을 검색하여 내가 소개하고 싶은 튜닝을 (컬렉션을) 만들 수 있습니다. 튜닝에 넣을 영상을 검색하여 추가할 수 있습니다. 영상검색은 유투브에서 실제 검색되는 영상의 리스트와 동일합니다.

        - 마이페이지 : 로그인 한 사용자를 중심으로 모아둔 다양한 성격의 튜닝들을 보여줍니다.<likes, comments, saves>를 통해  내 튜닝의 인기척도를 알 수 있으며, 내가 만든 튜닝, 좋아요한 튜닝, 담은 튜닝들을 모아볼 수 있습니다.

        - 튜닝 상세보기페이지 : 컬렉션 각각의 정보를 열람하고, 영상을 플레이해볼 수 있습니다. 유투브영상을 플레이할 뿐만 아니라, 영상의 리스트를 확인, 수정하고, 댓글을 달 수 있습니다. 컬렉션이 맘에든다면 카카오톡 공유하기 기능을 통해 지인들에게 소개할 수도 있습니다.

<br>

---

> ## 프로젝트 아키텍처

 <br>
 
![architecture](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db1c34b9-3670-472f-89c4-80b65acd4874)

<br>     
 
----
> ## tools
<br>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![PWA](https://img.shields.io/badge/-PWA-%23593d88?style=for-the-badge&logo=PWA&logoColor=white)
![github](https://img.shields.io/badge/-GitHubActions-%2088FF?style=for-the-badge&logo=GitHubActions&logoColor=white)
![github](https://img.shields.io/badge/-Axios-%?style=for-the-badge&logo=Axios&logoColor=white)

<br>

<!-- --- -->

<!-- > ## 트러블슈팅

추가예정....... -->

<br>

---

> ## 팀원소개

<br>

|                                                                                                                                                                                                                                                                                                                                                                        | 이름   | 깃헙 주소                          | 포지션 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------- | ------ |
| <image src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F488b73fc-bb86-4a13-a51c-084a1e251eae%2FUntitled.png?table=block&id=e56653ca-f3df-4069-868d-06d6a9147d76&spaceId=25baf198-14f4-4c01-b098-e9973b36b6ee&width=2000&userId=119a1556-1a9b-48c3-ac40-92daf6d156cf&cache=v2"  width="100" height="100"></image> | 전민지 | https://github.com/mingdolacucudas | FE     |
| <image src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd1faaf66-ac2c-4317-8a5d-e93436246cd3%2FUntitled.png?table=block&id=642a009e-a26b-4f1d-8c5e-1412981b1533&spaceId=25baf198-14f4-4c01-b098-e9973b36b6ee&width=2000&userId=119a1556-1a9b-48c3-ac40-92daf6d156cf&cache=v2"  width="100" height="100"></image> | 최효선 | https://github.com/Dopest-Hyo      | FE     |
| <image src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2b2dee9d-0e7e-4fb9-b432-6315e4e5f5ef%2FUntitled.png?table=block&id=ac5f2cb6-aa6c-46e3-b885-5627e25a35ad&spaceId=25baf198-14f4-4c01-b098-e9973b36b6ee&width=2000&userId=119a1556-1a9b-48c3-ac40-92daf6d156cf&cache=v2"  width="100" height="100"></image> | 형진하 | https://github.com/jhhyung         | FE     |

|
