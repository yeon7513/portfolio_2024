import billishuImg from '../assets/img/billishu.png';
import drinkMateImg from '../assets/img/drink-mate.png';
import fakeKeyboardImg from '../assets/img/fake-keyboard.png';
import iFarmImg from '../assets/img/ifarm.png';
import matchCardImg from '../assets/img/match-card.png';
import numberGuessImg from '../assets/img/number-guess.png';
import todolistImg from '../assets/img/todolist.png';
import typingRaceImg from '../assets/img/typing-race.png';

import billishuVideo from '../assets/video/billishu.mp4';
import drinkMateVideo from '../assets/video/drink-mate.mp4';
// import fakeKeyboardVideo from '../assets/video/fake-keyboard.mp4';
import iFarmVideo from '../assets/video/i-farm.mp4';
import matchCardVideo from '../assets/video/match-card.mp4';
import numberGuessVideo from '../assets/video/number-guess.mp4';
import todolistVideo from '../assets/video/todolist.mp4';
import typingRaceVideo from '../assets/video/typing-race.mp4';

export const projectData = [
  {
    id: 'numberGuess',
    imgUrl: numberGuessImg,
    videoUrl: numberGuessVideo,
    title: 'Number Guess',
    summary:
      '1부터 9까지의 숫자 중 3개의 랜덤 숫자를 맞추는 간단한 게임입니다.',
    desc: [
      {
        label: '개발 과정',
        explanation: [
          'Math.random()을 사용해 1부터 9까지의 숫자 중 중복되지 않는 3개의 랜덤 숫자를 배열로 생성',
          '사용자의 입력을 배열로 받아, 각 추측이 정답과 얼마나 일치하는지 확인하는 로직을 구현',
          'filter()와 includes() 등의 배열 메소드를 사용하여 사용자가 입력한 숫자가 정답 배열에 포함되어 있는지, 그리고 위치가 맞는지 여부를 판단',
          '매번 입력 후에 몇 개의 숫자가 맞았는지, 맞는 숫자가 어느 위치에 있는지를 알려주는 피드백 기능을 추가하여 게임 진행 도움',
          '모든 숫자를 정확히 맞추면 게임 클리어',
        ],
      },
    ],
    period: '2024.05.10 - 2024.05.13',
    keyword: ['#토이프로젝트', '#반응형 디자인'],
    techStack: [
      { label: '언어', item: ['HTML', 'CSS', 'JavaScript'] },
      { label: '환경', item: ['Windows'] },
      { label: '라이브러리', item: [] },
      { label: '툴', item: ['Visual Studio Code', 'GitHub'] },
      { label: '서비스', item: ['GitHub Pages'] },
    ],
    demo: 'https://yeon7513.github.io/number-guess/',
    source: 'https://github.com/yeon7513/number-guess',
  },
  {
    id: 'typingRace',
    imgUrl: typingRaceImg,
    videoUrl: typingRaceVideo,
    title: 'TYPING RACE',
    summary:
      '단어를 빠르게 타이핑하여 점수를 획득하는 간단한 타이핑 게임입니다.',
    desc: [
      {
        label: '개발 과정',
        explanation: [
          'Math.random()을 사용해 화면 위에서 아래로 랜덤한 위치에 단어들이 나타남.',
          '사용자가 입력한 단어를 실시간으로 확인하여 일치하는 단어를 찾아 제거하는 로직을 구현',
          'setInterval을 사용해 단어가 일정 시간마다 아래로 떨어지도록 애니메이션을 구현',
          '화면 하단에 닿으면 단어가 사라지고 누락 카운트가 증가함',
          '맞는 단어마다 점수가 증가하고, 틀리거나 입력하지 못한 단어에 대해 피드백을 제공',
          '틀린 횟수가 5번 이상이 되면 게임이 종료되고 결과 화면 출력',
          '게임이 종료되면 결과에 따라 "Clear" 또는 "Fail" 메시지를 표시하고, 획득한 점수를 보여주는 기능을 구현',
        ],
      },
    ],
    period: '2024.05.26 - 2024.05.31',
    keyword: ['#토이프로젝트'],
    techStack: [
      { label: '언어', item: ['HTML', 'CSS', 'JavaScript'] },
      { label: '환경', item: ['Windows'] },
      { label: '라이브러리', item: [] },
      { label: '툴', item: ['Visual Studio Code', 'GitHub'] },
      { label: '서비스', item: ['GitHub Pages'] },
    ],
    demo: 'https://yeon7513.github.io/typing-race-js/',
    source: 'https://github.com/yeon7513/typing-race-js',
  },
  {
    id: 'drinkMate',
    imgUrl: drinkMateImg,
    videoUrl: drinkMateVideo,
    title: 'Drink Mate',
    summary:
      '사용자가 소지금을 투입하여 음료수를 구매할 수 있는 자판기 머신을 구현한 토이 프로젝트입니다.',
    desc: [
      {
        label: '개발 과정',
        explanation: [
          '음료 리스트를 배열로 관리하고, DOM을 조작하여 각 음료의 수량과 가격을 동적으로 화면에 출력',
          '사용자가 소지금을 투입하면 자판기 안에 있는 금액이 업데이트되고, 투입금액이 적절하지 않은 경우 경고 메시지를 띄우는 로직을 추가',
          '사용자가 선택한 음료를 장바구니에 추가하고, 장바구니 안에서 음료의 수량을 조절할 수 있는 기능을 구현',
          '선택한 수량에 따라 음료 재고가 실시간으로 감소하며, 수량이 0이 되면 "품절" 표시함',
          '사용자가 남은 금액을 반환받을 수 있는 기능을 구현하여, 투입된 금액과 소지금을 관리할 수 있음',
          '장바구니에 담긴 제품들을 구매할 수 있으며, 구매 완료 시 장바구니가 초기화되고, 구매 목록이 업데이트 됨',
        ],
      },
    ],
    period: '2024.07.12 - 2024.07.15',
    keyword: ['#토이프로젝트', '#CRUD', '#반응형 디자인'],
    techStack: [
      { label: '언어', item: ['HTML', 'CSS', 'JavaScript'] },
      { label: '환경', item: ['Windows'] },
      { label: '라이브러리', item: [] },
      { label: '툴', item: ['Visual Studio Code', 'GitHub'] },
      { label: '서비스', item: ['GitHub Pages'] },
    ],
    demo: 'https://yeon7513.github.io/vending-machine/',
    source: 'https://github.com/yeon7513/vending-machine',
  },
  {
    id: 'fakeKeyboard',
    imgUrl: fakeKeyboardImg,
    videoUrl: '',
    title: 'Fake Keyboard',
    summary:
      'key event를 활용하여 사용자 입력과 연동된 가상 키보드를 구현한 프로젝트입니다.',
    desc: [
      {
        label: '개발 과정',
        explanation: [
          'keypress, keydown, keyup 이벤트를 활용하여 사용자가 키보드를 입력할 때마다 이벤트를 감지하고, 해당 키의 key와 code 값을 화면에 표시',
          '키 입력 시 가상 키보드의 키가 눌렸다는 시각적인 효과를 추가하였으며, 일정 시간 후 해당 효과가 사라지도록 구현하여 키 입력의 흐름을 표현',
          '입력된 키와 이벤트를 명확하게 구분하고, 각 이벤트(keypress, keydown, keyup)마다 다른 피드백을 주도록 설계',
        ],
      },
    ],
    period: '2024.05.21 - 2024.05.21',
    keyword: ['#토이프로젝트', '#키 입력 이벤트'],
    techStack: [
      { label: '언어', item: ['HTML', 'CSS', 'JavaScript'] },
      { label: '환경', item: ['Windows'] },
      { label: '라이브러리', item: [] },
      { label: '툴', item: ['Visual Studio Code', 'GitHub'] },
      { label: '서비스', item: ['GitHub Pages'] },
    ],
    demo: 'https://yeon7513.github.io/fake-keyboard/',
    source: 'https://github.com/yeon7513/fake-keyboard',
  },
  {
    id: 'todoList',
    imgUrl: todolistImg,
    videoUrl: todolistVideo,
    title: 'TODOLIST',
    summary: 'CRUD 기능을 구현한 TODOLIST입니다.',
    desc: [
      {
        label: '개발 과정',
        explanation: [
          '리액트로 TODOLIST를 개발하여 할 일을 추가, 수정, 삭제하는 CRUD 기능을 구현',
          '오늘과 내일 할 일의 관리를 위해 두 개의 리스트를 구성하였으며, 각각의 리스트에서 할 일을 구분할 수 있도록 설계',
          'TodoList 컴포넌트를 재활용하여 코드의 중복을 최소화하고, 동일한 동작과 레이아웃을 유지하면서 내부 데이터만 변경됨',
          '할 일이 완료되면 체크박스를 통해 시각적으로 표시할 수 있도록 하여 사용자 경험을 향상',
          '검색 기능을 추가하여 사용자가 원하는 할 일을 쉽게 찾을 수 있도록 구현',
        ],
      },
    ],
    period: '2023.12.12 - 2023.12.14',
    keyword: ['#CRUD', '#반응형 디자인'],
    techStack: [
      { label: '언어', item: ['HTML', 'CSS', 'JavaScript'] },
      { label: '환경', item: ['Windows', 'React JS'] },
      { label: '라이브러리', item: ['BootStrap'] },
      { label: '툴', item: ['Visual Studio Code', 'GitHub'] },
      { label: '서비스', item: ['Netlify'] },
    ],
    demo: 'https://my-todolist-yeon.netlify.app/',
    source: 'https://github.com/yeon7513/my-todolist',
  },
  {
    id: 'matchCard',
    imgUrl: matchCardImg,
    videoUrl: matchCardVideo,
    title: "Let's Match Cards!",
    summary: '카드 짝 맞추기 게임입니다.',
    desc: [
      {
        label: '개발 과정',
        explanation: [
          'React와 Redux를 활용하여 카드 짝 맞추기 게임을 개발하였으며, 총 5개의 스테이지로 구성되어 있음',
          '스테이지를 클리어할 때마다 카드가 4장씩 추가되어 난이도가 점차 상승하도록 설계',
          '카드 덱 생성 시 무작위로 카드를 배치하고, 매 스테이지마다 카드의 개수를 증가시키는 로직을 구현',
          '사용자가 선택한 카드의 상태를 관리하기 위해 Redux를 활용하여 전역 상태를 효율적으로 관리',
          '게임 클리어 및 실패 화면을 다르게 설정하여 사용자 경험을 향상',
        ],
      },
    ],
    period: '2023.11.27. - 2023.12.12',
    keyword: ['#토이프로젝트'],
    techStack: [
      { label: '언어', item: ['HTML', 'CSS', 'JavaScript'] },
      { label: '환경', item: ['Windows', 'React JS'] },
      { label: '라이브러리', item: ['BootStrap'] },
      { label: '툴', item: ['Visual Studio Code', 'GitHub'] },
      { label: '서비스', item: ['Netlify'] },
    ],
    demo: 'https://lets-match-cards.netlify.app/',
    source: 'https://github.com/yeon7513/macth-cards',
  },
  {
    id: 'team_billishu',
    imgUrl: billishuImg,
    videoUrl: billishuVideo,
    title: '[팀프로젝트] BILLISHU',
    summary: '공간 대여 서비스 플랫폼입니다.',
    desc: [
      {
        label: '맡은 역할',
        explanation: [
          '팀원들과의 협업을 통해 전체적인 플랫폼의 UI/UX 디자인을 계획하고, 사용자 경험을 고려하여 메인 페이지를 제작',
          '메인 페이지는 사용자 친화적인 인터페이스를 구현하기 위해 다양한 UI/UX 디자인 요소를 포함함',
          '달력 API를 활용하여 사용자들이 대여 가능한 날짜를 쉽게 선택할 수 있음',
          '결제 기능을 구현하고, 사용자 친화적인 결제 흐름을 디자인하여 사용자의 편의성을 극대화',
          '다양한 화면 크기에 적응할 수 있도록 반응형 디자인을 적용',
        ],
      },
    ],
    period: '2024.06.12. - 2024.06.28.',
    keyword: ['#팀프로젝트', '#반응형 디자인', '#CRUD'],
    techStack: [
      { label: '언어', item: ['HTML', 'CSS', 'JavaScript'] },
      { label: '환경', item: ['Windows'] },
      {
        label: '라이브러리',
        item: [
          'swiper',
          'BootStrap',
          '카카오 맵 API',
          'FullCalendar API',
          'Google Calendar API',
        ],
      },
      { label: '툴', item: ['Visual Studio Code', 'GitHub'] },
      { label: '서비스', item: ['GitHub Pages'] },
    ],
    demo: 'https://goyangyee22.github.io/project/',
    source: 'https://github.com/goyangyee22/project',
  },
  {
    id: 'team_ifarm',
    imgUrl: iFarmImg,
    videoUrl: iFarmVideo,
    title: '[팀프로젝트] 아이팜',
    summary: '스마트팩토리 어쩌구....',
    desc: [
      {
        label: '맡은 역할',
        explanation: [
          '스마트팜 빅데이터 제공 서비스 API를 활용하여 대량의 데이터를 수집하고 가공하는 작업을 수행',
          '수집한 데이터를 필터링하여 필요한 정보를 추출한 후, 다양한 형태의 차트로 시각화',
          '스마트팜 우수농가 공개 데이터 API를 활용하여 사용자의 입력을 받아 우수농가 데이터와 비교하는 시뮬레이션 제작',
          '사용자와 관리자의 역할에 따라 다른 데이터 접근 방식을 구현하여 데이터 보안과 효율성을 강화',
          '회원 정보 수정 기능을 구현하여 사용자들이 자신의 정보를 쉽게 관리할 수 있도록 하였으며, 관리자는 모든 회원 목록을 조회하고 검색할 수 있는 기능을 추가하여 효율적인 관리가 가능',
        ],
      },
    ],
    period: '2024.06.12. - 2024.06.28.',
    keyword: ['#팀프로젝트', '#반응형 디자인', '#CRUD'],
    techStack: [
      { label: '언어', item: ['HTML', 'CSS', 'JavaScript'] },
      { label: '환경', item: ['Windows', 'React JS'] },
      {
        label: '라이브러리',
        item: [
          'material-ui',
          'd3.js',
          'Recharts',
          'swiper',
          '스마트팜 빅데이터 제공 서비스 API',
          '스마트팜 우수농가 공개 데이터 API',
          '작물 병해충 검색 서비스 API',
          'OpenWeather API',
          'Google Maps JavaScript API',
          'Google Geocoding API',
          'KG이니시스 API',
          '카카오 주소 검색 API',
          '카카오 로그인 API',
        ],
      },
      { label: '툴', item: ['Visual Studio Code', 'GitHub'] },
      { label: '서비스', item: ['Firebase', 'Netlify'] },
    ],
    demo: 'https://i-farm-6w2d.netlify.app/',
    source: 'https://github.com/yeon7513/smart-farm',
  },
];
