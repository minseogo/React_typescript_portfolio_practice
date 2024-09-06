import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">
            {/* <div className="col-lg-4 d-flex justify-content-center">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>대한민국, 서울시 양천구 목동로</p>
                </div>
              </div>
            </div> */}
            {/* End Info Item */}

            <div className="col-md-6 d-flex justify-content-lg-center justify-content-start pb-md-0 pb-3">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+82 010 5042 9412</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}

            <div className="col-md-6 col-6 d-flex justify-content-lg-center justify-content-start">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Me</h3>
                  <p>gominseo1112@gmail.com</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
          </div>
        </div>

        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="300">
          <div className="row gy-4">
            <div className="col-md-6 pt-2 pb-3">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            </div>

            <div className="col-md-6 pt-2 pb-3">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required />
            </div>

            <div className="col-md-12 pt-2 pb-3">
              <input type="text" className="form-control" name="subject" placeholder="Company" required />
            </div>

            <div className="col-md-12 pt-2 pb-3">
              <textarea className="form-control" name="message" rows={6} placeholder="Message" required></textarea>
            </div>

            <div className="col-md-12 text-center pt-2 pb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
        {/* End Contact Form */}
      </div>
    </section>
  );
};

export default ContactSection;
