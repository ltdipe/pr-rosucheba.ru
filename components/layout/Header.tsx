import Image from 'next/image'
import IconLogo from '@/components/icons/IconLogo'
import IconLocation from '@/components/icons/IconLocation'
import IconClock from '@/components/icons/IconClock'
import ImgRaboLogo from '@/public/assets/images/other/rabo.png'
import ImgDecmLogo from '@/public/assets/images/other/decm.png'

const Header = () => {
  return (
    <header>
      <div className='rectangle-gradient-maker--header'></div>
      <div className='container'>
        <div className='header-wrapper'>
          <div className='header-wrapper__header-items'>
            <div className='header-items__logo-container'>
              <IconLogo />
              <h2 className='logo-container__title text-highlight--color'>
                Дистанционное высшее образование
              </h2>
            </div>
            <div className='header-items__item-group-container'>
              <div className='item-group-container__row-wrapper'>
                <div className='row-wrapper__icon mr-4'>
                  <IconLocation />
                </div>
                <div className='row-wrapper__text'>
                  <p>Москва, Дербеневская набережная 11</p>
                </div>
              </div>
              <div className='item-group-container__row-wrapper mb-0'>
                <div className='row-wrapper__icon mr-4'>
                  <IconClock />
                </div>
                <div className='row-wrapper__text'>
                  <p>Приемная комиссия пн-пт с 9-00 до 19-00</p>
                </div>
              </div>
            </div>
            <div className='header-items__item-group-container fd-row'>
              <Image
                src={ImgRaboLogo}
                alt='Российская ассоциация бизнес-образования'
                width={146}
                height={76}
                layout='fixed'
                placeholder='blur'
              />
              <Image
                src={ImgDecmLogo}
                alt='Департамент образования города Москвы'
                width={146}
                height={55}
                layout='fixed'
                placeholder='blur'
              />
            </div>
            <div className='header-items__item-group-container'>
              <div className='item-group-container__row-wrapper mb-0'>
                <div
                  className='
                    row-wrapper__text
                    fd-column
                    row-wrapper__text--bigger
                    big-number
                  '>
                  <p className='text-highlight--color text-highlight--bold mr-4'>
                    +7 (499) 490-29-60
                  </p>
                  <p className='text-highlight--color are-there-questions-p'>
                    Есть вопросы? Звоните, проконсультируем!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='header-wrapper__menu'>
            <div className='menu__menu-mobile'>
              <input
                type='checkbox'
                className='menu-mobile__toggler'
                name='menu-toggle'
                id='menu-toggle'
              />
              <div className='menu-mobile__hamburder'>
                <div className='menu-btn__btn-line'></div>
                <div className='menu-btn__btn-line'></div>
                <div className='menu-btn__btn-line mb-0'></div>
              </div>
              <div className='menu-mobile__menu-panel'>
                <div className='menu-mobile__hamburder menu-mobile__hamburder--panel'></div>
                <div className='menu-panel__menu-panel-row'>
                  <div className='menu-panel-row__number-wrapper'>
                    <div className='number-wrapper__text'>
                      <p>Номер приемной комиссии:</p>
                    </div>
                    <div className='number-wrapper__number'>
                      <p>+7 (499) 490-29-60</p>
                    </div>
                    <div className='number-wrapper__btn'>
                      <a
                        id='cta-make-a-call'
                        href='tel:+7-499-490-2960'
                        className='btn btn-tertiary'>
                        НАБРАТЬ
                      </a>
                    </div>
                  </div>
                </div>
                <div className='menu-panel__menu-panel-row'>
                  <nav className='side-panel-nav'>
                    <ul className='side-panel-nav__side-panel-nav-items'>
                      <li className='side-panel-nav-items__nav-item'>
                        <a href='#about' className='nav-item__link'>
                          О Rosucheba
                        </a>
                      </li>
                      <li className='side-panel-nav-items__nav-item'>
                        <a href='#partners' className='nav-item__link'>
                          Вузы-партнеры
                        </a>
                      </li>
                      <li className='side-panel-nav-items__nav-item'>
                        <a href='#choose-from-many' className='nav-item__link'>
                          Специальности
                        </a>
                      </li>
                      <li className='side-panel-nav-items__nav-item'>
                        <a href='#what-to-do' className='nav-item__link'>
                          Поступление без ЕГЭ
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/*  This is area outside of menu is used to close the menu by click outside of it  */}
              <label
                htmlFor='menu-toggle'
                className='area-outside-of-menu'></label>
            </div>
            <hr className='header-wrapper__menu__line border-highlight--color' />
            <nav className='menu__menu-items-container'>
              <ul className='menu-items-container__menu-items'>
                <li className='menu-items__menu-item'>
                  <a href='#about' className='menu-item__link'>
                    О Rosucheba
                  </a>
                </li>
                <li className='menu-items__menu-item'>
                  <a href='#partners' className='menu-item__link'>
                    Вузы-партнеры
                  </a>
                </li>
                <li className='menu-items__menu-item'>
                  <a href='#needed-docs' className='menu-item__link'>
                    Документы для поступления
                  </a>
                </li>
                <li className='menu-items__menu-item'>
                  <a href='#choose-from-many' className='menu-item__link'>
                    Специальности
                  </a>
                </li>
                <li className='menu-items__menu-item'>
                  <a href='#what-to-do' className='menu-item__link'>
                    Поступление без ЕГЭ
                  </a>
                </li>
                <li className='menu-items__menu-item'>
                  <a href='#price-info' className='menu-item__link'>
                    Стоимость обучения
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
