import React, { useEffect, useRef } from 'react';
import 'aos/dist/aos.css'; // AOS 스타일 시트 추가

const AboutSection: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (skillsRef.current) {
      const skillsAnimation = skillsRef.current.querySelectorAll('.skills-animation');
      skillsAnimation.forEach((item) => {
        new (window as any).Waypoint({
          element: item as HTMLElement,
          offset: '80%',
          handler: function (direction: string) {
            const progress = (item as HTMLElement).querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              const progressBar = el as HTMLElement;
              progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      });
    }
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="row justify-content-between gy-4 align-items-center" ref={skillsRef}>
              <div className="col-lg-5">
                <img src="/img/profile_img.jpg" className="img-fluid rounded-circle" alt="Profile"/>
              </div>
              <div className="col-lg-7 about-info">
                <p><strong>Name: </strong> <span> 고민서</span></p>
                <p><strong>Profile: </strong> <span> 웹퍼블리셔, 프론트엔드</span></p>
                <p><strong>Email: </strong> <span> gominseo1112@gmail.com</span></p>
                <p><strong>Phone: </strong> <span> 010 - 5042 - 9412</span></p>
              </div>
            </div>

            <div className="skills-content skills-animation">
              <h5>Skills</h5>
                <div>HTML</div>
                <div>CSS</div>
                <div>React</div>
                <div>Java Script</div>
                <div>jQuery</div>
                <div>CAFE24 플랫폼</div>
                <div>그누보드 플랫폼</div>

            </div>
          </div>

          <div className="col-md-6">
            <div className="about-me">
              <h4>About Me</h4>
              <p>
                대학교 졸업 후, 어학연수를 위해 영국으로 떠났습니다. 영국에서의 생활은 저에게 새로운 도전이자 성장의 기회였습니다.
                현지 가정집에서 생활하며 문화와 언어를 자연스럽게 익혔고, 어학 수업에 성실히 참여하여 영어 실력을 꾸준히 향상했습니다.
                어학연수 후, 저는 워킹홀리데이를 결심하고 영국에 머물며 패션 업계에서 경력을 쌓기로 했습니다.
            </p>
            <p>
                목표를 달성하기 위해 수많은 인터뷰에 도전하며, 마케팅 업무를 수행하고 카페 아르바이트를 통해 어학 능력을 더욱 강화했습니다.
                비록 여러 번의 인터뷰에서 탈락의 경험을 했지만, 포기하지 않고 인턴직을 통해 현장에서 실무를 배우며 끊임없이 노력했습니다.
            </p>
            <p>
                이 과정에서 저는 협업의 중요성을 깊이 깨달았고, 이는 프론트엔드 개발을 공부하는데 큰 도움이 되었습니다.
                프론트엔드 분야는 끝없이 변화하고 발전하는 영역이기 때문에, 항상 배우고 성장해야 한다는 마음가짐을 유지하고 있습니다.
                긴장의 끈을 놓지 않고 지속적인 발전을 목표로 하고 있으며, 영국에서의 생활을 통해 일상적인 대화가 가능한 영어 능력도 갖추게 되었습니다.
                저는 이러한 경험을 바탕으로 앞으로도 도전을 두려워하지 않으며, 끊임없이 배우고 발전하는 자세로 목표를 이루고자 합니다.
            </p>
                
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
