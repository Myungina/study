const Worklist=[
    [
    {
        id:14,
        title:'시대에듀 카테고리 메인 비쥬얼 관리페이지',
        company:'시대고시기획',
        skill:'php , Ajax , javascript',
        discription:'사용자 페이지 데이터 출력작업',
        git:'https://github.com/Myungina/mywork/tree/main/Js_module/visual_skin',
        url:[''],
        img:require('../img/portfolio.png'),
        txt:['카테고리 메인 배너 관리페이지' ,'ㄴ개별 유지보수 작업을 없애기 위해 구축' , 'ㄴ추후 개별 배너 관리 등 메인에 관련된 비쥬얼 부분 추가']
    },
    {
        id:13,
        title:'시대에듀 관리자 페이지 고도화',
        company:'시대고시기획',
        skill:'php , Ajax , javascript',
        discription:'관리자 페이지 기능 개선',
        git:'',
        url:[''],
        img:require('../img/portfolio.png'),
        txt:['관리자 페이지 노후화에 따른 기능 개선' , 'ㄴ 페이지 로딩시 불필요 데이터출력으로 인해 페이지 로딩이 길고, 사용이 어려움','ㄴ데이터 조건문 변경과 api를 이용해 불필요한 데이터 삭제 및 페이지 단순화']
    },
    {
        id:12,
        title:'시대에듀 JS 모듈화',
        company:'시대고시기획',
        skill:'javascript',
        discription:'공통 사용 Fn 모듈화 진행',
        git:'https://github.com/Myungina/mywork/tree/main/Js_module',
        url:[''],
        img:require('../img/portfolio.png'),
        txt:['개별 페이지에 마크업된 js를 모듈화','ㄴ 이벤트 전용 js모듈을 만들어 필요시 사용할 수 있도록함',
            'jquery -> vanilaJS로 변경으로 js 오류 최소화' , '사이트 공통 js 묶음' , '사용자 페이지 유지보수 자동화 적용' , 'ㄴ 담당자의 개별 관리페이지를 생성하여 유지보수 최소화'
        ]
    },
    {
        id:11,
        title:'포트폴리오',
        company:'-',
        skill:'html , css , jQuery , react',
        discription:'개인 포트폴리오사이트',
        git:'https://github.com/Myungina/study',
        url:[''],
        img:require('../img/portfolio.png'),
        txt:['react기반의 spa페이지']
    },
    {
        id:10,
        title:'브랜딩페이지 게시판 모듈화',
        company:'테이크원컴퍼니',
        skill:'html , css , jQuery , node.js',
        discription:'게임 브랜딩페이지 공용게시판 신규작업',
        git:'https://github.com/Myungina/mywork/tree/main/board',
        url:[''],
        img:require('../img/bptg_board.png'),
        txt:['브랜딩 소개페이지 구축','게시판 연동']
    },
    {
        id:9,
        title:'CMS NFT 관리자페이지',
        company:'테이크원컴퍼니',
        skill:'html , css , node.js , mySQL',
        discription:'CRUD작업',
        git:'',
        url:[''],
        img:require('../img/no-img.png'),
        txt:['NFT 관리자 전용 페이지 작업','txt파일 변환 스크립트']
    },
    {
        id:8,
        title:'시대에듀 상품홈페이지 개설',
        company:'시대고시기획',
        skill:'html , css , jQuery , php , 그누보드',
        discription:'개별상품 홈페이지 개설 및 리뉴얼/유지보수',
        git:'',
        url:['https://www.sdedu.co.kr/cp/?cat_id=001063','https://www.sdedu.co.kr/cp/?cat_id=001067','https://www.sdedu.co.kr/cp/?cat_id=005001','https://www.sdedu.co.kr/cp/?cat_id=001110'],
        img:require('../img/sd_index.png'),
        txt:['상품별 홈페이지 개설' , '동영상 상품 연관 도서 리스트 공통사용 js생성','swiper를 이용한 슬라이드 스크립트 생성']
    },
    {
        id:7,
        title:'시대고시기획 도서검색',
        company:'시대고시기획',
        skill:'html , css , jQuery ',
        discription:'검색결과 페이지 퍼블리싱 ',
        git:'',
        url:[''],
        img:require('../img/sd_book_search.png'),
        txt:['단순 도서명검색 페이지 고도화 작업','검색 조건 추가 및 검색 결과 타입별 출력 및 검색어 하이라이트등 사용자 편리성을 위한 기능 개선']
    },
    {
        id:6,
        title:'시대에듀 마이페이지',
        company:'시대고시기획',
        skill:'html , css , javascript , jQuery , ajax',
        discription:'마이페이지 UI개선, chart.js를 이용한 그래프 작업',
        git:'https://github.com/Myungina/mywork/tree/main/myclass',
        url:[''],
        img:require('../img/no-img.png'),
        txt:['불필요한 데이터 출력으로 인한 긴 로딩시간 , 유지보수가 어려운 단일 페이지를 개선','ㄴ각 페이지 개별화 및 해당 데이터 출력으로 로딩시간 개선' , 'ㄴ사용자 편의위주의 기능 개선']
    },
    {
        id:5,
        title:'동영상플레이어 변경',
        company:'시대고시기획',
        skill:'html , css , javascript , jQuery , ajax',
        discription:'플레이어 변경, UI개선 , 강좌정보 출력',
        git:'',
        url:[''],
        img:require('../img/no-img.png'),
        txt:['동영상 플레이어 변경에 따른 UI구조변경','kollus player script 적용']
    },    
    {
        id:4,
        title:'시대에듀 게시판',
        company:'시대고시기획',
        skill:'html , css , jQuery , php , ajax',
        discription:'ajax를 이용한 api통신 , UI개선 , css/js파일 최적화',
        git:'',
        url:['https://www.edusd.co.kr/bbs/board.php?bo_table=dcc_exam&svs=popkon'],
        img:require('../img/sd_board.png'),
        txt:['게시판UI 리뉴얼','검색 API적용']
    },
    {
        id:3,
        title:'시대에듀 모바일사이트',
        company:'시대고시기획',
        skill:'html , css , jQuery , php , ajax',
        discription:'기존 모바일 사이트 구조변경, 신규 게시판 추가 , 마이페이지 신규개설',
        git:'',
        url:['https://www.edusd.co.kr/mobile/'],
        img:require('../img/sd_m.png'),
        txt:['모바일 페이지 반응형 구조 변경 (웹뷰)','마이 페이지 신규 생성','게시판 api작업 및 동영상 플레이어 적용','상품 쿠폰, 할인 이벤트 기능 추가','게시판 글쓰기 기능 추가','장바구니 기능 추가','상품 페이지 이벤트 배너추가용 js생성','상품 페이지 이미지 lazy.js적용']
    },
    {
        id:2,
        title:'시대고시기획 브랜드사이트',
        company:'시대고시기획',
        skill:'html , css , jQuery',
        discription:'브랜딩사이트 신규개설, 반형페이지',
        git:'',
        url:['https://www.edusd.co.kr/brand/'],
        img:require('../img/no-img.png'),
        txt:['브랜딩사이트 반응형페이지  UI작업','기존 게시판  api호출','jQuery를 이용한 Animation effect']
    },
    {
        id:1,
        title:'맞춤형 모의고사 합격시대',
        company:'시대고시기획',
        skill:'html,css,jQuery,php',
        discription:'단계별 상품 선택UI 작업, 전체 페이지 작업',
        git:'',
        url:['https://www.edusd.co.kr/pass_sidae_new/html_/fit_mocktest_tree.php?fit_type=&'],
        img:require('../img/passsidae.png'),
        txt:['신규사이트 UI 개설 ,단계별 선택 스크립트 작성 ','php기반의 ajaxAPI 통신']
    }, 
    {
        id:0,
        title:'상품페이지 퍼블리싱',
        company:'에듀라인',
        skill:'html , css',
        discription:'상품페이지 퍼블리싱',
        git:'',
        url:[],
        img:require('../img/no-img.png'),
        txt:['개별상품 홈페이지 개설']
    }
]
]
export default Worklist;