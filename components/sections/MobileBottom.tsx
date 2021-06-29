const MobileBottom = () => {
  return (
    <section className='section-call-to-action--bottom mobile-only'>
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
        '>
            Подайте заявку на консультацию сейчас!
          </h2>
        </div>
        <div className='section__subtitle'>
          <p className='text-highlight--fw-300'>
            Менеджер расскажет о ВУЗах-партнерах и подберет программу обучения.
          </p>
        </div>
        <div className='left__call-to-action'>
          <div className='call-to-action__btn-group'>
            <p className='btn-group__limited'>
              <span className='text-highlight--bold text-highlight--color'>
                *колличество мест со скидкой ограничено
              </span>
            </p>

            <a
              id='show-pop-up-bottom-mobile'
              href='#!'
              className='btn-group__btn btn btn-primary'>
              ПОДАТЬ ЗАЯВКУ
            </a>
          </div>

          <div className='call-to-action__discount'>
            <div className='discount__arrow-pointer'>
              <svg
                className='arrow-pointer__arrow-up'
                width='25'
                height='28'
                viewBox='0 0 25 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  className='icon_path__counter'
                  d='M25 12.6301L13.9292 1.44405L12.5 0L11.0708 1.44405L0 12.6301L1.42918 14.0741L11.4895 3.91077V28H13.5105V3.91077L23.5708 14.0741L25 12.6301Z'
                  fill='#2874FF'
                />
              </svg>

              <svg
                className='arrow-pointer__left'
                width='56'
                height='26'
                viewBox='0 0 56 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect
                  className='icon_path__counter'
                  x='14.0865'
                  y='2.39431'
                  width='17.5845'
                  height='2.3368'
                  transform='rotate(135 14.0865 2.39431)'
                  fill='#FF6600'
                />
                <rect
                  className='icon_path__counter'
                  x='1.65234'
                  y='11.5238'
                  width='17.5775'
                  height='2.3368'
                  transform='rotate(45 1.65234 11.5238)'
                  fill='#FF6600'
                />
                <rect
                  className='icon_path__counter'
                  x='3'
                  y='12.0001'
                  width='53'
                  height='2'
                  fill='#FF6600'
                />
              </svg>
            </div>

            <div className='discount__text-container text-highlight--bold'>
              <p>
                <span className='text-highlight--color'>
                  Скидка 30% на все программы до конца месяца!
                </span>
                Успейте получить!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileBottom
