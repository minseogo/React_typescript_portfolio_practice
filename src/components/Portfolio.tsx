import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Isotope from 'isotope-layout';

const portfolioItems = [
  {
    imgSrc: '/img/portfolio/veg.png',
    title: '팀 프로젝트 어글리어스 브랜드 리뉴얼 반응형',
    description: '리뷰 컴포넌트 디자인 및 제작하였습니다',
    filter: 'filter-team',
    link: 'https://team-project-reactuglyus.vercel.app/',
  },
  {
    imgSrc: '/img/portfolio/eclat.png',
    title: '팀 프로젝트 자체 제작 브랜드 에끌라 아이웹 적응형',
    description: '아이웹 플랫폼 활용하여 브랜드페이지 디자인 및 제작, 시즌추천, 이벤트, 리뷰 컴포넌트 제작하였습니다',
    filter: 'filter-team',
    link: 'https://i-web.kr/green05/',
  },
  {
    imgSrc: '/img/portfolio/ck.png',
    title: '개인프로젝트 캘빈클라인 브랜드 리뉴얼 웹 반응형',
    description: '디자인 및 웹 버전 구현하였습니다 [메인페이지]',
    filter: 'filter-personal',
    link: 'https://gominseo-calvinklein.vercel.app/',
  },
  {
    imgSrc: '/img/portfolio/ck.png',
    title: '개인프로젝트 캘빈클라인 브랜드 리뉴얼 그누보드 반응형',
    description: '디자인 및 그누보드플랫폼과 닷홈 도메인 활용하여 구현하였습니다 [메인페이지, 여성 → 온라인익스클루시브 리스트 페이지]',
    filter: 'filter-personal',
    link: 'http://gominseo.dothome.co.kr/ck/',
  },
  {
    imgSrc: '/img/portfolio/ck.png',
    title: '개인프로젝트 캘빈클라인 브랜드 리뉴얼 카페24 반응형',
    description: '디자인 및 카페24 솔루션 활용하여 구현하였습니다 [메인페이지, 여성 → 온라인익스클루시브 리스트, 상세페이지]',
    filter: 'filter-personal',
    link: 'https://minseogo.cafe24.com/',
  },
];

const PortfolioSection: React.FC = () => {
  useEffect(() => {
    const iso = new Isotope('.isotope-container', {
      itemSelector: '.isotope-item',
      layoutMode: 'masonry',
      filter: '*',
    });

    // 필터 버튼 클릭 시 필터링
    const filtersElem = document.querySelector('.isotope-filters') as HTMLElement;
    filtersElem.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'LI') {
        const filterValue = target.getAttribute('data-filter') || '*';
        iso.arrange({ filter: filterValue });
        filtersElem.querySelector('.filter-active')?.classList.remove('filter-active');
        target.classList.add('filter-active');
      }
    });

    // 초기 필터 설정
    const initialFilter = filtersElem.querySelector('[data-filter="*"]');
    initialFilter?.classList.add('filter-active');

    return () => {
      filtersElem.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-team">팀 프로젝트</li>
            <li data-filter=".filter-personal">개인 프로젝트</li>
          </ul>
          {/* End Portfolio Filters */}

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItems.map((item, index) => (
              <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}>
                <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <a href={item.link} title="More Details" className="details-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
