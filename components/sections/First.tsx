const First = () => {
  return (
    <section id='js-section-heading' className='section-heading'>
      <div className='rectangle-gradient-maker'></div>
      <div className='rectangle-gradient-maker-desktop desktop-only'></div>
      <div className='container container-flex container-flex--jc-start container-flex--row'>
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
              <span className='text-highlight--bold'>
                Подайте заявку на обучение или консультацию сейчас!
              </span>{' '}
              Менеджер расскажет о ВУЗах-партнерах и поможет подобрать
              направление.
            </h2>
          </div>

          <div id='submit-app' className='left__left-inputs'>
            <div className='left-inputs__left-inputs-inner'>
              <div id='fill-in-fields' className='fill-in-fields-below hidden'>
                <p>Заполните поля ниже</p>
                <svg
                  width='22'
                  height='21'
                  viewBox='0 0 22 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14 16.5355L16.8284 19.3639L17.5355 20.0711L18.2426 19.3639L21.0711 16.5355L20.364 15.8284L17.5355 18.6568L14.7071 15.8284L14 16.5355Z'
                    fill='#FB0000'
                  />
                  <path
                    d='M1 0.500021C15.3057 0.4422 18.0509 5.29583 17.5 19'
                    stroke='#FB0000'
                  />
                </svg>
              </div>
              {/*  Input one  */}
              <div className='container-input'>
                <div
                  id='input-select-choose-uni'
                  className='container-input__inner input-select-choose-uni'>
                  <div className='input-select__arrow-down'>
                    <svg
                      width='26'
                      height='14'
                      viewBox='0 0 26 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M24.3295 0L13.0013 10.8095L1.67047 0L0 1.59398L11.3282 12.406L13.0013 14L14.6718 12.406L26 1.59398L24.3295 0Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <div
                    id='input-select-choose-uni-inner-text'
                    className='input-style-primary input-style-select-primary'>
                    Выберите ВУЗ
                  </div>
                </div>
                <div
                  id='input-select-choose-uni-dropdown'
                  className='container-input__inner-dropdown input-select-choose-uni-dropdown'>
                  <ul className='inner-dropdown__inner-dropdown-items'>
                    <li
                      className='inner-dropdown-items__item'
                      data-uni='consultation-is-needed'>
                      <p>
                        <svg
                          className='inner-dropdown-items-uni__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Определюсь после консультации
                      </p>
                    </li>
                    <li
                      className='inner-dropdown-items__item'
                      data-uni='synergy'>
                      <p>
                        <svg
                          className='inner-dropdown-items-uni__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Московский финансово-промышленный университет (Синергия)
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item' data-uni='IPO'>
                      <p>
                        <svg
                          className='inner-dropdown-items-uni__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Институт профессионального образования (ИПО)
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item' data-uni='MOI'>
                      <p>
                        <svg
                          className='inner-dropdown-items-uni__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Московский Открытый Институт (МОИ)
                      </p>
                    </li>
                    <li
                      className='inner-dropdown-items__item'
                      data-uni='PocHOY'>
                      <p>
                        <svg
                          className='inner-dropdown-items-uni__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Российский Новый Университет (РосНОУ)
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item' data-uni='TGY'>
                      <p>
                        <svg
                          className='inner-dropdown-items-uni__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Тамбовский государственный университет (ТГУ)
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item' data-uni='CBA'>
                      <p>
                        <svg
                          className='inner-dropdown-items-uni__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Столичная Бизнес Академия (СБА)
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Input two  */}
              <div className='container-input'>
                <div
                  id='input-select-choose-programm'
                  className='container-input__inner input-select-choose-programm'>
                  <div className='input-select__arrow-down'>
                    <svg
                      width='26'
                      height='14'
                      viewBox='0 0 26 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M24.3295 0L13.0013 10.8095L1.67047 0L0 1.59398L11.3282 12.406L13.0013 14L14.6718 12.406L26 1.59398L24.3295 0Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <div
                    id='input-select-choose-programm-inner-text'
                    className='input-style-primary input-style-select-primary'>
                    Подберите направление
                  </div>
                </div>

                {/*  Programm dropdown step 1  */}
                <div
                  id='input-select-choose-programm-dropdown'
                  className='container-input__inner-dropdown input-select-choose-programm-dropdown'>
                  <ul className='inner-dropdown__inner-dropdown-items'>
                    <li className='inner-dropdown-items__item'>
                      <p>
                        <svg
                          className='inner-dropdown-items-programm__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Определюсь после консультации
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item'>
                      <p>
                        <svg
                          className='inner-dropdown-items-programm__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Колледж
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item'>
                      <p>
                        <svg
                          className='inner-dropdown-items-programm__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Бакалавриат
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item'>
                      <p>
                        <svg
                          className='inner-dropdown-items-programm__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Специалитет
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item'>
                      <p>
                        <svg
                          className='inner-dropdown-items-programm__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Магистратура
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item'>
                      <p>
                        <svg
                          className='inner-dropdown-items-programm__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Профессиональная переподготовка
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item'>
                      <p>
                        <svg
                          className='inner-dropdown-items-programm__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Повышение квалификации
                      </p>
                    </li>
                    <li className='inner-dropdown-items__item'>
                      <p>
                        <svg
                          className='inner-dropdown-items-programm__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Master of Business Administration (МВА)
                      </p>
                    </li>
                  </ul>
                </div>

                {/*  Programm dropdown step 2  */}
                <div
                  id='input-select-choose-programm-dropdown--step-two'
                  className='container-input__inner-dropdown input-select-choose-programm-dropdown--step-two'>
                  <ul
                    id='inner-dropdown-items--step-two'
                    className='inner-dropdown__inner-dropdown-items'>
                    <li
                      id='inner-dropdown-items__item--selected'
                      className='inner-dropdown-items__item inner-dropdown-items__item--selected'>
                      <p>
                        <svg
                          width='9'
                          height='15'
                          viewBox='0 0 9 15'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M8.20471 13.2882L2.41412 7.49765L8.20471 1.70706C8.5953 1.31647 8.5953 0.683529 8.20471 0.292941C7.81412 -0.097647 7.18118 -0.097647 6.79059 0.292941L0.292941 6.79059C-0.0976471 7.18118 -0.0976471 7.81412 0.292941 8.2047L6.79059 14.7024C7.18118 15.0929 7.81412 15.0929 8.20471 14.7024C8.5953 14.3118 8.5953 13.6788 8.20471 13.2882Z'
                            fill='#2874FF'
                          />
                        </svg>
                        <span
                          id='programm-dropdown-step-two-selected-step-one-item'
                          className='text-highlight--color'></span>
                      </p>
                    </li>
                    <li
                      id='js-insert-after--step-two'
                      className='inner-dropdown-items__item'>
                      <p>
                        <svg
                          className='inner-dropdown-items-programm__item__icon'
                          width='12'
                          height='9'
                          viewBox='0 0 12 9'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z'
                            fill='#fff'
                          />
                        </svg>
                        Определюсь после консультации
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Input three  */}
              <div id='container-input-phone-num' className='container-input'>
                <label htmlFor='phone-number'>
                  <p className='text-highlight--font-12 text-highlight--bold'>
                    <span className='text-highlight--color-red'> * </span>
                    Напишите свой номер:
                  </p>
                </label>
                <input
                  type='tel'
                  className='container-input-phone-number__input input-style-primary'
                  name='phone-number'
                  id='phone-number'
                  placeholder='Номер телефона'
                />
              </div>

              {/*  Input four  */}
              <div
                id='container-input--user-name'
                className='container-input container-input--user-name'>
                <label htmlFor='user-name'>
                  <p className='text-highlight--font-12 text-highlight--bold'>
                    Ваше имя:
                  </p>
                </label>
                <input
                  type='text'
                  className='container-input-phone-number__input input-style-primary'
                  name='user-name'
                  id='user-name'
                  placeholder=''
                />
              </div>
            </div>
          </div>

          <div className='left__call-to-action'>
            <div className='call-to-action__btn-group'>
              <p className='btn-group__limited'>
                <span className='text-highlight--bold text-highlight--color'>
                  *количество мест со скидкой ограничено
                </span>
              </p>

              <a
                id='cta-submit-application'
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
