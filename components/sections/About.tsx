const About = () => {
  return (
    <section id='about' className='section-about'>
      <div className='container container--desktop-about'>
        <div className='section__title'>
          <h2 className='h1 h1--padding-bottom text-highlight--color text-highlight--bold-mobile'>
            О проекте
          </h2>
        </div>
        <div className='section__content'>
          <div className='content__info h1--padding-bottom'>
            <p>
              <span className='text-highlight--color'>ROSUCHEBA</span>
              <span
                id='customizedCountryText'
                className='text-highlight--fw-400'>
                — мы помогаем абитуриентам выбирать образование, а учебным
                заведениям — находить своих студентов!
              </span>
            </p>
          </div>
          <div className='content__showing-off-numbers'>
            <div className='showing-off-numbers__showing-off-number'>
              <div className='showing-off-number__number'>
                <p className='text-highlight--font-60 text-highlight--color text-highlight--bold'>
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
                <p className='text-highlight--font-60 text-highlight--color text-highlight--bold'>
                  30+
                </p>
              </div>
              <div className='showing-off-number__line'></div>
              <div className='showing-off-number__description'>
                <p className='text-highlight--fw-700'>Программ обучения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
