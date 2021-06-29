const MobileStickyBottom = () => {
  return (
    <section className='section-call-to-action--bottom mobile-only'>
      <div className='container'>
        <div className='left__call-to-action'>
          <div className='call-to-action__btn-group'>
            <p className='btn-group__limited'>
              <span className='text-highlight--bold text-highlight--color'>
                *колличество мест со скидкой ограничено
              </span>
            </p>

            <a
              id='cta-scroll-to-submit-application'
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

export default MobileStickyBottom
