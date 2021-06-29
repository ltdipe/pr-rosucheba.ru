const About = () => {
  return (
    <section id='about' className='section-about'>
      <div className='container container--about'>
        <div className='section__content'>
          <div className='content__info h1--padding-bottom'>
            <p>
              <span className='text-highlight--color text-highlight--fw-700'>
                ROSUCHEBA
              </span>
              <span className='text-highlight--fw-300'>
                — мы помогаем абитуриентам
                <span id='customizedCountryText'></span> поступать и обучаться в
                вузах Москвы дистанционно из своего города по нашим
                <span className='text-highlight--fw-700'>
                  партнерским скидкам
                </span>
                , а университетам — находить своих студентов!
              </span>
            </p>
            <div className='info__check-marks desktop-only'>
              <p className='check-marks__mark'>
                <svg
                  className='mark__check-icon'
                  width='37'
                  height='37'
                  viewBox='0 0 37 37'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <rect width='37' height='37' rx='18.5' fill='white' />
                  <path
                    d='M15 19L17.5 21.5L23 16'
                    stroke='#2874FF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Бесплатно подберём ВУЗ
              </p>
              <p className='check-marks__mark'>
                <svg
                  className='mark__check-icon'
                  width='37'
                  height='37'
                  viewBox='0 0 37 37'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <rect width='37' height='37' rx='18.5' fill='white' />
                  <path
                    d='M15 19L17.5 21.5L23 16'
                    stroke='#2874FF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Сделаем скидку
              </p>
            </div>
          </div>
          <div className='content__showing-off-numbers'>
            <div className='showing-off-numbers__showing-off-number'>
              <div className='showing-off-number__number'>
                <p
                  className='
                      text-highlight--font-60
                      text-highlight--color
                      text-highlight--bold
                    '>
                  6
                </p>
              </div>
              <div className='showing-off-number__line'></div>
              <div className='showing-off-number__description'>
                <p className='text-highlight--fw-700'>Вузов-партнеров</p>
              </div>
            </div>
            <div className='showing-off-numbers__showing-off-number'>
              <div className='showing-off-number__number'>
                <p
                  className='
                      text-highlight--font-60
                      text-highlight--color
                      text-highlight--bold
                    '>
                  50+
                </p>
              </div>
              <div className='showing-off-number__line'></div>
              <div className='showing-off-number__description'>
                <p className='text-highlight--fw-700'>Специальностей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
