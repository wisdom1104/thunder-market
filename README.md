
##   ⚡ 번개장터

📝 프로젝트 소개 : 번개장터 클론 코딩 프로젝트

📅 프로젝트 기간 : 2023.03.24 ~ 2023.03.30

👨‍👩‍👧‍👦  5조 : FE [양인서](https://github.com/1nxeo) [박지혜](https://github.com/wisdom1104)

# [![Youtube Badge](https://img.shields.io/badge/Youtube-ff0000?style=flat-round&logo=youtube&link=https://www.youtube.com/watch?v=F8oTl1pr3Sw)](https://www.youtube.com/watch?v=F8oTl1pr3Sw)   [![Notion Badge](https://img.shields.io/badge/Notion-000000.svg?&style=flat-round&logo=notion&link=https://1nxeo.notion.site/1nxeo/5-f98df340feb84a709bb63b666bd85a26)](https://1nxeo.notion.site/1nxeo/5-f98df340feb84a709bb63b666bd85a26)

## [💸 5조 번개장터 링크](http://clone-thunder-market.s3-website.ap-northeast-2.amazonaws.com/)

## 🔧 Technologies & Software Used

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-round&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-round&logo=react&logoColor=white"/>  <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-round&logo=redux&logoColor=white"/>  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-round&logo=axios&logoColor=white"/>


<img src="https://img.shields.io/badge/git-F05032?style=flat-round&logo=git&logoColor=white"/>  <img src="https://img.shields.io/badge/github-181717?style=flat-round&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white" />

<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-round&logo=Postman&logoColor=white"/> 

## 🔑 [프로젝트 구현 기능](http://clone-thunder-market.s3-website.ap-northeast-2.amazonaws.com/) 

1. 메인 화면 (중고 상품 조회) 
  
   * 모든 사용자는 판매중인 전체 상품을 조회할 수 있습니다.
   
   * 판매 완료된 상품은 조회 대상에서 제외됩니다.
 
   * 회원가입과 로그인을 헤더에 설정하였습니다.
   
   * 상품 등록 후 지난 시간을 알 수 있습니다.
   
   * 번개페이 사용가능 여부를 알 수 있습니다.

2. 회원가입 로그인 

   * JWTWebToken + spring boot Security 를 적용하여 구현하였습니다.
   
   * 카카오 소셜로그인을 구현하였습니다.
   
   * 이메일 중복, 닉네임 중복 체크를 구현하였습니다.

3. 판매하기 (상품등록)

   * 상품에 관련된 이미지 1장 업로드 가능합니다. 이미지는 AWS S3로 저장하여 관리됩니다.
    
   * 제목, 상품설명, 카테고리, 판매 상태, 교환 가능 여부, 수량 선택 가능합니다.

4. 상품 상세 조회

   * 상품에 대한 정보를 조회 가능합니다.
    
   * 상품을 등록한 작성자만 상품 수정, 삭제가능합니다.
    
   * 로그인한 사용자만 찜 기능을 이용할 수 있습니다.
    
   * 바로구매를 누르면 판매완료가 됩니다. 
    
   * 조회한 상품의 카테고리와 동일한 상품 6개를 연관상품으로 조회합니다.


## 🏀 [Trouble Shooting](https://1nxeo.notion.site/1nxeo/5-f98df340feb84a709bb63b666bd85a26)


  1. 로그인/로그아웃 버튼 구현
  * 쿠키에 토큰이 없으면 로그인 버튼이, 토큰이 있으면 로그아웃 버튼이 뜨도록 구현하고자 함.
  
  * isLogin의 초기값을 false로 하고 로그인이 성공하여 토큰을 가지게 되면 true가 되게 함.
  
  * false이면 버튼이 로그인으로, true면 버튼이 로그아웃으로 변경되게 함.
  
  * 이렇게 하니 리로딩 될 때마다 isLogin이 초깃값으로 돌아가서 초깃값을 변경해줄 필요성을 느낌. <br>
   -> isLogin: cookies.get("token") ? true : false 로 하여 토큰의 유무에 따라 관리하도록 변경하여 해결함.
   
  2. 회원가입 시 유효성 체크
  * 이메일, 닉네임, 비밀번호에 유효성 검사를 하여 통과하면 회원가입이 되게 함. <br>
   -> 공란이 있어도 회원가입이 되는 문제가 발생하여 공란 시에 회원가입이 되지 않도록 조건을 걸어주어 해결함.
   
  * 이메일과 닉네임에 중복검사를 추가하였는데 중복검사를 하지 않거나, 두 중복확인 중 하나만 하여도 회원가입이 되는 오류가발생함. <br>
   -> 마찬가지로 모든 중복검사를 하여 통과되었을때만 회원가입이 되도록 조건을 걸어주어 해결함.
   
   3. 이미지 변경 없이 수정요청
  * 이미지 변경 없이 글만 수정하여 요청시 서버 측 미들웨어에서 요청이 reject됨. <br>
   -> 빈 블롭을 생성해 이미지 타입으로 설정해주어 함께 수정요청하여 해결함.
   
   4. 찜 버튼 렌더링
  * 찜하기 버튼을 눌렀을 때, 해당사항이 바로 반영되지 않고, 카운트가 바로 처리되지 않음. <br>
   -> redux의 slice에 좋아요개수에 따른 상태 변화를 주어 버튼을 눌렀을 때 바로 반영되도록 하여 해결함.
