const TrustedBy = () => {
  return (
    <section id='trusted-by' className='section-trust-boost'>
      <div className='container'>
        <div className='section__title'>
          <h2 className='h1 h1--padding-bottom text-highlight--color text-highlight--uppercase--desktop text-highlight--bold-mobile'>
            С нами <span className='desktop-only-initial'>обучаются и</span>{' '}
            сотрудничают
          </h2>
        </div>
        <div className='section__content'>
          <div id='content__img-group--1' className='content__img-group'>
            {/* <!-- Block of 4 logos one --> */}
            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__hh'></div>
            </div>
            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__rosseti'></div>
            </div>
            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__rzhd'></div>
            </div>
            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__rosneft'></div>
            </div>
          </div>

          {/* <!-- Block of 4 logos two --> */}
          <div id='content__img-group--2' className='content__img-group hidden'>
            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__tomc'></div>
            </div>

            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__greenworks'></div>
            </div>

            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__tatehepro'></div>
            </div>

            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__business-partner'></div>
            </div>
          </div>

          {/* <!-- Block of 4 logos three --> */}
          <div id='content__img-group--3' className='content__img-group hidden'>
            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__ramport'></div>
            </div>
            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__sberbank'></div>
            </div>
            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__mtcrob'></div>
            </div>
            <div className='img-group__img-wrapper'>
              <div className='img-wrapper__img--trust-boost img__qayar'></div>
            </div>
          </div>
        </div>
        <div className='section__section-nav'>
          <div
            id='carrousel-arrow-left-btn'
            className='section-nav__arrow-left'>
            <svg
              width='73'
              height='73'
              viewBox='0 0 73 73'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M36.5 2.14706C41.1391 2.14706 45.6379 3.05455 49.8705 4.8452C53.9613 6.57573 57.6357 9.052 60.7904 12.2082C63.9451 15.3644 66.4229 19.0373 68.1534 23.1281C69.9455 27.3621 70.8529 31.8609 70.8529 36.5C70.8529 41.1391 69.9454 45.6379 68.1548 49.8705C66.4243 53.9613 63.948 57.6357 60.7918 60.7904C57.6356 63.9466 53.9627 66.4229 49.8719 68.1534C45.6379 69.9455 41.1391 70.8529 36.5 70.8529C31.8609 70.8529 27.3621 69.9454 23.1295 68.1548C19.0387 66.4243 15.3644 63.948 12.2096 60.7918C9.05343 57.6356 6.57716 53.9627 4.84663 49.8719C3.05455 45.6379 2.14706 41.1391 2.14706 36.5C2.14706 31.8609 3.05455 27.3621 4.8452 23.1295C6.57573 19.0387 9.052 15.3644 12.2082 12.2096C15.3644 9.05486 19.0373 6.57716 23.1281 4.84663C27.3621 3.05455 31.8609 2.14706 36.5 2.14706ZM36.5 0C16.342 0 0 16.342 0 36.5C0 56.658 16.342 73 36.5 73C56.658 73 73 56.658 73 36.5C73 16.342 56.658 0 36.5 0Z'
                fill='#2874FF'
              />
              <path
                d='M44.0834 50.5904L29.993 36.5L44.0834 22.4096C45.0338 21.4591 45.0338 19.919 44.0834 18.9686C43.133 18.0181 41.5928 18.0181 40.6424 18.9686L24.8315 34.7795C23.881 35.7299 23.881 37.2701 24.8315 38.2205L40.6424 54.0315C41.5928 54.9819 43.133 54.9819 44.0834 54.0315C45.0338 53.081 45.0338 51.5409 44.0834 50.5904Z'
                fill='#2874FF'
              />
            </svg>
          </div>
          <div
            id='carrousel-arrow-right-btn'
            className='section-nav__arrow-right'>
            <svg
              width='73'
              height='73'
              viewBox='0 0 73 73'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M36.5 2.14706C31.8609 2.14706 27.3621 3.05455 23.1295 4.8452C19.0387 6.57573 15.3643 9.052 12.2096 12.2082C9.05486 15.3644 6.57715 19.0373 4.84662 23.1281C3.05454 27.3621 2.14706 31.8609 2.14706 36.5C2.14706 41.1391 3.05455 45.6379 4.84519 49.8705C6.57572 53.9613 9.052 57.6357 12.2082 60.7904C15.3644 63.9466 19.0373 66.4229 23.1281 68.1534C27.3621 69.9455 31.8609 70.8529 36.5 70.8529C41.1391 70.8529 45.6379 69.9454 49.8705 68.1548C53.9613 66.4243 57.6356 63.948 60.7904 60.7918C63.9466 57.6356 66.4228 53.9627 68.1534 49.8719C69.9455 45.6379 70.8529 41.1391 70.8529 36.5C70.8529 31.8609 69.9455 27.3621 68.1548 23.1295C66.4243 19.0387 63.948 15.3644 60.7918 12.2096C57.6356 9.05486 53.9627 6.57716 49.8719 4.84663C45.6379 3.05455 41.1391 2.14706 36.5 2.14706ZM36.5 0C56.658 0 73 16.342 73 36.5C73 56.658 56.658 73 36.5 73C16.342 73 0 56.658 0 36.5C0 16.342 16.342 0 36.5 0Z'
                fill='#2874FF'
              />
              <path
                d='M28.9166 50.5904L43.007 36.5L28.9166 22.4096C27.9662 21.4591 27.9662 19.919 28.9166 18.9686C29.867 18.0181 31.4072 18.0181 32.3576 18.9686L48.1685 34.7795C49.119 35.7299 49.119 37.2701 48.1685 38.2205L32.3576 54.0315C31.4072 54.9819 29.867 54.9819 28.9166 54.0315C27.9662 53.081 27.9662 51.5409 28.9166 50.5904Z'
                fill='#2874FF'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
