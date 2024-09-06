import React from 'react';
import 'aos/dist/aos.css'; // AOS 스타일 시트 추가

const ResumeSection: React.FC = () => {
  return (
    <section id="Experience" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Experience</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="d-flex flex-wrap align-content-sm-center align-content-start flex-column flex-md-row justify-content-md-evenly">
          <div className="" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
            <h4>웹퍼블리셔(UI/UX)&프론트엔드개발</h4>
                <h5>2024.03 ~ 2024.09</h5>
            </div>
            {/* End Resume Item */}

            <div className="resume-item">
                <h4>IH LONDON</h4>
                <h5>2020.09 ~ 2020.11</h5>
                <h5>2019.04 ~ 2019.07</h5>
                <p><em>영국, 런던</em></p>
            </div>
            {/* End Resume Item */}
            <div className="resume-item d-flex flex-column">
                <h4>수원과학대학교 / 공연연기과</h4>
                <h5>2014.03 ~ 2018.03</h5>
            </div>
            {/* End Resume Item */}
            <div className="resume-item">
                <h4>목동고등학교</h4>
                <h5>2010.03 ~ 2013.03</h5>
            </div>
            {/* End Resume Item */}
          </div>

          <div className="pt-md-0 pt-5" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Work Experience</h3>
            <div className="resume-item">
              <h4>온라인 MD</h4>
              <h5>2023.10 ~ 2024.01</h5>
              <p><em>웹뜰 / 대한민국, 서울</em></p>
              {/* <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul> */}
            </div>
            {/* End Resume Item */}

            <div className="resume-item">
              <h4>온라인 마케팅, 바리스타</h4>
              <h5>2022.10 ~ 2023.05</h5>
              <p><em>Cocomelt / 영국, 런던</em></p>
            </div>
            
            <div className="resume-item">
              <h4>바리스타</h4>
              <h5>2022.05 ~ 2022.08</h5>
              <p><em>Knockbox / 영국, 런던</em></p>
            </div>
            
            <div className="resume-item">
              <h4>온라인MD 인턴</h4>
              <h5>2021.12 ~ 2022.03</h5>
              <p><em>Globalon / 영국, 런던</em></p>
            </div>
           
            <div className="resume-item">
              <h4>온라인MD</h4>
              <h5>2021.03 ~ 2021.09</h5>
              <p><em>세븐제이스 / 대한민국, 경기도</em></p>
            </div>
           
            {/* <div className="resume-item">
              <h4>바리스타</h4>
              <h5>2020.01 ~ 2020.09</h5>
              <p><em>비엔나커피하우스 / 대한민국, 서울</em></p>
            </div>
            
            <div className="resume-item">
              <h4>바리스타</h4>
              <h5>2018.10 ~ 2019.04</h5>
              <p><em>투썸플레이스 / 대한민국, 서울</em></p>
            </div>
            
            <div className="resume-item">
              <h4>간호보조 아르바이트</h4>
              <h5>2017.07 ~ 2018.04</h5>
              <p><em>41타워안과 / 대한민국, 서울</em></p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
