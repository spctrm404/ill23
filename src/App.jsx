import { v4 as uuidv4 } from 'uuid';
import Work from './Work';
import { useState } from 'react';
import './_App.scss';

function App() {
  const works = [
    {
      key: uuidv4(),
      title: '불안이라는 위안',
      designer: '유이현',
      thumbnail: './assets/thumbs/smucd_201820261.jpg',
      link: 'https://smucd2023.com/project/%eb%b6%88%ec%95%88%ec%9d%b4%eb%9d%bc%eb%8a%94-%ec%9c%84%ec%95%88/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '무심코 지나친 것들에 대해서',
      designer: '임유리',
      thumbnail: './assets/thumbs/smucd_201920278.jpg',
      link: 'https://smucd2023.com/project/%eb%ac%b4%ec%8b%ac%ec%bd%94-%ec%a7%80%eb%82%98%ec%b9%9c-%ea%b2%83%eb%93%a4%ec%97%90-%eb%8c%80%ed%95%b4%ec%84%9c/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '인간사전',
      designer: '차승현',
      thumbnail: './assets/thumbs/smucd_201920301.jpg',
      link: 'https://smucd2023.com/project/%EC%9D%B8%EA%B0%84%EC%82%AC%EC%A0%84/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '고양이가 내게 가르쳐준 것들',
      designer: '구유정',
      thumbnail: './assets/thumbs/smucd_201920319.jpg',
      link: 'https://smucd2023.com/project/%ea%b3%a0%ec%96%91%ec%9d%b4%ea%b0%80-%eb%82%b4%ea%b2%8c-%ea%b0%80%eb%a5%b4%ec%b3%90%ec%a4%80-%ea%b2%83%eb%93%a4/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '넘치지도 모자라지도 않는',
      designer: '박채원',
      thumbnail: './assets/thumbs/smucd_201920333.jpg',
      link: 'https://smucd2023.com/project/%eb%84%98%ec%b9%98%ec%a7%80%eb%8f%84-%eb%aa%a8%ec%9e%90%eb%9d%bc%ec%a7%80%eb%8f%84-%ec%95%8a%eb%8a%94/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '걱정 없애기',
      designer: '제서현',
      thumbnail: './assets/thumbs/smucd_201920295.jpg',
      link: 'https://smucd2023.com/project/%ea%b1%b1%ec%a0%95-%ec%97%86%ec%95%a0%ea%b8%b0/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '내가 함께 있을게',
      designer: '김영서',
      thumbnail: './assets/thumbs/smucd_201920206.jpg',
      link: 'https://smucd2023.com/project/%EB%82%B4%EA%B0%80-%ED%95%A8%EA%BB%98-%EC%9E%88%EC%9D%84%EA%B2%8C/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '내향인 탐구생활',
      designer: '김란수',
      thumbnail: './assets/thumbs/smucd_202021403.jpg',
      link: 'https://smucd2023.com/project/%eb%82%b4%ed%96%a5%ec%9d%b8-%ed%83%90%ea%b5%ac%ec%83%9d%ed%99%9c/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '고양이와 신비한 꿈여행',
      designer: '임소정',
      thumbnail: './assets/thumbs/smucd_202020331.jpg',
      link: 'https://smucd2023.com/project/smucd202020331-3/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: 'Every day, Every travel',
      designer: '김예은',
      thumbnail: './assets/thumbs/smucd_202021405.jpg',
      link: 'https://smucd2023.com/project/every-day-every-travel/',
      isSelected: true,
    },
    // {
    //   key: uuidv4(),
    //   title: '고양이처럼',
    //   designer: '권하은',
    //   thumbnail: './assets/thumbs/smucd_201920195.jpg',
    //   link: 'https://smucd2023.com/project/%ea%b3%a0%ec%96%91%ec%9d%b4%ec%b2%98%eb%9f%bc/',
    //   isSelected: true,
    // },
    {
      key: uuidv4(),
      title: '감정은 잘못이 없다',
      designer: '임세미',
      thumbnail: './assets/thumbs/smucd_201920276.jpg',
      link: 'https://smucd2023.com/project/%ea%b0%90%ec%a0%95%ec%9d%80-%ec%9e%98%eb%aa%bb%ec%9d%b4-%ec%97%86%eb%8b%a4/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '마음 풍선',
      designer: '고도연',
      thumbnail: './assets/thumbs/smucd_201920190.jpg',
      link: 'https://smucd2023.com/project/%eb%a7%88%ec%9d%8c-%ed%92%8d%ec%84%a0/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: 'Artist.Room',
      designer: '오지윤',
      thumbnail: './assets/thumbs/smucd_202020288.jpg',
      link: 'https://smucd2023.com/project/artist-room/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '참외 씨앗',
      designer: '임효정',
      thumbnail: './assets/thumbs/smucd_201920280.jpg',
      link: 'https://smucd2023.com/project/%ec%b0%b8%ec%99%b8-%ec%94%a8%ec%95%97/',
      isSelected: true,
    },
    // {
    //   key: uuidv4(),
    //   title: '생각의 늪',
    //   designer: '전보경',
    //   thumbnail: './assets/thumbs/smucd_202020341.jpg',
    //   link: 'https://smucd2023.com/project/%ec%83%9d%ea%b0%81%ec%9d%98-%eb%8a%aa/',
    //   isSelected: true,
    // },
    {
      key: uuidv4(),
      title: '작은 행복',
      designer: '이정은',
      thumbnail: './assets/thumbs/smucd_201920266.jpg',
      link: 'https://smucd2023.com/project/%ec%9e%91%ec%9d%80-%ed%96%89%eb%b3%b5/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '아무튼 여름',
      designer: '계유림',
      thumbnail: './assets/thumbs/smucd_201920358.jpg',
      link: 'https://smucd2023.com/project/%ec%95%84%eb%ac%b4%ed%8a%bc-%ec%97%ac%eb%a6%84/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '삶은 달걀',
      designer: '이가영',
      thumbnail: './assets/thumbs/smucd_202020301.jpg',
      link: 'https://smucd2023.com/project/%ec%82%b6%ec%9d%80-%eb%8b%ac%ea%b1%80/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '사로잡히다',
      designer: '민수희',
      thumbnail: './assets/thumbs/smucd_201820231.jpg',
      link: 'https://smucd2023.com/project/%ec%82%ac%eb%a1%9c%ec%9e%a1%ed%9e%88%eb%8b%a4/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '나만의 비밀소원',
      designer: '박나원',
      thumbnail: './assets/thumbs/smucd_202020246.jpg',
      link: 'https://smucd2023.com/project/%eb%82%98%eb%a7%8c%ec%9d%98-%eb%b9%84%eb%b0%80%ec%86%8c%ec%9b%90/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '좋은 일만 기억하기로 했다',
      designer: '조소현',
      thumbnail: './assets/thumbs/smucd_201920297.jpg',
      link: 'https://smucd2023.com/project/%ec%a2%8b%ec%9d%80-%ec%9d%bc%eb%a7%8c-%ea%b8%b0%ec%96%b5%ed%95%98%ea%b8%b0%eb%a1%9c-%ed%96%88%eb%8b%a4/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '무의미의 의미',
      designer: '김지향',
      thumbnail: './assets/thumbs/smucd_201920211.jpg',
      link: 'https://smucd2023.com/project/%eb%ac%b4%ec%9d%98%eb%af%b8%ec%9d%98-%ec%9d%98%eb%af%b8/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '지우와 신기한 털실',
      designer: '김다은',
      thumbnail: './assets/thumbs/smucd_201920199.jpg',
      link: 'https://smucd2023.com/project/%ec%a7%80%ec%9a%b0%ec%99%80-%ec%8b%a0%ea%b8%b0%ed%95%9c-%ed%84%b8%ec%8b%a4/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '두근두근 엘리베이터',
      designer: '장채원',
      thumbnail: './assets/thumbs/smucd_201820288.jpg',
      link: 'https://smucd2023.com/project/%eb%91%90%ea%b7%bc%eb%91%90%ea%b7%bc-%ec%97%98%eb%a6%ac%eb%b2%a0%ec%9d%b4%ed%84%b0/',
      isSelected: true,
    },
    // {
    //   key: uuidv4(),
    //   title: '걱정상자',
    //   designer: '김정민',
    //   thumbnail: './assets/thumbs/smucd_201920208.jpg',
    //   link: 'https://smucd2023.com/project/smucd201920208-2/',
    //   isSelected: true,
    // },
    {
      key: uuidv4(),
      title: '나는 나답게 살기로 했다.',
      designer: '이한비',
      thumbnail: './assets/thumbs/smucd_201920270.jpg',
      link: 'https://smucd2023.com/project/%eb%82%98%eb%8a%94-%eb%82%98%eb%8b%b5%ea%b2%8c-%ec%82%b4%ea%b8%b0%eb%a1%9c-%ed%96%88%eb%8b%a4/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '어쩌다 둘째!',
      designer: '김휘록',
      thumbnail: './assets/thumbs/smucd_201720225.jpg',
      link: 'https://smucd2023.com/project/%ec%96%b4%ec%a9%8c%eb%8b%a4-%eb%91%98%ec%a7%b8/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '왜냐면 말이지...',
      designer: '송지원',
      thumbnail: './assets/thumbs/smucd_201920244.jpg',
      link: 'https://smucd2023.com/project/%ec%99%9c%eb%83%90%eb%a9%b4-%eb%a7%90%ec%9d%b4%ec%a7%80/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '여름버스',
      designer: '이혜림',
      thumbnail: './assets/thumbs/smucd_201920273.jpg',
      link: 'https://smucd2023.com/project/여름버스/',
      isSelected: true,
    },
    // {
    //   key: uuidv4(),
    //   title: '구름 위에 지은 집',
    //   designer: '김지영',
    //   thumbnail: './assets/thumbs/smucd_201920210.jpg',
    //   link: 'https://smucd2023.com/project/%EA%B5%AC%EB%A6%84-%EC%9C%84%EC%97%90-%EC%A7%80%EC%9D%80-%EC%A7%91/',
    //   isSelected: true,
    // },
    {
      key: uuidv4(),
      title: '바무와 게로의 하늘여행',
      designer: '방수진',
      thumbnail: './assets/thumbs/smucd_202020262.jpg',
      link: 'https://smucd2023.com/project/%eb%b0%94%eb%ac%b4%ec%99%80-%ea%b2%8c%eb%a1%9c%ec%9d%98-%ed%95%98%eb%8a%98%ec%97%ac%ed%96%89/',
      isSelected: true,
    },
    // {
    //   key: uuidv4(),
    //   title: '형태 없는 생각',
    //   designer: '정채린',
    //   thumbnail: './assets/thumbs/smucd_202020349.jpg',
    //   link: 'https://smucd2023.com/project/%ed%98%95%ed%83%9c-%ec%97%86%eb%8a%94-%ec%83%9d%ea%b0%81/',
    //   isSelected: true,
    // },
    // {
    //   key: uuidv4(),
    //   title: '오늘 하루, 특별하게',
    //   designer: '곽인아',
    //   thumbnail: './assets/thumbs/smucd_201920191.jpg',
    //   link: 'https://smucd2023.com/project/%ec%98%a4%eb%8a%98%ed%95%98%eb%a3%a8%ed%8a%b9%eb%b3%84%ed%95%98%ea%b2%8c/',
    //   isSelected: true,
    // },
    // {
    //   key: uuidv4(),
    //   title: '역설의 미학: The Aesthetics of PARADOX',
    //   designer: '여효정',
    //   thumbnail: './assets/thumbs/smucd_201920248.jpg',
    //   link: 'https://smucd2023.com/project/%ec%97%ad%ec%84%a4%ec%9d%98-%eb%af%b8%ed%95%99/',
    //   isSelected: true,
    // },
    {
      key: uuidv4(),
      title: 'home alone',
      designer: '서현정',
      thumbnail: './assets/thumbs/smucd_201920376.jpg',
      link: 'https://smucd2023.com/project/home-alone/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '애써 둥글게 살 필요는 없어',
      designer: '김현정',
      thumbnail: './assets/thumbs/smucd_201920221.jpg',
      link: 'https://smucd2023.com/project/%ec%95%a0%ec%8d%a8-%eb%91%a5%ea%b8%80%ea%b2%8c-%ec%82%b4-%ed%95%84%ec%9a%94%eb%8a%94-%ec%97%86%ec%96%b4-%ea%b9%80%ed%98%84%ec%a0%95/',
      isSelected: true,
    },
    // {
    //   key: uuidv4(),
    //   title: '나를 찾는 계절',
    //   designer: '박은서',
    //   thumbnail: './assets/thumbs/smucd_202020251.jpg',
    //   link: 'https://smucd2023.com/project/%eb%82%98%eb%a5%bc-%ec%b0%be%eb%8a%94-%ea%b3%84%ec%a0%88/',
    //   isSelected: true,
    // },
    {
      key: uuidv4(),
      title: '열두달 옷 이야기',
      designer: '김지민',
      thumbnail: './assets/thumbs/smucd_201720217.jpg',
      link: 'https://smucd2023.com/project/%ec%97%b4%eb%91%90%eb%8b%ac-%ec%98%b7-%ec%9d%b4%ec%95%bc%ea%b8%b0/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: 'BIG EYES',
      designer: '탁경민',
      thumbnail: './assets/thumbs/smucd_202020383.jpg',
      link: 'https://smucd2023.com/project/big-eyes/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '안녕, 나의 모든 하루',
      designer: '오하진',
      thumbnail: './assets/thumbs/smucd_202020289.jpg',
      link: 'https://smucd2023.com/project/%EC%95%88%EB%85%95-%EB%82%98%EC%9D%98-%EB%AA%A8%EB%93%A0-%ED%95%98%EB%A3%A8/',
      isSelected: true,
    },
    {
      key: uuidv4(),
      title: '50/50',
      designer: '안채영',
      thumbnail: './assets/thumbs/smucd_201720255.jpg',
      link: 'https://smucd2023.com/project/50-50/',
      isSelected: true,
    },
    // {
    //   key: uuidv4(),
    //   title: '추억 그릇',
    //   designer: '김나은',
    //   thumbnail: './assets/thumbs/smucd_201921405.jpg',
    //   link: 'https://smucd2023.com/project/%ec%b6%94%ec%96%b5-%ea%b7%b8%eb%a6%87/',
    //   isSelected: true,
    // },
    {
      key: uuidv4(),
      title: '나의 하루 한 줄 문답',
      designer: '주예카',
      thumbnail: './assets/thumbs/smucd_201920300.jpg',
      link: 'https://smucd2023.com/project/%eb%82%98%ec%9d%98-%ed%95%98%eb%a3%a8-%ed%95%9c-%ec%a4%84-%eb%ac%b8%eb%8b%b5/',
      isSelected: true,
    },
    // {
    //   key: uuidv4(),
    //   title: '작지만 밝게 빛나고 있어',
    //   designer: '김인영',
    //   thumbnail: './assets/thumbs/smucd_201820214.jpg',
    //   link: 'https://smucd2023.com/project/%ec%9e%91%ec%a7%80%eb%a7%8c-%eb%b0%9d%ea%b2%8c-%eb%b9%9b%eb%82%98%ea%b3%a0-%ec%9e%88%ec%96%b4/',
    //   isSelected: true,
    // },
  ];

  const selectedWorks = works.filter((eachWork) => {
    return eachWork.isSelected === true;
  });

  const getSixWork = () => {
    const six = [];
    for (let cnt = 0; cnt < 6; cnt++) {
      const idx = Math.floor(Math.random() * selectedWorks.length);
      six.push(selectedWorks[idx]);
      selectedWorks.splice(idx, 1);
    }
    return six;
  };

  const [selectedSix, setSelectedSix] = useState(getSixWork());

  const handleClick = () => {
    setSelectedSix(getSixWork());
  };

  return (
    <div className={`container`}>
      <h1 className={`title`}>Illustration23: Selected Works</h1>
      <div className={`grid`}>
        {selectedSix.map((eachWork) => {
          return (
            <Work
              key={eachWork.key}
              title={eachWork.title}
              designer={eachWork.designer}
              thumbnail={eachWork.thumbnail}
              link={eachWork.link}></Work>
          );
        })}
      </div>
      <div className={`button`} onClick={handleClick}>
        다른 작업 보기
      </div>
    </div>
  );
}

export default App;
