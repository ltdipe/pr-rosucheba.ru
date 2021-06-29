import IconCheck from '@/components/icons/IconCheck'

const EduLevels = () => {
  return (
    <section id='edu-levels' className='section-edu-levels'>
      <svg
        className='section__waves section__waves--top mobile-only'
        width='375'
        height='24'
        viewBox='0 0 375 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'>
        <path
          d='M375 24H0V1.28127C167.971 32.0204 243.803 -7.4018 375 1.28127V24Z'
          fill='#F9FBFF'
        />
      </svg>
      <div className='container'>
        <div className='section__title'>
          <h2
            className='
            h1 h1--padding-bottom
            text-highlight--color
            text-highlight--uppercase--desktop
            text-highlight--bold-mobile
            desktop-only
          '>
            Какие есть уровни образования
          </h2>
          <h2
            className='
            h1 h1--padding-bottom
            text-highlight--color
            text-highlight--uppercase--desktop
            text-highlight--bold-mobile
            mobile-only
          '>
            Уровни образования
          </h2>
        </div>
        <div className='section__content desktop-only'>
          <div className='content__line-segment'>
            <div className='line-segment__line'></div>
            <ul className='line-segment__line-items'>
              <li className='line-items__item'>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='16.9302'
                    cy='16.9302'
                    r='16.4302'
                    fill='white'
                    stroke='#2874FF'
                  />
                  <circle
                    cx='16.9304'
                    cy='16.9304'
                    r='6.34884'
                    fill='#2874FF'
                  />
                </svg>
                <p className='text-highlight--color'>Колледж</p>
              </li>
              <li className='line-items__item text-highlight--color'>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='16.9302'
                    cy='16.9302'
                    r='16.4302'
                    fill='white'
                    stroke='#2874FF'
                  />
                  <circle
                    cx='16.9304'
                    cy='16.9304'
                    r='6.34884'
                    fill='#2874FF'
                  />
                </svg>
                <p className='text-highlight--color'>Бакалавриат</p>
              </li>
              <li className='line-items__item text-highlight--color'>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='16.9302'
                    cy='16.9302'
                    r='16.4302'
                    fill='white'
                    stroke='#2874FF'
                  />
                  <circle
                    cx='16.9304'
                    cy='16.9304'
                    r='6.34884'
                    fill='#2874FF'
                  />
                </svg>
                <p className='text-highlight--color'>Магистратура</p>
              </li>
              <li className='line-items__item text-highlight--color'>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='16.9302'
                    cy='16.9302'
                    r='16.4302'
                    fill='white'
                    stroke='#2874FF'
                  />
                  <circle
                    cx='16.9304'
                    cy='16.9304'
                    r='6.34884'
                    fill='#2874FF'
                  />
                </svg>
                <p className='text-highlight--color'>Переподготовка</p>
              </li>
              <li className='line-items__item text-highlight--color'>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='16.9302'
                    cy='16.9302'
                    r='16.4302'
                    fill='white'
                    stroke='#2874FF'
                  />
                  <circle
                    cx='16.9304'
                    cy='16.9304'
                    r='6.34884'
                    fill='#2874FF'
                  />
                </svg>
                <p className='text-highlight--color'>
                  Бизнес-образование (MBA)
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className='section__content mobile-only'>
          <div className='content__line-segment'>
            <ul className='line-segment__line-items'>
              <li className='line-items__item'>
                <IconCheck />
                <p className='text-highlight--color'>Колледж</p>
              </li>
              <li className='line-items__item text-highlight--color'>
                <IconCheck />
                <p className='text-highlight--color'>Бакалавриат</p>
              </li>
              <li className='line-items__item text-highlight--color'>
                <IconCheck />
                <p className='text-highlight--color'>Переподготовка и MBA</p>
              </li>
              <li className='line-items__item text-highlight--color'>
                <IconCheck />
                <p className='text-highlight--color'>Магистратура</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <svg
        className='section__waves section__waves--bottom mobile-only'
        width='375'
        height='30'
        viewBox='0 0 375 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'>
        <path
          d='M375 0H0V28.3984C167.971 -10.0255 243.803 39.2522 375 28.3984V0Z'
          fill='#F9FBFF'
        />
      </svg>
    </section>
  )
}

export default EduLevels
