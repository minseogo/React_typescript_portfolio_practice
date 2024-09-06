import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar: React.FC = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  // 모바일 내비게이션 토글
  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  // 메뉴 링크 클릭 시 모바일 내비게이션 닫기 및 스크롤 이동
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId!);

    if (targetElement) {
      // 헤더의 높이 계산
      const headerHeight = document.querySelector('#header')?.clientHeight || 0;
      // 스크롤 이동 (헤더 높이만큼 보정)
      const offset = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }

    setMobileNavActive(false); // 링크 클릭 시 메뉴 닫기
  };

  // 스크롤 이벤트 감지 및 헤더 클래스 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#header');
      
      // 스크롤 위치에 따른 'scrolled' 클래스 추가/제거
      if (window.scrollY > 100) {
        setScrolled(true);
        document.body.classList.add('scrolled');
      } else {
        setScrolled(false);
        document.body.classList.remove('scrolled');
      }

      // 특정 조건일 때만 스크롤 적용
      if (
        header?.classList.contains('scroll-up-sticky') ||
        header?.classList.contains('sticky-top') ||
        header?.classList.contains('fixed-top')
      ) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 모바일 내비게이션 상태에 따른 body 클래스 추가
  useEffect(() => {
    if (isMobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [isMobileNavActive]);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <h1 className="sitename">LOGO</h1>
        </a>

        <nav id="navmenu" className={`navmenu d-flex ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="#hero" className="active text-decoration-none" onClick={handleNavLinkClick}>Home</a></li>
            <li><a href="#about" className="text-decoration-none" onClick={handleNavLinkClick}>About Me</a></li>
            <li><a href="#Experience" className="text-decoration-none" onClick={handleNavLinkClick}>Experience</a></li>
            <li><a href="#portfolio" className="text-decoration-none" onClick={handleNavLinkClick}>Portfolio</a></li>
            <li><a href="#contact" className="text-decoration-none" onClick={handleNavLinkClick}>Contact</a></li>
          </ul>
          {/* 모바일 내비게이션 토글 버튼 */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
        <div className='d-flex language_btn'>
              <a href="#kr" className="text-decoration-none text-black">KR</a>
              <a href="#eng" className="text-decoration-none text-black">EN</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
