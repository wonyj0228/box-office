# 🎞BOX OFFICE
-------------
대한민국 실시간 TOP 10 영화 순위를 보여주는 웹페이지 입니다. <br>
TOP 10 영화의 세부정보 및 평점, 줄거리, 등장인물에 대한 정보를 볼 수 있습니다. <br>
좋아하는 배우를 찜하고, 찜한 배우의 필모그래피를 조회할 수 있습니다.

https://box-office-seven-beta.vercel.app/ <-- 프로젝트 링크!


### 🖥️ 프로젝트 소개
-------------

인프런 '한입 크기로 잘라 먹는 리액트(React.js)' 와 <br>
노마드코더의 'ReactJS로 영화 웹 서비스 만들기' 강의를 수강한 뒤, <br>
개인 프로젝트로 만든 BOX OFFICE 웹 페이지 입니다. <br><br>

영화진흥위원회의 API를 사용해 박스오피스 정보를 받아오고, <br>
TMDB API를 사용해 영화의 세부 정보 및 포스터, 배우 정보를 받아와 제작했습니다. <br><br>


BOX OFFICE 프로젝트는 SPA로 React Router Dom 라이브러리를 사용해 페이지 관리를 했습니다. <br>
저장 기능(배우 찜 기능)은 Local Storage를 사용해 데이터를 save / load 하는 방식으로 구현 되었습니다. <br>
carousel 기능을 사용하기 위해 TOP3 영화를 보여주는 NowHot 컴포넌트를 직접 구현하기도 했고, <br>
React slick 라이브러리를 사용해 웹페이지를 구현했습니다.<br>


### 🕰️개발 기간
-------------
#### 학습 기간 : 2024.02.01~ 2023.03.16 (45일)
#### 개발 기간 : 2023.03.16~2023.04.13 (28일)


### 🎪 프리뷰
-------------
<img src="img/preview.jpg" width="900" height="450">


### ⚙️ 개발 환경
-------------
- IDE : <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/>
- Stack : <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
- Library : <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=black"/> , React Slick
- API : 영화진흥위원회(Kofic), TMDB


### 📌 주요 기능
-------------
| # | Page | Preview | Point |
|:---:|:----------:|:---------:|-------|
| 1 | Home         | <img src="img/preview.jpg" width="450" height="300">     |  ✔ 영화api로 데이터를 요청해 async&await 비동기 처리 <br> ✔ carousel 형태로 박스오피스 정보를 보여주는 홈화면 <br> <br> ✔  react router와 navigate를 사용해 페이지 간 이동 활성화   |
| 2 | Detail       |  <img src="img/detail.jpg" width="450" height="300">     |  ✔ useParam으로 영화 ID를 받아와 영화 디테일 데이터를 api로 요청  <br> ✔ 캐스팅 목록에서 좋아하는 배우를 클릭하면 localstorage에 배우 id 저장   |
| 3 | Like         |  <img src="img/like.jpg" width="450" height="300">       | ✔ localstorage에 저장된 배우list load <br> ✔ 배우의 필모그래피 데이터를 api로 요청 <br> ✔ 배우 클릭 시, 해당 배우의 필모그래피 img 불러와 <br> carousel로 리스트 보여주는 페이지 |


### 📢 OpenGraph
-------------
![image](https://github.com/wonyj0228/Box-office/assets/78012809/55564cc4-dd03-4068-9a43-819ab2e2222d)

