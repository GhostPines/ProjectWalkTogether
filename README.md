# 🚶‍🚶‍♀️  ollae

![Group 875](https://user-images.githubusercontent.com/80263801/224346703-e03f635e-9993-4975-9ef2-b13ced76737b.jpg)


프로젝트 기간 : 2023.02.06 ~ 2023.03.13

🔗 [ollae 서비스 배포 링크](https://www.ollae.kr/)
<br/>
👉 [시연영상 보러가기](https://www.youtube.com/watch?v=_ZFK_nYZ7ho)

<br/>
<br/>

## 📢 프로젝트 소개


1인가구 구성원 또는, 사생활에 깊이 연관되지 않는 가벼운 만남으로 관계를 시작하고 싶은 신세대 에게 만남 서비스 플랫폼

* 카테고리를 통해 원하는 주제를 선택하여 산책 할 사람 또는 모임을 찾을 수 있습니다.
* 지도 뷰를 통해 만나는 장소를 쉽게 찾을 수 있고 주변에 산책하는 모임을 볼 수 있습니다.
* 실시간 채팅을 통해 산책 할 사람과 구체적인 만남을 약속할 수 있습니다.

<br/>
<br/>

## 📝 회고 및 관련 기록

[📒 올래 Notion](https://www.notion.so/Project-Walk-Together-Final-354dd91df9b2405f90bd8519fc03f0a3?pvs=4)

[✍ 프로젝트 기획안](https://www.notion.so/eda81292232d4843b5136bfbcf831080?pvs=4)

[🚀 기술적 의사결정](https://www.notion.so/b9dcf5e34d754a50ac9d0d2e39ff259d)

[💬 KPT 회고](https://www.notion.so/Project-Walk-Together-Final-354dd91df9b2405f90bd8519fc03f0a3?pvs=4)


<br/>
<br/>

## 🙆 팀원 소개

|박진양|라형선|김민성|이희경|성민준|손혜주
|------|------|------|------|------|------|
|[Github](https://github.com/Jinyang-Park)|[Github](https://github.com/rhsoks)|[Github](https://github.com/GhostPines)|[Github](https://github.com/Leekee01)|[Github](https://github.com/themrsung)|[Gmail](hjson1024@gmail.com)


<br/>
<br/>

## 💻 기술 스택

<div align="left">
	<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
        <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">
                <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=black">
	<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
                                  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
                                                                  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">	
</div>

![다운로드 (3) 1](https://user-images.githubusercontent.com/80263801/224309868-89fb298e-7d5e-46bd-b21e-22e2a0413485.jpg)

<br/>
<br/>

## 📂 디렉토리 구조

```
src
 ┣ 📂api
 ┃ ┗ 📜postsApi.ts
 ┣ 📂assets
 ┃ ┣ 📂Agreement
 ┃ ┣ 📂CategoryPageIcon
 ┃ ┣ 📂ChattingIcon
 ┃ ┣ 📂constants
 ┃ ┣ 📂DetailPageIcon
 ┃ ┣ 📂Header
 ┃ ┣ 📂Loader
 ┃ ┣ 📂LoginPage
 ┃ ┣ 📂Mainpage
 ┃ ┣ 📂MapPageIcon
 ┃ ┣ 📂messageWindow
 ┃ ┣ 📂MypageIcon
 ┃ ┣ 📂NavigationAssets
 ┃ ┣ 📂PostEditPageIcon
 ┃ ┣ 📂PostPageIcon
 ┣ 📂common
 ┣ 📂components
 ┃ ┣ 📂AuthStateListener
 ┃ ┣ 📂CardSection
 ┃ ┣ 📂CardSkeleton
 ┃ ┣ 📂DropDownCategoryForMapPage
 ┃ ┣ 📂DropdownCategoryForWritePage
 ┃ ┣ 📂DropdownFilterCategory
 ┃ ┣ 📂HeaderAlarm
 ┃ ┣ 📂Loader
 ┃ ┣ 📂Logout
 ┃ ┣ 📂main
 ┃ ┣ 📂MeetDateInitializer
 ┃ ┣ 📂PostModal
 ┃ ┣ 📂RerouteToMyPage
 ┃ ┣ 📂ScrollToTopButton
 ┃ ┗ 📂Tag
 ┣ 📂fonts
 ┣ 📂hooks
 ┃ ┣ 📜useDetectClose.ts
 ┃ ┣ 📜useGeoLocation.ts
 ┃ ┣ 📜useLoginState.ts
 ┃ ┣ 📜useMap.ts
 ┃ ┗ 📜useSearch.ts
 ┣ 📂layout
 ┣ 📂messagewindow
 ┣ 📂pages
 ┃ ┣ 📂Category
 ┃ ┣ 📂ChangePassword
 ┃ ┣ 📂ChatPage
 ┃ ┣ 📂Collection
 ┃ ┣ 📂DetailPage
 ┃ ┣ 📂LoginPage
 ┃ ┣ 📂MainPage
 ┃ ┣ 📂MapPage
 ┃ ┣ 📂MyPage
 ┃ ┣ 📂PostEditPage
 ┃ ┣ 📂PostPage
 ┃ ┗ 📂SignUpPage
 ┣ 📂Recoil
 ┣ 📂routes
 ┃ ┗ 📜router.tsx
 ┣ 📂store
 ┃ ┗ 📜selector.ts
 ┣ 📂styles
 ┣ 📂utils
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

<br/>
<br/>

## 💡 구현 기능

#### 📍로그인/ 회원가입 
* 소셜 로그인 / 구글, 페이스북
* 회원가입 시 약관 동의 
* 회원가입 시 이메일 인증 후 로그인
* 유효성 검사

#### 📍헤더
* 비로그인 시 글쓰기, 채팅 선택 시 로그인 페이지로 유도
* 로그인 시 글쓰기, 채팅 활성

#### 📍메인
* 최신 글, 인기글, 매칭 완료 글
* 카테고리 (주제별 리스트로 이동)
* 좋아요 기능

#### 📍카테고리

* 카테고리 및 달력 선택 후 해당 게시글 확인 가능
* 최신순, 좋아요 순, 조회순 게시글 기능

#### 📍게시글 작성

* 주제별 카테고리 선택
* 썸네일, 배너 이미지 선택 
* 제목, 내용 및 해시태그 작성 
* 만나는 장소 선택, 날짜, 시간 선택 
* 유효성 검사

### 📍지도 뷰 

* 사용자 현재 위치 기준으로 게시글 확인 가능
* 지도 마커 선택 시, 해당 게시글의 상세 내용 확인 및 클릭 시 해당 게시글로 이동
* 장소 검색 기능
* 최신순, 좋아요 순, 조회순 게시글 기능
* 카테고리 및 달력 선택 후 해당 게시글 확인 가능

#### 📍게시글 상세 

* 댓글 기능
* 좋아요 기능
* 작성자일 시 게시글 삭제, 수정, 산책 완료 기능 
* 지원자일 시 함께 걸어요 버튼 선택 시 채팅 페이지로 이동

#### 📍채팅

* 게시글 작성자와 채팅 기능
* 상대방 채팅 리스트에 알람(초록불)과 최신 메시지 보이는 기능

#### 📍마이페이지

* 닉네임, 자기소개 작성 기능
* 썸네일, 배너 선택 및 변경 기능
* 내가 쓴 글, 좋아요 목록 확인
* 회원 탈퇴, 비밀번호 변경 기능


#### 📍공개 프로필

* 유저 배너와 썸네일 확인
* 유저가 쓴 글, 좋아요 확인

#### 📍알림

* 첫 채팅이 이루어질 때 알림 메세지 송신
* 알림 선택 시, 해당 채팅방으로 이동

<br/>
<br/>

## 💡 주요 기능

#### 🔥지도 
* 사용자 현재 위치 기준으로 게시글 확인 가능 및 장소 검색 가능 
<img src="https://user-images.githubusercontent.com/80263801/224353978-f90bf196-5b7d-4738-9a87-ec9259bf66df.gif" width="800" height="700">

#### 🔥채팅
* 게시글에 ‘함께 걸을래요’ 버튼 선택 시, 채팅방으로 이동
* 첫 채팅이 이루어질 때 알림 메세지 송신 및 알림 선택 시, 해당 채팅방으로 이동
<div>
<img src="https://user-images.githubusercontent.com/80263801/224359801-5729bfe5-c4d8-459d-8147-a1564e2ad377.gif" width="500" height="400">
<img src="https://user-images.githubusercontent.com/80263801/224360048-3be05765-6bdf-4096-9238-08fa3279e614.gif" width="500" height="400">
	</div>
	
#### 🔥카테고리
* 카테고리와 날짜 선택 시, 해당 게시물 확인 가능 (최신순, 좋아요 순, 조회순)
<img src="https://user-images.githubusercontent.com/80263801/224362429-8c6c4765-36a7-44c0-90a5-10bb66583c16.gif" width="800" height="700">

