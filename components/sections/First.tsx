const First = () => {
  return (
    <section id='js-section-heading' className='section-heading'>
      <div className='rectangle-gradient-maker'></div>
      <div className='rectangle-gradient-maker-desktop desktop-only'></div>
      <div
        className='
        container
        container-flex
        container-flex--jc-start
        container-flex--row
      '>
        <div className='section-heading__left'>
          <div className='left__text-headings'>
            <h1 className='h1 text-heading__primary text-highlight--bold'>
              <span className='text-highlight--color'>Высшее образование</span>
              <br />
              <span id='location-depended-heading'>
                дистанционно в вузах Москвы
              </span>
            </h1>

            <h2 className='h5 text-headings__secondary'>
              <span className='text-highlight--fw-500'>
                Подайте заявку на обучение или консультацию сейчас!
              </span>{' '}
              Менеджер расскажет о ВУЗах-партнерах, возможных скидках и подберет
              программу обучения.
            </h2>
          </div>
          <div className='left__call-to-action'>
            <div className='call-to-action__btn-group'>
              <p className='btn-group__limited'>
                <span className='text-highlight--bold text-highlight--color'>
                  *количество мест со скидкой ограничено
                </span>
              </p>

              <a
                id='main-popup-btn'
                href='#!'
                className='btn-group__btn btn btn-primary'
                type='button'>
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
                  </span>{' '}
                  Успейте получить!
                </p>
              </div>
            </div>
          </div>
          <div className='numbers-in-the-header'>
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
        <div className='section-heading__right'>
          <div className='right__img'>
            <div className='img__img-container'>
              <div className='img-container__circles'>
                <svg
                  className='circles__circle'
                  width='407'
                  height='407'
                  viewBox='0 0 407 407'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='203.5' cy='203.5' r='203.5' fill='#2874FF' />
                </svg>
                <svg
                  className='circles__circle--line'
                  width='1185'
                  height='1185'
                  viewBox='0 0 1185 1185'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    opacity='0.07'
                    cx='592.5'
                    cy='592.5'
                    r='592'
                    stroke='#2874FF'
                  />
                  <circle
                    opacity='0.3'
                    cx='592.5'
                    cy='592.5'
                    r='290'
                    stroke='#2874FF'
                  />
                  <circle
                    opacity='0.2'
                    cx='592.5'
                    cy='592.5'
                    r='386'
                    stroke='#2874FF'
                  />
                  <circle
                    opacity='0.1'
                    cx='592.5'
                    cy='592.5'
                    r='484'
                    stroke='#2874FF'
                  />
                </svg>
              </div>
              <div className='img-container__person'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default First
